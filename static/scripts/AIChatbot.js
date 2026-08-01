function sendMessage() {
    const inputField = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const sendButton = document.getElementById("send-button");

    const userMessage = inputField.value.trim();

    // No sending of empty messages
    if (!userMessage) return; 

    // Adds user message to display within the chat box from the user end, clears the user message within the typing area
    chatBox.innerHTML += `<div class = "message user-message">${userMessage}</div>`;
    inputField.value = "";
    // Forces the scrollbar to the bottom of the chatbox after sending a message
    chatBox.scrollTop = chatBox.scrollHeight;
    
    // Disable the usage of send button
    sendButton.disabled = true;
    inputField.disabled = true;

    // Apply a loading animation or message, create a new element and add it into the chatbox using appendchild
    const loadingMessage = document.createElement("div");
    loadingMessage.className = "message bot-message";
    loadingMessage.innerHTML = "The AI Chatbot is extracting information and typing...";
    chatBox.appendChild(loadingMessage);
    // Forces the scrollbar to the bottom of the chatbox after sending a message
    chatBox.scrollTop = chatBox.scrollHeight;

    // Send the message to the server (backend), and waits to receive a response back
    // fetch("/RAG", { - Starts a request to the server
    fetch("/RAG", {
        // Sets the HTTP method to "POST", to securely send data (user question) to the server
        method: "POST",
        // Informs backend server what format the data being sent is
        // This allows the backend to know it requires the usage of json tools such as request.get_json() to read the message
        headers: {
            "Content-Type": "application/json"
        },
        // Converts a JS object into a raw string of text
        // User Message (value) is being assigned to question (key)
        // json.stringify() needed as networks cannot transmit JS objects directly
        body: JSON.stringify({question: userMessage})
    })

    // Waits for the server and converts raw response by server back into a JS object
    .then(response => response.json())
    // Inside this block, the data variable contains everything sent by the backend
    // data.response for the data.response for the AI output and data.source for the documents
    .then(data => {
        // Remove the loading message
        chatBox.removeChild(loadingMessage);

        // Format AI Response - force every bullet point and paragraph onto a brand new line
        const formattedAIResponse = data.response
            .trim() // Removes accidental empty spaces at the start and end of the response
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Converts bold text to HTML <strong> tags
            .replace(/\n{3,}/g, "\n\n") // Reduce massive gaps to a single blank line for paragraphs
            .replace(/\n/g, "<br>"); // Converts new lines to HTML <br> tags, for bullet point formatting without any empty line spacing in between
        
        let AIResponse = `<div>${formattedAIResponse}</div>`;

        // Check if there are any sources matching, creates a source document section that lists out the documents it referenced from
        if (data.source && data.source.length > 0) {
            AIResponse += `<div class = "source-documents-section">`;
            AIResponse += `<strong>Official / Adapted Source Document(s): </strong>`;
            data.source.forEach(source => {
                AIResponse += `<div class = "source-documents-list"><a href="/FAQs_PDF/${source}" target="_blank">${source}</a></div>`;
            });

            AIResponse += `</div>`;
        }

       // Add the finalised complete AI response into the message by chat bot
        chatBox.innerHTML += `<div class = "message chatbot-message">${AIResponse}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
  
        // Re-enable the usage of send button and typing field
        sendButton.disabled = false;
        inputField.disabled = false;
    })

    // This block catches any errors and informs the user during fetch() or .then()
    // error is a variable to hold error details, such as network timeout or system crash
    .catch(error => {
        // Styles the message in red text, prints the label "Error:" followed by the actual technical error object
        // This message is only visible in the console, not on the user interface
        console.error("Error:", error);
        // This will show the error message to the user
        chatBox.removeChild(loadingMessage);
        chatBox.innerHTML += `<div class = "message chatbot-message">An error occurred. Please try again.</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;

        // Re-enable the usage of send button and typing field
        sendButton.disabled = false;
        inputField.disabled = false;
    });
}
