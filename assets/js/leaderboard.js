let finalLeaderboard = document.getElementById('finalLeaderboard');
let scores = JSON.parse(localStorage.getItem('scores')) || [];

/**
 * This will retrieve the users scores and add them in a list
 */
finalLeaderboard.innerHTML = scores

//Map used to take the array of items and convert to a string
.map(score => {
    // Return the string version of our required info
    return `<li class = "scoresTable>${score.name} = ${score.score}</li>`;
})
.join("");