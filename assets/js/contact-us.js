/**
 * This will send the data collected from the form submission to email after the user
 * has clicked submit. It should return a Thank You message.
 */
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form').addEventListener('submit', function (event) {
        // Prevent the form taking default action of posting to a different page
        event.preventDefault();
        emailjs.init('user_GdX0myu7Q38VyMRFe');
        emailjs.sendForm('service_pdj1v3o', 'contact_form', this)
            .then(function() {
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
    <h4>Thank you for leaving us your feedback</h4>
    <div class="feedback_container flex-center flex-column">
        <img src="assets/images/feedback_img.jpeg" alt="The Royal Banner of Scotland flag">
    </div>
    <div>
        <a href="index.html" class="home-button">return to Home!</a>
    </div>`;
    document.getElementsByClassName("contact-container").innerHTML = html;
}