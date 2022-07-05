/**
 * This function will reset the game and load the keyboard,
 * tiles for user guesses and words to be chosen from
 */
document.addEventListener("DOMContentLoaded", function () {

});

function playGame() {

    // Get the div from HTMl with the class of "keyboard-box"
    let keyboard = document.querySelector(".keyboard-box");

    // Create keyboard letters using an Array
    let letters = [
        'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
        'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
        'ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '«',
    ];

    /**
     * Create Keyboard buttons using document.createElement() and assign
     * a letter from the letters array
     */
    letters.forEach(letter => {
        let buttonElement = document.createElement('button');
        buttonElement.textContent = letter
        buttonElement.setAttribute('id', letter);
        buttonElement.addEventListener('click', () => handleMouseClick(letter));
        keyboard.append(buttonElement);
    });

    // Get the div from HTMl with the class of "tiles-box"
    let tileBox = document.querySelector(".tiles-box");

    // Create Array for tiles for the user input
    let userInputs = [
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
    ]

    // Create tile rows using the same method as the Keyboard
    userInputs.forEach((userInput, userInputIndex) => {
        let attemptRowElement = document.createElement('div');
        attemptRowElement.setAttribute('id', 'userInput-' + userInputIndex);

        /**
         * Create individual tile and append it to the row created above
         */
        userInput.forEach((attempt, attemptIndex) => {
            let tileElement = document.createElement('div');
            tileElement.setAttribute('id', 'userInput-' + userInputIndex + '-tile-' + attemptIndex);
            tileElement.classList.add('tile');
            attemptRowElement.append(tileElement);
        })
        tileBox.append(attemptRowElement);
    })

    // Default starting row
    let startingRow = 0;

    // Default starting tile
    let currentTile = 0;

    // Array of words to be selected from
    const words = [
        'BEST', 'BORE', 'GOOD', 'GIMP', 'NOTE', 'SEER', 'PORK', 'BOLT', 'TUBE', 'EPIC', 'FORE', 'BASS', 'HUSH',
        'JUST', 'PART', 'PASS', 'BLUE', 'PINK', 'DRAG', 'MIND', 'PART', 'GLOW', 'URGE', 'DOOR', 'BUST', 'FAKE',
        'DART', 'VIEW', 'SCUD', 'HOLD', 'WHIZ', 'FROG', 'BIKE', 'VASE', 'MANY', 'BOAT', 'NEAR', 'LONE', 'SPIN',
        'GOAT', 'GOAL', 'YAWN', 'FIVE', 'DARN', 'BEER', 'RICH', 'BALM', 'COAX', 'PIPE', 'TWIG', 'TOUR', 'FAIR',
    ];

    let correctWord = words[Math.floor(Math.random() * words.length)];

    /**
     * Function to add a letter to the tile row
     */
    let addLetter = (letter) => {
        //If statement added for if these conditions are met then a letter can be added otherwise not
        if (currentTile < 4 && startingRow < 5) {
            console.log('userInput-' + startingRow + '-tile-' + currentTile);
            let tile = document.getElementById('userInput-' + startingRow + '-tile-' + currentTile);
            tile.textContent = letter;
            tile.setAttribute('data', letter); //Attribute so the tile can be styled
            currentTile++;
            userInputs = [startingRow][currentTile] = letter;
        }
    }

    /**
     * Function remove a letter from the Tile row
     */
    let removeLetter = () => {

        //if statment for removing userInput if there is a guess to be removed and reset to empty
        if (currentTile > 0) {
            currentTile--
            let tile = document.getElementById('userInput-' + startingRow + '-tile-' + currentTile);
            tile.textContent = '';
            userInputs = [startingRow][currentTile] = '';
            tile.setAttribute('data', '');
        }
    }

    let checkRow = () => {

        if (currentTile === 5) {
            let attempt = userInputs[startingRow].join('');
            console.log('guess is ' + attempt, 'wordle is ' + correctWord);
        }
    }

    /**
     * Function for keyboard tile to be clicked, taken from the EventListener above,
     * with an if loop in there
     */
    let handleMouseClick = (letter) => {
        console.log('clicked', letter);

        //Code for if the user guess is not « or ENTER then letter to be added
        if (letter === '«') {
            removeLetter() //Calls the removeLetter function
            return
        }

        if (letter === 'ENTER') {
            checkRow();
            console.log('clicked' + correctWord);
            return
        }

        addLetter(letter);
    }

    /**
     * Function to add colour to a key
     */

    /**
     * Function to flip tile
     */

}

playGame();