let questions = [{
        question: 'What is the capital city of Scotlnd?',
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
        question: 'Which train station in scotland is named after a novel by Sir Walter Scott?',
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
        question: '"Uisge Beatha” is the Gaelic word for whisky. What does it literally mean?',
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
        choice3: 'James Gregory',
        choice4: 'Graeme Lamb',
        answer: 1,
    }
];

const question = document.getElementById('question');
const options = Array.from(document.getElementsByClassName('answer-selection'));

const correct_bonus = 1; //how much is a correct answer worth
const max_questions = 3; //maximum attempts from the user

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
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex]; // Index through questions array
    question.innerText = currentQuestion.question; // Set the H2 elements innerText


    //Iterate through the answer options from the array using the dataset and insert into the paragraph
    options.forEach((choice) => {
        const number = choice.dataset['number']; //Get the answer option using the dataset number
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptAnswer = true;
}

options.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptAnswer) return;

        acceptAnswer = false;
        const selectedAnswer = e.target;
        const answer = selectedAnswer.dataset['number'];
        console.log(answer == currentQuestion.answer);
        newQuestions(); //get the next question once answered
    });
});

playGame();
