const db_courseMatcher = [
    {coursename: "Law", university: "NUS", rpigp: "85", gpaigp: "##", studentintake: "252"},
    {coursename: "Medicine", university: "NUS", rpigp: "85", gpaigp: "3.87", studentintake: "286"},
    {coursename: "Nursing", university: "NUS", rpigp: "65", gpaigp: "3.18", studentintake: "343"},
    {coursename: "Dentistry", university: "NUS", rpigp: "85", gpaigp: "##", studentintake: "80"},
    {coursename: "Architecture", university: "NUS", rpigp: "67.5", gpaigp: "3.27", studentintake: "165"},
    {coursename: "Engineering", university: "NUS", rpigp: "75", gpaigp: "3.57", studentintake: "1259"},
    {coursename: "Industrial Design", university: "NUS", rpigp: "73.75", gpaigp: "3.56", studentintake: "43"},
    {coursename: "Landscape Architecture", university: "NUS", rpigp: "68.75", gpaigp: "3.37", studentintake: "47"},
    {coursename: "Computing (Business Analytics)", university: "NUS", rpigp: "85", gpaigp: "3.75", studentintake: "274"},
    {coursename: "Computing (Information Systems/Business AI Systems", university: "NUS", rpigp: "83.75", gpaigp: "3.71", studentintake: "93"},
    {coursename: "Computing (Computer Science)", university: "NUS", rpigp: "85", gpaigp: "3.81", studentintake: "893"},
    {coursename: "Computing (Information Security)", university: "NUS", rpigp: "83.75", gpaigp: "3.88", studentintake: "47"},
    {coursename: "Computing Engineering", university: "NUS", rpigp: "85", gpaigp: "3.81", studentintake: "203"},
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
    {coursename: "Mechancial Engineering", university: "NTU", rpigp: "65", gpaigp: "3.49", studentintake: "422"},
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
    {coursename: "Mathematical Sciencs", university: "NTU", rpigp: "71.25", gpaigp: "3.42", studentintake: "135"},
    {coursename: "Physics/Applied Physics", university: "NTU", rpigp: "66.25", gpaigp: "3.42", studentintake: "65"},
    {coursename: "Accountancy", university: "NTU", rpigp: "73.75", gpaigp: "3.63", studentintake: "298"},
    {coursename: "Business", university: "NTU", rpigp: "73.75", gpaigp: "3.65", studentintake: "732"},
    {coursename: "Applied Computing in Finance", university: "NTU", rpigp: "77.5", gpaigp: "3.72", studentintake: "39"},
    {coursename: "School of Humanities Double Major Programmes", university: "NTU", rpigp: "82.5", gpaigp: "3.51", studentintake: "39"},
    {coursename: "School of Social Sciences Double Major Programmes", university: "NTU", rpigp: "82.5", gpaigp: "##", studentintake: "19"},
    {coursename: "Art, Design & Media", university: "NTU", rpigp: "67.5", gpaigp: "3.43", studentintake: "125"},
    {coursename: "Chinese", university: "NTU", rpigp: "72.5", gpaigp: "3.41", studentintake: "73"},
    {coursename: "Communication Studies", university: "NTU", rpigp: "76.25", gpaigp: "3.66", studentintake: "154"},
    {coursename: "Economics", university: "NTU", rpigp: "76.25", gpaigp: "3.6", studentintake: "109"},
    {coursename: "Economics and Data Science", university: "NTU", rpigp: "81.25", gpaigp: "##", studentintake: "49"},
    {coursename: "English", university: "NTU", rpigp: "72.5", gpaigp: "3.38", studentintake: "74"},
    {coursename: "History", university: "NTU", rpigp: "71.25", gpaigp: "3.41", studentintake: "72"},
    {coursename: "Linguistics & Multilingual Studies", university: "NTU", rpigp: "72.5", gpaigp: "3.54", studentintake: "54"},
    {coursename: "Philosophy", university: "NTU", rpigp: "72.5", gpaigp: "3.43", studentintake: "32"},
    {coursename: "Philosopy, Politics & Economics", university: "NTU", rpigp: "81.25", gpaigp: "##", studentintake: "14"},
    {coursename: "Psychology", university: "NTU", rpigp: "78.75", gpaigp: "3.64", studentintake: "105"},
    {coursename: "Public Policy & Global Affairs", university: "NTU", rpigp: "81.25", gpaigp: "3.6", studentintake: "36"},
    {coursename: "Sociology", university: "NTU", rpigp: "72.5", gpaigp: "3.59", studentintake: "84"},
    {coursename: "NIE Arts (Academic Discipline & Education)", university: "NTU", rpigp: "71.25", gpaigp: "##", studentintake: "51"},
    {coursename: "Science (Academic Discipline & Education)", university: "NTU", rpigp: "72.5", gpaigp: "##", studentintake: "26"},
    {coursename: "Sports Science & Management", university: "NTU", rpigp: "68.75", gpaigp: "3.47", studentintake: "72"},

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


// 1. Maintain state cleanly with a uniquely named global variable
let cert = '';

// 2. Bind event listeners EXACTLY ONCE on initial document readiness
document.addEventListener('DOMContentLoaded', () => {
    const certRows = document.querySelectorAll('.jc-or-poly-container');

    certRows.forEach((row) => {
        const buttons = row.querySelectorAll('button');

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                
                // Identify cert type dynamically based on button ID
                const selectedCert = (button.id === 'button-a-level') ? 'A-Level' : 'Poly';

                if (button.classList.contains('active')) {
                    // Scenario A: User clicks the ALREADY active button -> Turn off everything cleanly
                    button.classList.remove('active');
                    cert = '';
                    hideAll();
                } else {
                    // Scenario B: User clicks a new choice -> Clear siblings, activate selection
                    buttons.forEach(otherButton => otherButton.classList.remove('active'));
                    button.classList.add('active');
                    
                    cert = selectedCert;
                    applyDynamicContainerDisplayState(selectedCert);
                }
            });
        });
    });
});

