/**
 * This will send the data collected from the form submission to email after the user
 * has clicked submit. It should return a Thank You message.
 */
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        // Prevent the form taking default action of posting to a different page
        event.preventDefault();
        emailjs.init('user_GdX0myu7Q38VyMRFe');
        emailjs.sendForm('service_pdj1v3o', 'contact_form', this, 'GdX0myu7Q38VyMRFe')
            .then(function () {
                //Email successfully sent
            }, function (error) {
                //Email sumbission unsuccessful
                console.log('FAILED...', error);
            });
        thankYouMessage();
    });
});

/**
 * This will replace the contents of the contact us page with the below HTML
 */
function thankYouMessage() {
    let html = `
    
    <div class="feedback_container flex-center flex-column">
    <h4 id="feedback" class"flex-center flex-column">Thank you for leaving us your feedback</h4>
        <img src="assets/images/feedback_img.jpeg" alt="The Royal Banner of Scotland flag">
        <a href="index.html" class="home-button">Return to Home!</a>
    </div>`;
    document.getElementById("contactUs").innerHTML = html;
}