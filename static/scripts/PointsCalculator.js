const h2subjects = [{
    name: 'First Subject',
    type: 'H2'},
    {
    name: 'Second Subject',
    type: 'H2'},
    {
    name: 'Third Subject',
    type: 'H2'},
    {
    name: 'Fourth Subject',
    type: 'H2'
    }
];

const h1subjects = [{
    name: 'General Paper',
    type: 'H1',
    description: 'Compulsory'},
    {
    name: 'Mother Tongue Language',
    type: 'H1',
    description: 'Optional'
    }
];

const h2buttons = [{
    option1: 'A',
    option2: 'B',
    option3: 'C',
    option4: 'D',
    option5: 'E',
    option6: 'S',
    option7: 'U'
}];

const h1buttons = [{
    option1: 'A',
    option2: 'B',
    option3: 'C',
    option4: 'D',
    option5: 'E',
    option6: 'S',
    option7: 'U'
}];

const h2_buttons = h2buttons[0];
const h1_buttons = h1buttons[0];

// Points Mapping
const h2PointsMap = {'A': 20, 'B': 17.5, 'C': 15, 'D': 12.5, 'E': 10, 'S': 5, 'U': 0};
const h1PointsMap = {'A': 10, 'B': 8.75, 'C': 7.5, 'D': 6.25, 'E': 5, 'S': 2.5, 'U': 0};


let h2mergedHTML = '';
let h1mergedHTML = '';


h2subjects.forEach((h2subject)=>{
    h2mergedHTML = h2mergedHTML + `
    <div class = "calculator-subjects">
        <div class = "h2-subjects">
            <div class = "${h2subject.name}">
                <p><b>${h2subject.name}</b></p>
                <p>(${h2subject.type})</p>
            </div>
        </div>
    </div>

    <div class = "calculator-grades" data-type = "h2">
        <div class = "grades-h2-buttons-row">
            <button class = "h2-buttons">${h2_buttons.option1}</button>
            <button class = "h2-buttons">${h2_buttons.option2}</button>
            <button class = "h2-buttons">${h2_buttons.option3}</button>
            <button class = "h2-buttons">${h2_buttons.option4}</button>
            <button class = "h2-buttons">${h2_buttons.option5}</button>
            <button class = "h2-buttons">${h2_buttons.option6}</button>
            <button class = "h2-buttons">${h2_buttons.option7}</button>
        </div>
    </div>

    <div class = "calculator-points">0</div>`
});

h1subjects.forEach((h1subject)=>{
    h1mergedHTML = h1mergedHTML + `
    <div class = "calculator-subjects">
        <div class = "h1-subjects">
            <div class = "${h1subject.name}">
                <p><b>${h1subject.name}</b></p>
                <p> (${h1subject.type})</p>
                <p><i>${h1subject.description}</i></p>
            </div>
        </div>
    </div>

    <div class = "calculator-grades" data-type = "h1">
        <div class = "grades-h1-buttons-row">
            <button class = "h1-buttons">${h1_buttons.option1}</button>
            <button class = "h1-buttons">${h1_buttons.option2}</button>
            <button class = "h1-buttons">${h1_buttons.option3}</button>
            <button class = "h1-buttons">${h1_buttons.option4}</button>
            <button class = "h1-buttons">${h1_buttons.option5}</button>
            <button class = "h1-buttons">${h1_buttons.option6}</button>
            <button class = "h1-buttons">${h1_buttons.option7}</button>
        </div>
    </div>

    <div class = "calculator-points">0</div>`    
});

// Insert merged html content before the results container block
const resultsContainer = document.querySelector('.results-container');
resultsContainer.insertAdjacentHTML('beforebegin', h2mergedHTML);
resultsContainer.insertAdjacentHTML('beforebegin', h1mergedHTML);

// Logic: Row handling & scoring
const gradeRows = document.querySelectorAll('.calculator-grades');

gradeRows.forEach((row) => { // gradeRows is a collection of all elements with the class .calculator-grades. forEach() is a loop that looks at each subject row one by one. (row) => {} names the specific row currently being looked at inside the loop so you can work on it.
    const buttons = row.querySelectorAll('button'); // finds all the <button> elements (grades A to U) only inside this specific row.
    const pointsDisplay = row.nextElementSibling; // looks at and selects <div class = "calculator-points">, which is right next to <div class = "calculator-grades"> in the current row
    const subjectType = row.getAttribute('data-type'); // reads the custom data-type value "h2" or "h1">
    const pointsMap = (subjectType === 'h2') ? h2PointsMap : h1PointsMap; // mini if-else statement: if the subject type is h2, it assigns h2PointsMap, else it assigns h1PointsMap.

    buttons.forEach((button) => { // runs another loop to look at each individual grade button (A, B, C, etc) inside the current row.
        button.addEventListener('click', () => { // tells the browser to "listen" for a click event on this specific button. The code inside {} runs everytime a user clicks it.
            if (button.classList.contains('active')) { // checks if the clicked button has the .active CSS class (meaning highlighted in blue)
                // If clicking an already active button, toggle it off.
                button.classList.remove('active');
                pointsDisplay.textContent = '0'; // resets point for this current row to zero.
            } else {
                // Remove active status from all other buttons in this same row. If another button is clicked, the button that was previously active will become inactive. otherButton is used instead of button to avoid confusion.
                buttons.forEach(otherButton => otherButton.classList.remove('active'));
                // Toggle active status for current button
                button.classList.add('active');
                
                // Fetch score via text map
                const gradeValue = button.textContent; // reads the letter printed on the button (eg A, B, C)
                pointsDisplay.textContent = pointsMap[gradeValue]; // looks up the letter inside pointsMap dictionary (A becomes 20 or 10), and prints that number inside the points column display.
            }
            // Trigger score calculations dynamically
            calculateTotalScores(); // function call - calls up the main calculation function to scan all rows points and instantly update the final 4 admission scores at the results container.
        });
    });
});

