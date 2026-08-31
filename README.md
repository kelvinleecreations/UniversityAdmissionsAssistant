# UniversityAdmissionsAssistant
## About
A webpage platform that aims to help prospective university students in university admissions and thereafter.
It contains four services with a limited scope and target audience:
1. **PointsCalculator** (*for A Level Graduates only*)
2. **CourseMatcher** (*for both A Level and Poly Graduates*) - using the latest IGP as of this project: AY25/26
3. **IGPPredictor** (*for both A Level and Poly Graduates*) - for IGP of AY26/27
4. **AIChatbot** (*for NTU only*)

## Rationale
I wanted to create a project that encompasses aspects of calculation, data referencing, predictive techniques and retrieval-augmented generation.
Thus, I decided to merge all four services into one platform and consolidate as a single project.

## General Instructions
#### Step 1: Install Ollama on your computer.
#### Step 2: Clone the repository.
#### Step 3: Create and activate a virtual environment using the Terminal (in your Github Codespace or Visual Studio Code).
##### Creating Virtual Environment
```bash
python -m venv .venv
```
##### Activating Virtual Environment (For Windows)
```bash
./.venv/Scripts/activate
```
##### Activating Virtual Environment (For Mac)
```bash
./.venv/bin/activate
```
#### Step 4: Ensure python is at 3.11.1. Install the required packages.
#### Step 5: Pull Ollama Model and Embedding.
```bash
ollama pull llama3.2
ollama pull nomic-embed-text
```
#### *Step 6: Create a FAQs_PDF folder within the repository and populate it with PDFs provided or from NTU website to test the chatbot.
#### Step 7: Run.
```python
python app.py
```

*Step 6 (not the best way as of now, will update again)

## Additional Notes (1 Aug 2026):
This project and README was made before I entered NUS-ISS to study GDipSA. I acknowledge that there are many flaws in this project at this stage, such as:
- No usage of SQL for database management
- No testing made yet
- No frameworks used
- No deployment on cloud, can only run locally
- Only used basic HTML, CSS and JS for frontend, more work required on the aesthetics of the webpage
- Code could be improved and be more concise

Hence, this project will be updated to the best of my ability as I acquire knowledge from the GDipSA course.

## Declaration
- Frontend basics was learnt from Youtube Creators, such as SuperSimpleDev.
- I acknowledge the usage of AI in certain areas of the code and to help me understand the logic behind the code.