let finalLeaderboard = document.getElementById("finalLeaderboard");
let scoresLeaderboard = JSON.parse(localStorage.getItem("scoresLeaderboard")) || [];

/**
 * This will retrieve the users scores and add them as a list element
 * within the <UL>
*/
 finalLeaderboard.innerHTML = scoresLeaderboard

    //Map used to take the array of items and convert to a string
    scoresLeaderboard.map(score => {
        console.log(`${score.name}-${score.score}`);
        // Return the string version of our required info
        return `<li class="scoresTable>${score.name} - ${score.score}</li>`;
    })
    .join(""); 