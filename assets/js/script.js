let questions = [{
        question: 'What is the capital city of Scotland?',
        choice1: 'Aberdeen',
        choice2: 'Glasgow',
        choice3: 'Edinburgh',
        choice4: 'Newcastle',
        answer: 3,
    },
    {
        question: 'Which two colours are featured on the saltire - the flag of Scotland?',
        choice1: 'Red and white',
        choice2: 'Green and white',
        choice3: 'Black and white',
        choice4: 'Blue and white',
        answer: 4,
    },
    {
        question: 'What is the national animal of Scotland?',
        choice1: 'Unicorn',
        choice2: 'Rabbit',
        choice3: 'Deer',
        choice4: 'Snake',
        answer: 1,
    },
    {
        question: 'Which train station in Scotland is named after a novel by Sir Walter Scott?',
        choice1: 'Edinburgh Waverly',
        choice2: 'Glenfinnan Railway Station',
        choice3: 'Bridge of Orchy',
        choice4: 'Montrose Railway Station',
        answer: 1,
    }, {
        question: 'To be legally decalred whiskey, a spirit should be mature for how long in a barrel?',
        choice1: '1 year',
        choice2: '2 years',
        choice3: '3 years',
        choice4: '10 years',
        answer: 3,
    },
    {
        question: '"Uisge Beatha” is the Gaelic word for whiskey. What does it literally mean?',
        choice1: 'Water of life',
        choice2: 'Good health',
        choice3: 'Spirit of Scotland',
        choice4: 'Good luck',
        answer: 1,
    },
    {
        question: 'What is the national tree of Scotland?',
        choice1: 'The Scot oak',
        choice2: 'The Scot pine',
        choice3: 'The Scot Birch',
        choice4: 'Connifer tree',
        answer: 2,
    },
    {
        question: 'What is the national flower of Scotland?',
        choice1: 'Shamrock',
        choice2: 'Daffodil',
        choice3: 'Heather',
        choice4: 'Thistle',
        answer: 4,
    },
    {
        question: 'What can we do with a Rowie?',
        choice1: 'Play with it',
        choice2: 'Eat it',
        choice3: 'Wear it',
        choice4: 'Smell it',
        answer: 2,
    },
    {
        question: 'Logarithms were invented by which Scottish mathematician?',
        choice1: 'John Napier',
        choice2: 'James Clerk Maxwell',
        choice3: 'Paul Duncan',
        choice4: 'Graeme Lamb',
        answer: 1,
    }
];

let question = document.getElementById('question');
let options = Array.from(document.getElementsByClassName('answer-selection'));
let progressNumber = document.getElementById('progressNumber');
let scoreNumber = document.getElementById('score');
let progressBar = document.getElementById('progressBar');

let correct_bonus = 10; //how much is a correct answer worth
let max_questions = 10; //maximum question for the user

// set some variables to be used
let currentQuestion = {};
let acceptAnswer = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

/**
 * Function to start the game
 */
playGame = () => {
    questionCounter = 0;
    score = 0; //set the score
    availableQuestions = [...questions]; //Spread operator to get the questions
    newQuestions();
}

/**
 * Function to go to next question
 */
newQuestions = () => {
    questionCounter++;
    
    // Update question tally using string concatenation
    progressNumber.innerText = `Question ${questionCounter}/${max_questions}`;
    
    // Update progress bar as a percentage

    progressBar.style.width = `${(questionCounter / max_questions) * 100}%`;

    let questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex]; // Index through questions array
    question.innerText = currentQuestion.question; // Set the H2 elements innerText


    //Iterate through the answer options from the array using the dataset and insert into the paragraph
    options.forEach((choice) => {
        let number = choice.dataset['number']; //Get the answer option using the dataset number
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptAnswer = true;
}

/**
 * Function so that when the user has selected the answer, 'click' is listened for,
 * the answer logged and the next question will be presented
 */
options.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptAnswer) return;

        acceptAnswer = false;
        let selectedAnswer = e.target;
        let answer = selectedAnswer.dataset['number'];

        //Setting the default to 'incorrect', check to see if it is correct and then update
        let applyClass = 'incorrect';
        if (answer == currentQuestion.answer) { //'==' as one is a string and the other is a number.
            applyClass = "correct";
        }
        
        // Set the div class to apply color green to the box if the answer is correct
        selectedAnswer.parentElement.classList.add(applyClass);
        console.log(applyClass);

        // If the user guess is correct then increment by the bonus score
        if(applyClass === 'correct') {
            incrementScore(correct_bonus);
        }

        /* 
        Set the div class to apply red color to the box if the answer is correct and wait 1 second
        so that it is visible.
        */ 
        setTimeout(() => {
            selectedAnswer.parentElement.classList.remove(applyClass);
            newQuestions(); //get the next question once answered
        }, 1000);
    });
});

incrementScore = num => {
    score += num;
    scoreNumber.innerText = score;
    console.log(incrementScore);
};

playGame();