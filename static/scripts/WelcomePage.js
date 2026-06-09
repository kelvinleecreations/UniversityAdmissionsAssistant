const services = [{
    name: 'PointsCalculator',
    description: 'Applicable only for A Levels RP Computation'}, 
    {
    name: 'CourseMatcher',
    description: 'View the courses that you are most likely eligible for'},
    {
    name: 'AIChatbot',
    description: 'Ask any questions you have related to admissions'},
    {
    name: 'IGPPredictor',
    description: 'Prediction for future IGP based on your selected course'
    }
    ];

let servicesHTML = '';

services.forEach((service) => {
    servicesHTML = servicesHTML + `
    <div class = "service-container">
        <div class = "${service.name}">
            <p><b>${service.name}</b></p>
            <p><i>${service.description}</i></p>
        </div>
        <form action = "/${service.name}" method = "POST">
            <button type = "Submit" class = "welcome-page-button">Select</button>
        </form>
    </div>`
});

document.querySelector('.js-services-grid').innerHTML = servicesHTML;
