let username = document.getElementById('username');
let saveScores = document.getElementById('saveScores');
let userScore = document.getElementById('userScore');
let recentScore = localStorage.getItem('recentScore');

// This will get the recent score from the user and place it into the H2 element with the Id of userScore
userScore.innerText = recentScore;

//convert the array to a Json string and get the value in local storage to add to array 
let scoresLeaderboard = JSON.parse(localStorage.getItem('scoresLeaderboard')) || [];
console.log(scoresLeaderboard);

/**
 * Function to allow form to be filled out and scores to not be
 * saved until a username is filled in
 */
username.addEventListener('keyup', () => {
    console.log(username.value);

    // Disable save score button if username value is falsy, if not then it will enable the button
    saveScores.disabled = !username.value;
});

saveScore = (e) => {
    console.log("Click the save button");
    // Prevent the form taking default action of posting to a different page
    e.preventDefault();
};