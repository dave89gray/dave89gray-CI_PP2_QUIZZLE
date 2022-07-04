/**
 * This function will reset the game and load the keyboard
 * and tiles for user guesses
 */
document.addEventListener("DOMContentLoaded", function () {

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
        buttonElement.addEventListener('click', () => handleClick(letter));
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
            tileElement.setAttribute('id', 'userInput-' + '-tile-' + attemptIndex);
            tileElement.classList.add('tile');
            attemptRowElement.append(tileElement);
        })
        tileBox.append(attemptRowElement);
    })

});

/**
 * Function for keyboard tile to be clicked, taken from the EventListener above,
 * with an if loop in there
 */
let handleClick = (letter) => {
    console.log('clicked', letter);
}

/**
 * Function add a letter to the tile row
 */


/**
 * Function to add colour to a key
 */

/**
 * Function to flip tile
 */