// Helper Function 1: Handle state transformations explicitly 
function applyDynamicContainerDisplayState(selectedCert) {
    // Ensure container workspace surface becomes visible
    document.getElementById('dynamic-container').classList.remove('hidden');

    if (selectedCert === 'A-Level') {
        document.getElementById('a-level-form').classList.remove('hidden');
        document.getElementById('poly-form').classList.add('hidden'); // Lock out matching poly fields
    } else if (selectedCert === 'Poly') {
        document.getElementById('poly-form').classList.remove('hidden');
        document.getElementById('a-level-form').classList.add('hidden'); // Lock out matching A-level fields
    }
}

// Helper Function 2: Minimize UI footprint cleanly if deselected completely
function hideAll() {
    document.getElementById('dynamic-container').classList.add('hidden');
    document.getElementById('a-level-form').classList.add('hidden');
    document.getElementById('poly-form').classList.add('hidden');
}

// Dynamic Update to Results Container
function updateEligibility() {
    // Get DOM Elements
    const aLevelInput = document.getElementById('a-level-form');
    const polyInput = document.getElementById('poly-form');
    const numberofeligibleCourses = document.getElementById('eligible-courses-number');
    const eligibleListContainer = document.getElementById('eligible-courses-list-container');
    const numberofexceptionCourses = document.getElementById('exception-courses-number');
    const exceptionListContainer = document.getElementById('exception-courses-list-container');
    const universityFilterOption = document.getElementById('university-filter');
    const coursesFilterInput = document.getElementById('courses-filter').value.toLowerCase();
    const defaultText = "";
    const aLeveldefaultText = "Enter your Rank Points above (Maximum 70) to view your eligible courses."
    const polydefaultText = "Enter your GPA above (Maximum 4) to view your eligible courses."
    let userGradeInput = '';
    let userGradeInputType = '';

    // if the a-level form is not hidden,
    if (!aLevelInput.classList.contains('hidden')) {
        const rp = document.getElementById('a-level-grade');
        userGradeInput = parseFloat(rp.value);
        userGradeInputType = 'A-level';
        if (isNaN(userGradeInput) || userGradeInput < 0 || userGradeInput > 70) {
            eligibleListContainer.innerHTML = aLeveldefaultText;
            return;
        }
    
    // if the poly form is not hidden,
    } else if (!polyInput.classList.contains('hidden')) {
        const gpa = document.getElementById('poly-grade');
        userGradeInput = parseFloat(gpa.value);
        userGradeInputType = 'Poly';
        if (isNaN(userGradeInput) || userGradeInput < 0 || userGradeInput > 4) {
            eligibleListContainer.innerHTML = polydefaultText;
            return;
        }
            
    // if both are hidden,
    } else {
        eligibleListContainer.innerHTML = defaultText;
        return;
    }

    // Filter courses based on grade and university selection
    const eligibleCourses = db_courseMatcher.filter((row) => {
        if (universityFilterOption.value !== 'All' && row.university !== universityFilterOption.value) { // if user filters by specific university and the row in the database does not contain the matching university, assign false and remove from the display list.
            return false;
        }  else if (!filterSearch(row.coursename, coursesFilterInput)) {
            return false;
        }
        else { // if its a-level type, return those where user grade > min rank point. Else return those where user grade > min gpa.
            return ((userGradeInputType === 'A-level') ? userGradeInput >= (((row.rpigp)/90)*70).toFixed(2) : userGradeInput >= row.gpaigp);
        }
    });

    // Filter out exceptional cases
    const exceptionCourses = db_courseMatcher.filter((row) => {
        if (universityFilterOption.value !== 'All' && row.university !== universityFilterOption.value) { // if user filters by specific university and the row in the database does not contain the matching university, assign false and remove from the display list.
            return false;
        }  else if (!filterSearch(row.coursename, coursesFilterInput)) {
            return false;
        }
        else { // if its a-level type, return those where user grade > min rank point. Else return those where user grade > min gpa.
            return ((userGradeInputType === 'A-level') ? row.rpigp === "##" : row.gpaigp === "##");
        }
    });

    let eligiblehtml = '';
    let exceptionhtml = '';

    // Display the results in the results container
    if (eligibleCourses.length === 0) {
        numberofeligibleCourses.innerHTML = `<b>Number of Eligible Courses</b>: ${eligibleCourses.length}`;
        eligibleListContainer.innerHTML = "No Eligible Courses Found."
        numberofexceptionCourses.innerHTML = `<b>Number of Exception Courses</b>: ${exceptionCourses.length}`;

        exceptionhtml = exceptionCourses.map((row) => `
        <div class = "exception-courses-list-container">
            <div class = "exception-courses-list">
                <strong>${row.university}</strong>
                ${row.coursename}
                <span class = requirement>${(userGradeInputType === 'A-level') ? 'IGP: ' + row.rpigp : 'IGP: ' + row.gpaigp}</span>
                ${'Intake: ' + row.studentintake}
            </div>
        </div>`).join('');
        exceptionListContainer.innerHTML = exceptionhtml;

    } else {
        numberofeligibleCourses.innerHTML = `<b>Number of Eligible Courses</b>: ${eligibleCourses.length}`;

        eligiblehtml =  eligibleCourses.map((row) => `
        <div class = "eligible-courses-list-container">
            <div class = "eligible-courses-list">
                <strong>${row.university}</strong>
                ${row.coursename}
                <span class = requirement>${(userGradeInputType === 'A-level') ? 'IGP: ' + (((row.rpigp)/90)*70).toFixed(2) : 'IGP: ' + row.gpaigp}</span>
                ${'Intake: ' + row.studentintake}
            </div>
        </div>`).join('');
        eligibleListContainer.innerHTML = eligiblehtml;
        
        numberofexceptionCourses.innerHTML = `<b>Number of Courses (Exception)</b>: ${exceptionCourses.length}`;

        exceptionhtml = exceptionCourses.map((row) => `
        <div class = "exception-courses-list-container">
            <div class = "exception-courses-list">
                <strong>${row.university}</strong>
                ${row.coursename}
                <span class = requirement>${(userGradeInputType === 'A-level') ? 'IGP: ' + row.rpigp : 'IGP: ' + row.gpaigp}</span>
                ${'Intake: ' + row.studentintake}
            </div>
        </div>`).join('');
        exceptionListContainer.innerHTML = exceptionhtml;
    }}

// helps for cases where users type CS and Computer Science can still show up in the list.
function filterSearch (coursename, userinput) {
    const courseName = coursename.toLowerCase();
    const userInput = userinput.toLowerCase().trim(); // .trim() removes whitespace from both beginning and end of string

    let searchIndex = 0;
    for (let i = 0; i < courseName.length; i++) {
        if (courseName[i] === userInput[searchIndex]) {
            searchIndex ++; // found a matching character based on index
        }
        if (searchIndex === userInput.length) {
            return true; // searched all in sequence
        }
    }
    return false; // at this stage, the loop finishes. it also means searchIndex never reached coursename length.
}
