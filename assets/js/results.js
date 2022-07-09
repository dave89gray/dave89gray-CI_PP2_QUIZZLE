let username = document.getElementById('username');
let saveScores = document.getElementById('saveScores');
let userScore = document.getElementById('userScore');
let recentScore = localStorage.getItem('recentScore');

// This will get the recent score from the user and place it into the H2 element with the Id of userScore
userScore.innerText = recentScore;

//convert the array to a Json string and get the value in local storage to add to array 
let scoresLeaderboard = JSON.parse(localStorage.getItem('scoresLeaderboard')) || [];
console.log(scoresLeaderboard);

// Variable so that the maximum scores stored will be 5
let max_high_scores = 5;

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

    let score = {
        score: recentScore,
        name: username.value
    };
    scoresLeaderboard.push(score); //Push score to leaderboard array

    //Sort array so highest score is at the top
    scoresLeaderboard.sort( (a,b) => {
        return b.score - a.score;
    })

    scoresLeaderboard.splice(5); // Splice leaderboard at the 5th index

    // Update the storage with the higher scores using stringify to create the string
    localStorage.setItem('scoresLeaderboard', JSON.stringify(scoresLeaderboard));
};