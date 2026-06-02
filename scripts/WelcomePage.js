const services = [{
    name: 'Points Calculator',
    description: 'Applicable only for A Levels RP Computation'}, 
    {
    name: 'Course Matcher',
    description: 'View the courses that you are most likely eligible for'},
    {
    name: 'AI Chatbot',
    description: 'Ask any questions you have related to admissions'},
    {
    name: 'IGP Predictor',
    description: 'Prediction for future IGP based on your selected course'
    }
    ];

let servicesHTML = '';

services.forEach((service) => {
    servicesHTML = servicesHTML + `
    <div class = "service-container">
        <div class = "Points Calculator">
            <p><b>${service.name}</b></p>
            <p><i>${service.description}</i></p>
        </div>
        <button class = "button">Select</button>
    </div>`
});

document.querySelector('.js-services-grid').innerHTML = servicesHTML;

