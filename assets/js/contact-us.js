let firstName = document.getElementById('fname');
let lastName = document.getElementById('lname');
let email = document.getElementById('email');

console.log(firstName.value);
console.log(lastName.value);
console.log(email.value);

/**
 * This will send the data collected from the form submission to email after the user
 * has clicked submit. It should return a Thank You message.
 */
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form').addEventListener('submit', function (event) {
        // Prevent the form taking default action of posting to a different page
        event.preventDefault();
        emailjs.init(GdX0myu7Q38VyMRFe);
    })
})