from flask import Flask, render_template, jsonify, send_from_directory, request
import os

from langchain_ollama.llms import OllamaLLM

model = OllamaLLM(model="llama3.2")

from langchain_community.document_loaders import PyPDFDirectoryLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings.ollama import OllamaEmbeddings
from langchain_core.prompts import ChatPromptTemplate

embeddings = OllamaEmbeddings(model="nomic-embed-text")

# Define directory path, choose all ending with .pdf and load the documents
data_directory = "./FAQs_PDF"
loader = PyPDFDirectoryLoader(data_directory, glob="**/*.pdf")
documents = loader.load()

# Split the documents into smaller chunks
splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=100)
texts = splitter.split_documents(documents)

# Create a vector database using Chroma and Ollama embeddings
vector_store = Chroma.from_documents(
    documents = texts,
    collection_name = "faq_collection",
    embedding = embeddings,
    persist_directory = "./chroma_db"
    )

# Rag Pipeline
retriever = vector_store.as_retriever(search_kwargs={"k": 5})
template = """
You are an AI Chatbot designed to answer questions posed by prospective students
relating to admissions, matriculation and candidature matters.

The following context will be given to you: {context}. Answer only with the provided
context. You must answer the question in clear and concise manner (in bullet forms, 
start a new line for each bullet point).
Answer should be capped at 500 words.
Do not replace technical terms with your own terms.
If the answer is not found in the context, respond with "Not Sure."

Question: {question}"""

prompt = ChatPromptTemplate.from_template(template)
pipeline = prompt | model

app = Flask(__name__)

@app.route("/", methods = ["GET", "POST"])
def WelcomePage():
    return render_template("WelcomePage.html")

@app.route("/PointsCalculator", methods = ["GET", "POST"])
def PointsCalculator():
    return render_template("PointsCalculator.html")

@app.route("/CourseMatcher", methods = ["GET", "POST"])
def CourseMatcher():
    return render_template("CourseMatcher.html")

@app.route("/IGPPredictor", methods = ["GET", "POST"])
def IGPPredictor():
    return render_template("IGPPredictor.html")

@app.route("/AIChatbot", methods = ["GET", "POST"])
def AIChatbot():
    return render_template("AIChatbot.html")

@app.route("/RAG", methods = ["POST"])
def RAG():
    data = request.get_json()
    user_query = data.get("question", "")

    # Not needed anymore since there's a code in JS that prevents empty sending of message
    if not user_query:
        return jsonify({"response": "Please enter a valid question"})
    
    try: 
        context = retriever.invoke(user_query)
        cleaned_context = []

        # Getting Source Documents
        # set() is similar to a list, just that there are no duplicates within it and the items are not indexed/ordered
        source = set()
        
        for doc in context:
            # In Langchain, for document objects, there are 2 attributes - 1) .metadata & 2) .page_content
            # .metadata should contain information like URL or filepath
            # .page_content should only contain raw strings of text
            # Langchain saves the file path in the metadata dictionary under the key "source"
            file_path = doc.metadata.get("source", "")
            if file_path:
                # Changes the name from 'FAQs_PDF/Admissions.pdf' to 'Admissions.pdf'
                file_name = os.path.basename(file_path)
                source.add(file_name)

            # Extract only text content from the document and ignore metadata in the response
            cleaned_context.append(doc.page_content)
        
        # Combining the cleaned context into a single string from 5 chunks
        # Within the string, they are separated by a blank line for better readability
        combined_context = "\n\n".join(cleaned_context)

        # Passing the combined_context and user_query
        # and injecting it into placeholder {context} and {question} within the template
        output = pipeline.invoke({"context": combined_context, "question": user_query})

        # Returning the AI response and the relevant source documents used
        # Pairing the AI's response (output) with key "response", and reference data with key "source"
        # list(source) converts the source variable into a standard Python list, to prevent code from crashing
        # jsonify() is a flask function that converts Python dictionary into a json formatted string
        # jsonify() also automatically sets the HTTP header to Content-Type: application/json, before
        # sending the data back to frontend that made the request.
        return jsonify({"response": output, "source": list(source)})
    
    except Exception as e:
        return jsonify({"response": f"An error occurred: {str(e)}"})

# Creating a URL route for viewing or downloading of pdf files stored in a specific folder by users
# Defines a Python variable to store the string path
pdf_folder = "./FAQs_PDF"
# <path:filename> is a dynamic variable placeholder
# path: is a converter to allow filename to include forward slashes such as 'FAQs_PDF/Scholarships.pdf'
# The variable filename will capture only the name right after /FAQs_PDF/
@app.route("/FAQs_PDF/<path:filename>")
# Function that acknowledges the filename variable and to know exactly which file matches the user's request
def serve_pdf(filename):
    # Reads the file and sends it to the user's browser
    return send_from_directory(pdf_folder, filename)

if __name__ == "__main__":
    app.run()