function calculateTotalScores() {
    // Read all points currently displayed in the DOM rows in the order from top to bottom, const allPointsDiv saves this into a temporary list.
    const allPointsDivs = document.querySelectorAll('.calculator-points');
    // allPointsDiv is a raw collection of HTML tags. Array.from(allPointsDivs) converts it into a standard JS array list to run array operations.
    // .map(div => ...) This loops through all 6 subjects boxes one by one. It temporarily labels the current box it is looking at as div.
    // div.textcontent looks into the current HTML element and grab whatever text it is written eg the string "17.5".
    // parseFloat takes that text string and converts it into an actual computer number (17.5). Without this, JS would treat it like ordinary text words, and trying to add them tgt will lead to errors or broken layouts.
    // || 0 is a safety mechanism known as a logical OR fallblack. If a user hasn't click a grade button for a subject, the text inside the box might be empty. When parseFloat() tries to read empty text, it returns a special JS error called NaN (not a number).
    // The || 0 tells the browser - if there is a valid number, display it. Else, default display it as 0.
    const scores = Array.from(allPointsDivs).map(div => parseFloat(div.textContent) || 0);

    // Dynamic index mapping based on creation array structures:
    // scores[0] = 1st H2, scores[1] = 2nd H2, scores[2] = 3rd H2, scores[3] = 4th H2
    // scores[4] = GP (H1), scores[5] = MTL (H1)    
    const h2_1 = scores[0];
    const h2_2 = scores[1];
    const h2_3 = scores[2];
    const h2_4 = scores[3];
    const gp   = scores[4];
    const mtl  = scores[5];

    // --- Scenario 1: Standard 3H2 + 1H1 Content (Chooses the best 3 4H2 if all 4H2 are selected) ---
    // Standard basic formula: 3 Core H2s + GP + (4th H2 scaled down to H1 weight)
    const h2Group = [h2_1, h2_2, h2_3, h2_4];
    const worstH2 = Math.min(...h2Group); //... allows js to tear open the array and see the inner contents of h2Group
    const sumBestThreeH2 = h2Group.reduce((a, b) => a + b, 0) - worstH2; 
    // .reduce allows js to combine and find the total of 4 H2 scores
    // ((a, b) => a + b, 0) this is a loop runner for addition, keeps on addigng till the end. a is the running total, b is the current score that is being added. 
    // 0 tells js to start the addition from 0. 
    const scenarioStandard = sumBestThreeH2 + gp;

    // --- Scenario 2: 4H2 Alternative (Treats worst H2 as an H1) ---
    const scenarioFourH2 = sumBestThreeH2 + gp + (worstH2 / 2);
    const scenarioStandardAdditionalH1 = (scenarioFourH2 / 80) * 70;

    // --- Scenario 3: Scenario 1 + MTL
    const scenarioStandardMTL = [(scenarioStandard + mtl) / 80] * 70;

    // --- Scenario 4: Scenario 2 + MTL
    const scenarioStandardAdditionalH1MTL = [(scenarioFourH2 + mtl) / 90] * 70;

    // Output values dynamically to target elements
    document.getElementById('score-standard').textContent = scenarioStandard.toFixed(2); // .toFixed(2) displays number with 2 decimal places.
    document.getElementById('score-standard-additionalh1').textContent = scenarioStandardAdditionalH1.toFixed(2);
    document.getElementById('score-standard-mtl').textContent = scenarioStandardMTL.toFixed(2);
    document.getElementById('score-standard-additionalh1-mtl').textContent =  scenarioStandardAdditionalH1MTL.toFixed(2);

    // Obtain the highest score from the 4 scenarios to provide the final score to users.
    const finalScore = Math.max(scenarioStandard, scenarioStandardAdditionalH1, scenarioStandardMTL, scenarioStandardAdditionalH1MTL);
    document.getElementById('final-score').textContent = finalScore.toFixed(2);
}



