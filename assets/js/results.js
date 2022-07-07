const username = document.getElementById('username');
const saveScores = document.getElementById('saveScores');


//log the username when a key returns up
username.addEventListener('keyup', () => {
    console.log(username.value);
    saveScore.disabled = !username.value;
});

saveScore = (e) => {
    console.log("Click the save button");
    // Prevent the form taking default action of posting to a different page
    e.preventDefault();
};