let username = document.getElementById('username');

//log the username when a key returns up
username.addEventListener('keyup', () => {
    console.log(username.value);
});

saveScore = (e) => {
    console.log("Click the save button");
    // Prevent the form taking default action of posting to a different page
    e.preventDefault();
};