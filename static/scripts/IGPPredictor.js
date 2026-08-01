let predictionModel = null;

fetch ('/static/predictions.json')
    .then(response => response.json())
    .then(data => {
        predictionModel = data;
        console.log("Model successfully loaded.")
    })

const db_currentYearForIGPPredictor = [
    {coursename: "Law", university: "NUS", rpigp: "85", gpaigp: "##", studentintake: "252"},
    {coursename: "Medicine", university: "NUS", rpigp: "85", gpaigp: "3.87", studentintake: "286"},
    {coursename: "Nursing", university: "NUS", rpigp: "65", gpaigp: "3.18", studentintake: "343"},
    {coursename: "Dentistry", university: "NUS", rpigp: "85", gpaigp: "##", studentintake: "80"},
    {coursename: "Architecture", university: "NUS", rpigp: "67.5", gpaigp: "3.27", studentintake: "165"},
    {coursename: "Engineering", university: "NUS", rpigp: "75", gpaigp: "3.57", studentintake: "1259"},
    {coursename: "Industrial Design", university: "NUS", rpigp: "73.75", gpaigp: "3.56", studentintake: "43"},
    {coursename: "Landscape Architecture", university: "NUS", rpigp: "68.75", gpaigp: "3.37", studentintake: "47"},
    {coursename: "Computing (Business Analytics)", university: "NUS", rpigp: "85", gpaigp: "3.75", studentintake: "274"},
    {coursename: "Computing (Information Systems/Business AI Systems)", university: "NUS", rpigp: "83.75", gpaigp: "3.71", studentintake: "93"},
    {coursename: "Computing (Computer Science)", university: "NUS", rpigp: "85", gpaigp: "3.81", studentintake: "893"},
    {coursename: "Computing (Information Security)", university: "NUS", rpigp: "83.75", gpaigp: "3.88", studentintake: "47"},
    {coursename: "Computer Engineering", university: "NUS", rpigp: "85", gpaigp: "3.81", studentintake: "203"},
    {coursename: "Data Science & Economics", university: "NUS", rpigp: "85", gpaigp: "##", studentintake: "103"},
    {coursename: "Environmental Studies", university: "NUS", rpigp: "83.75", gpaigp: "3.67", studentintake: "45"},
    {coursename: "Food Science & Technology", university: "NUS", rpigp: "82.5", gpaigp: "3.64", studentintake: "45"},
    {coursename: "Humanities & Sciences", university: "NUS", rpigp: "77.5", gpaigp: "3.63", studentintake: "1976"},
    {coursename: "Pharmaceutical Science", university: "NUS", rpigp: "85", gpaigp: "3.93", studentintake: "65"},
    {coursename: "Pharmacy", university: "NUS", rpigp: "82.5", gpaigp: "3.73", studentintake: "193"},
    {coursename: "Philosophy, Politics & Economics", university: "NUS", rpigp: "85", gpaigp: "##", studentintake: "43"},
    {coursename: "Business Administration", university: "NUS", rpigp: "82.5", gpaigp: "3.61", studentintake: "914"},

    {coursename: "Medicine", university: "NTU", rpigp: "85", gpaigp: "##", studentintake: "189"},
    {coursename: "Renaissance Engineering", university: "NTU", rpigp: "85", gpaigp: "##", studentintake: "62"},
    {coursename: "Aerospace Engineering", university: "NTU", rpigp: "76.25", gpaigp: "3.72", studentintake: "103"},
    {coursename: "Bioengineering", university: "NTU", rpigp: "71.25", gpaigp: "3.56", studentintake: "119"},
    {coursename: "Chemical & Biomolecular Engineering", university: "NTU", rpigp: "70", gpaigp: "3.5", studentintake: "178"},
    {coursename: "Civil Engineering", university: "NTU", rpigp: "63.75", gpaigp: "3.48", studentintake: "119"},
    {coursename: "Electrical & Electronic Engineering", university: "NTU", rpigp: "66.25", gpaigp: "3.48", studentintake: "688"},
    {coursename: "Engineering", university: "NTU", rpigp: "##", gpaigp: "##", studentintake: "17"},
    {coursename: "Environmental Engineering", university: "NTU", rpigp: "68.75", gpaigp: "3.59", studentintake: "54"},
    {coursename: "Information Engineering & Media", university: "NTU", rpigp: "68.75", gpaigp: "3.57", studentintake: "120"},
    {coursename: "Maritime Studies", university: "NTU", rpigp: "70", gpaigp: "3.59", studentintake:" 135"},
    {coursename: "Materials Engineering", university: "NTU", rpigp: "68.75", gpaigp: "3.43", studentintake: "176"},
    {coursename: "Mechanical Engineering", university: "NTU", rpigp: "65", gpaigp: "3.49", studentintake: "422"},
    {coursename: "Process Engineering and Synthetic Chemistry", university: "NTU", rpigp: "75", gpaigp: "##", studentintake: "9"},
    {coursename: "Robotics", university: "NTU", rpigp: "73.75", gpaigp: "3.7", studentintake: "34"},
    {coursename: "Artificial Intelligence & Society", university: "NTU", rpigp: "75", gpaigp: "##", studentintake: "27"},
    {coursename: "Computer Engineering", university: "NTU", rpigp: "77.5", gpaigp: "3.66", studentintake: "253"},
    {coursename: "Computer Science", university: "NTU", rpigp: "80", gpaigp: "3.78", studentintake: "487"},
    {coursename: "Data Science & Artificial Intelligence", university: "NTU", rpigp: "81.25", gpaigp: "3.89", studentintake: "202"},
    {coursename: "College of Science Double Major Programmes", university: "NTU", rpigp: "81.25", gpaigp: "3.82", studentintake: "152"},
    {coursename: "Biological Sciences", university: "NTU", rpigp: "80", gpaigp: "3.64", studentintake: "217"},
    {coursename: "Chemistry & Biological Chemistry", university: "NTU", rpigp: "70", gpaigp: "3.5", studentintake: "170"},
    {coursename: "Chinese Medicine", university: "NTU", rpigp: "76.25", gpaigp: "##", studentintake: "39"},
    {coursename: "Environmental Earth Systems Science", university: "NTU", rpigp: "81.25", gpaigp: "##", studentintake: "57"},
    {coursename: "Mathematical Sciences", university: "NTU", rpigp: "71.25", gpaigp: "3.42", studentintake: "135"},
    {coursename: "Physics/Applied Physics", university: "NTU", rpigp: "66.25", gpaigp: "3.42", studentintake: "65"},
    {coursename: "Accountancy", university: "NTU", rpigp: "73.75", gpaigp: "3.63", studentintake: "298"},
    {coursename: "Business", university: "NTU", rpigp: "73.75", gpaigp: "3.65", studentintake: "732"},
    {coursename: "Applied Computing in Finance", university: "NTU", rpigp: "77.5", gpaigp: "3.72", studentintake: "39"},
    {coursename: "School of Humanities Double Major Programmes", university: "NTU", rpigp: "82.5", gpaigp: "3.51", studentintake: "39"},
    {coursename: "School of Social Sciences Double Major Programmes", university: "NTU", rpigp: "82.5", gpaigp: "##", studentintake: "19"},
    {coursename: "Art, Design & Media (ADM)", university: "NTU", rpigp: "67.5", gpaigp: "3.43", studentintake: "125"},
    {coursename: "Chinese", university: "NTU", rpigp: "72.5", gpaigp: "3.41", studentintake: "73"},
    {coursename: "Communication Studies", university: "NTU", rpigp: "76.25", gpaigp: "3.66", studentintake: "154"},
    {coursename: "Economics", university: "NTU", rpigp: "76.25", gpaigp: "3.6", studentintake: "109"},
    {coursename: "Economics and Data Science", university: "NTU", rpigp: "81.25", gpaigp: "##", studentintake: "49"},
    {coursename: "English", university: "NTU", rpigp: "72.5", gpaigp: "3.38", studentintake: "74"},
    {coursename: "History", university: "NTU", rpigp: "71.25", gpaigp: "3.41", studentintake: "72"},
    {coursename: "Linguistics & Multilingual Studies", university: "NTU", rpigp: "72.5", gpaigp: "3.54", studentintake: "54"},
    {coursename: "Philosophy", university: "NTU", rpigp: "72.5", gpaigp: "3.43", studentintake: "32"},
    {coursename: "Philosophy, Politics & Economics", university: "NTU", rpigp: "81.25", gpaigp: "##", studentintake: "14"},
    {coursename: "Psychology", university: "NTU", rpigp: "78.75", gpaigp: "3.64", studentintake: "105"},
    {coursename: "Public Policy & Global Affairs", university: "NTU", rpigp: "81.25", gpaigp: "3.6", studentintake: "36"},
    {coursename: "Sociology", university: "NTU", rpigp: "72.5", gpaigp: "3.59", studentintake: "84"},
    {coursename: "NIE Arts (Academic Discipline & Education)", university: "NTU", rpigp: "71.25", gpaigp: "##", studentintake: "51"},
    {coursename: "Science (Academic Discipline & Education)", university: "NTU", rpigp: "72.5", gpaigp: "##", studentintake: "26"},
    {coursename: "Sport Science & Management", university: "NTU", rpigp: "68.75", gpaigp: "3.47", studentintake: "72"},

    {coursename: "Accountancy", university: "SMU", rpigp: "75", gpaigp: "3.71", studentintake: "268"},
    {coursename: "Business Management", university: "SMU", rpigp: "77.5", gpaigp: "3.78", studentintake: "980"},
    {coursename: "Law", university: "SMU", rpigp: "85", gpaigp: "3.73", studentintake: "182"},
    {coursename: "Economics", university: "SMU", rpigp: "75", gpaigp: "3.65", studentintake: "217"},
    {coursename: "Information Systems Management", university: "SMU", rpigp: "72.5", gpaigp: "3.61", studentintake: "406"},
    {coursename: "Computer Science", university: "SMU", rpigp: "81.25", gpaigp: "3.8", studentintake: "135"},
    {coursename: "Computing & Law", university: "SMU", rpigp: "80", gpaigp: "##", studentintake: "30"},
    {coursename: "Software Engineering (WSDeg)", university: "SMU", rpigp: "73.75", gpaigp: "3.67", studentintake: "89"},
    {coursename: "Social Sciences", university: "SMU", rpigp: "75", gpaigp: "3.65", studentintake: "216"},
    {coursename: "Deferred Declaration of Degree (College of Integrative Studies)", university: "SMU", rpigp: "80", gpaigp: "3.73", studentintake: "71"},
];

