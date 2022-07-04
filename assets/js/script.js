/**
 * This function will reset the game and load the keyboard

document.addEventListener("DOMContentLoaded", function () {
    /** 
    const keyboard = document.querySelector('.keyboard-box');
    const letters = [
        'Q','W','E','R','T','Y','U','I','O',
        'P','A','S','D','F','G','H','J','K','L',
        'ENTER','Z','X','C','V','B','N','M','«',
    ]
    
    letters.forEach(letter => {
        const buttonElement = document.createElement('button');
        buttonElement.textContent = letter
        buttonElement.setAttribute('id', letter);
        buttonElement.addEventListener('click', handleClick(letter));
        keyboard.append(buttonElement);
    })

});
    */
/**
 * Create User answer area, 5 attempts in the array with 4 letters.
 */

/**
 * Create a function that will create each row of user answer and each letter guess
 */

/**
 * Create a keyboard letters using an Array that can be indexed through
 */
 const keyboard = document.querySelector(".keyboard-box");
 const letters = [
    'Q','W','E','R','T','Y','U','I','O','P',
    'A','S','D','F','G','H','J','K','L',
    'ENTER','Z','X','C','V','B','N','M','«',
];

letters.forEach(letter => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = letter
    keyboard.append(buttonElement);
});

/**
 * Create Keyboard buttons using document.createElement()
 *  */




/**
 * Function for keyboard tile to be clicked
 * with an if loop in there


function handleClick () {
    console.log();
}
 */

/**
 * Function to add colour to a key
 */

/**
 * Function to flip tile
 */