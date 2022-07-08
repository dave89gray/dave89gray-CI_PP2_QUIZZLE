let finalLeaderboard = document.getElementById('finalLeaderboard');
let leaderboardStyle = JSON.parse(localStorage.getItem('leaderboardStyle')) || [];


/**
 * This will retrieve the users scores and add them as a list element
 * within the <UL>
*/
 finalLeaderboard.innerHTML = leaderboardStyle

    //Map used to take the array of items and convert to a string
    leaderboardStyle.map(score => {
        console.log(`${score.username}-${score.score}`);
        // Return the string version of our required info
        //return `<li class="scoresTable>${score.name} - ${score.score}</li>`;
    })
    
    //.join(""); 