// 1. Create a global variable called track
let track = '';

// 2. Connect event listeners only once upon loading of the webpage (initial document readiness)
document.addEventListener('DOMContentLoaded', () => {
    const trackRows = document.querySelectorAll('.jc-or-poly-container');

    trackRows.forEach((row) => {
        const buttons = row.querySelectorAll('button');

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                
                // Dynamically identify track type based on button id
                const selectedTrack = (button.id === 'button-a-level') ? 'A-Level' : 'Poly';

                if (button.classList.contains('active')) {
                    // First Scenario: User clicks on the already active button, turn off everything
                    button.classList.remove('active');
                    track = '';
                    hideAll();
                } 
                
                else {
                    // Second Scenario: User clicks a new choice, turn off siblings and activate selection of that choice
                    buttons.forEach(otherButton => otherButton.classList.remove('active'));
                    button.classList.add('active');
                    
                    track = selectedTrack;
                    applyDynamicContainerDisplayState(selectedTrack);
                }
            });
        });
    });
});


function applyDynamicContainerDisplayState(selectedTrack) {
    // Display the dynamic container
    document.getElementById('dynamic-container').classList.remove('hidden');

    if (selectedTrack === 'A-Level') {
        document.getElementById('a-level-form').classList.remove('hidden');
        document.getElementById('poly-form').classList.add('hidden'); // Lock out matching poly fields
    } else if (selectedTrack === 'Poly') {
        document.getElementById('poly-form').classList.remove('hidden');
        document.getElementById('a-level-form').classList.add('hidden'); // Lock out matching A-level fields
    }
}

