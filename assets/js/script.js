/**
 * This function will reset the game
 */
document.addEventListener("DOMContentLoaded", function () {
    beginGame();
});

/**
 * Create User answer area, 5 attempts in the array with 4 letters.
 */

/**
 * Create a function that will create each row of user answer and each letter guess
 */

/**
 * Create a keyboard letters using an Array that can be indexed through
 */
 const letters = [
    'Q','W','E','R','T','Y','U','I','O',
    'P','A','S','D','F','G','H','J','K','L',
    'ENTER','Z','X','C','V','B','N','M','«',
]

/**
 * Create Keyboard buttons using document.createElement()
 */
letters.forEach(letter => {
    const keyElement = document.createElement('key')
    keyElement.textContent = letter
    KeyboardEvent.append(keyElement)
})

/**
 * Function for keyboard tile to be clicked
 */