function hideAll() {
    document.getElementById('dynamic-container').classList.add('hidden');
    document.getElementById('a-level-form').classList.add('hidden');
    document.getElementById('poly-form').classList.add('hidden');
}

// Dynamic Update to Results Container
function updatePrediction() {
    // Get all the required DOM Elements
    const aLevelForm = document.getElementById('a-level-form');
    const polyForm = document.getElementById('poly-form');
    const numberofCourses = document.getElementById('courses-number');
    const coursesListContainer = document.getElementById('courses-list-container');
    const universityFilterOption = document.getElementById('university-filter');
    const useraLevelInput = document.getElementById('a-level-course').value.toLowerCase();
    const userpolyInput = document.getElementById('poly-course').value.toLowerCase();
    const defaultText = "";
    const warningText = "Please input text only."
    let userInput = '';
    let userInputType = '';

    // if the a-level form is not hidden,
    if (!aLevelForm.classList.contains('hidden')) {
        userInput = useraLevelInput;
        userInputType = 'A-level'; 
    
    // if the poly form is not hidden,
    } else if (!polyForm.classList.contains('hidden')) {
        userInput = userpolyInput;
        userInputType = 'Poly';

    // if both are hidden,
    } else {
        userInput = '';
        userInputType = '';
        coursesListContainer.innerHTML = defaultText;
        return;
    }

    let activeuserInput = '';
    if (userInputType === 'A-level') {
        activeuserInput = useraLevelInput;
    } else {
        activeuserInput = userpolyInput;
    }

    // User Clearing Case before any checks and filtering take place
    // trim() deletes white spaces at the front and end of the string
    // If trim() === '' is TRUE, it means user left the input box completely empty without blank spaces, or the user typed only blank spaces
    if (activeuserInput.trim() === '') {
        numberofCourses.innerHTML = `<b>Number of Courses</b>: 0`;
        coursesListContainer.innerHTML = `No Courses Found.`;
        return; // exits the entire function once user clears input or the input only has blank spaces
    }

    const allowedInput = /^[A-Za-z\s\/&,]+$/;
    if (!allowedInput.test(activeuserInput)) {
        coursesListContainer.innerHTML = warningText;
        return;
    }

    // Filter courses based on course name typed and university selection, filtering on a row by row mechanism
    // Once false, it exits the filter for that row, excludes that row and move on to next row for filtering
    const searchCourses = db_currentYearForIGPPredictor.filter((row) => {
        // If user filters by specific university and the row in the database does not contain the matching university, 
        // return false and remove from the display list
        if (universityFilterOption.value !== 'All' && row.university !== universityFilterOption.value) {
            return false;
        }  
        if (!filterSearch(row.coursename, activeuserInput)) {
            return false; 
        }
        else {  
            return true; 
        }
    });

    // Display the results in the results container
    if (searchCourses.length === 0) {
        numberofCourses.innerHTML = `<b>Number of Courses</b>: ${searchCourses.length}`;
        coursesListContainer.innerHTML = "No Courses Found."}

    else {
        numberofCourses.innerHTML = `<b>Number of Courses</b>: ${searchCourses.length}`;
        
        const html = searchCourses.map((row) => {
            // Clean up current row strings to guarantee perfect key lookup match
            const cleanedUni = row.university ? String(row.university).trim() : "";
            const cleanedCourse = row.coursename ? String(row.coursename).trim() : "";

            // Create identical lookup key to match the one in Python
            const modelKey = `${cleanedUni},${cleanedCourse}`;
            const predictions = predictionModel[modelKey];

            // Assign Future Values. In cases when the model can't find a match, default to "N/A"
            const futureRP = predictions? predictions.future_rpigp : "N/A";
            const futureGPA = predictions? predictions.future_gpaigp : "N/A";
            const futureIntake = predictions? predictions.future_studentintake : "N/A";

            return `<div class = "courses-list-container">
                <div class = "courses-list">
                    <span><strong>${row.university}</strong></span>
                    <span>${row.coursename}</span>
                    <span class = requirement>${(userInputType === 'A-level') ? 'Current IGP: ' + row.rpigp : 'Current IGP: ' + row.gpaigp}</span>
                    <span class = future-requirement>${(userInputType === 'A-level') ? 'Future IGP: ' + futureRP : 'Future IGP: ' + futureGPA}</span>
                    <span class = requirement>${'Current Intake: ' + row.studentintake}</span>
                    <span class = future-requirement>${'Future Intake: ' + futureIntake}</span>
                </div>
            </div>`;
        }).join('');

        coursesListContainer.innerHTML = html;
    }
}

// For cases where users use initials (Type CS and Computer Science can still show up in the list)
// As long as the coursename contains a matching character with each character of the user input, it displays the course
function filterSearch (coursename, userinput) {

    const courseName = coursename.toLowerCase();
    const userInput = userinput.toLowerCase().trim();

    let searchIndex = 0;
    for (let i = 0; i < courseName.length; i++) {
        if (courseName[i] === userInput[searchIndex]) {
            searchIndex ++; // Found a matching character, moves on to the next character of the user input for checking
        }
        if (searchIndex === userInput.length) {
            return true; // Searched all in sequence, till the last character of the user input
        }
    }
    // At this stage, the loop finishes
    // Each letter in the coursename has been checked
    // searchIndex never reached userInput length
    return false;
}