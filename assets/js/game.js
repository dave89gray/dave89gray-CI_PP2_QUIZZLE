let questions = [{
        question: 'What is the capital city of Scotland?',
        choice1: 'Aberdeen',
        choice2: 'Glasgow',
        choice3: 'Edinburgh',
        choice4: 'Newcastle',
        answer: 3,
    },
    {
        question: 'The English writer George Orwell wrote his novel 1984 when he was living on which island in Scotland?',
        choice1: 'Iona',
        choice2: 'Skye',
        choice3: 'Jura',
        choice4: 'Shetland',
        answer: 3,
    },
    {
        question: 'What is the national animal of Scotland?',
        choice1: 'Snake',
        choice2: 'Rabbit',
        choice3: 'Deer',
        choice4: 'Unicorn',
        answer: 4,
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
    },
    {
        question: 'The Scottish scientist is known for discovering which antibiotics?',
        choice1: 'Amoxicillin',
        choice2: 'Penicillin',
        choice3: 'Tetracyclines',
        choice4: 'Clindamycin',
        answer: 2,
    },
    {
        question: 'About how many golf courses are there in Scotland?',
        choice1: '150',
        choice2: '350',
        choice3: '550',
        choice4: '950',
        answer: 3,
    },
    {
        question: 'A "Munro" is the name for a Scottish mountain above which height?',
        choice1: '1,000 feet',
        choice2: '2,000 feet',
        choice3: '3,000 feet',
        choice4: '4,000 feet',
        answer: 3,
    },
    {
        question: 'St Andrews is Scotlands oldest university. When was it founded?',
        choice1: '1413',
        choice2: '1513',
        choice3: '1613',
        choice4: '1713',
        answer: 1,
    },
    {
        question: 'Andrew Carnegie made his fortune in the USA. But where was he born?',
        choice1: 'Greenock',
        choice2: 'Glasgow',
        choice3: 'Blantyre, Lanarkshire',
        choice4: 'Dunfermline, Fife',
        answer: 4,
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
 * Adds an event listener to the document so that when the event fires, the playGame function is called
 */
document.addEventListener('DOMContentLoaded', function () {
    playGame();
});

/**
 * Function to start the game
 */
playGame = () => {
    questionCounter = 0;
    score = 0; //set the score
    availableQuestions = [...questions]; //Spread operator to get the questions
    newQuestions();
};

/**
 * Function to go to next question
 */
newQuestions = () => {

    //set up for if all questions have been answered then we move on to results page
    if (availableQuestions.length === 0 || questionCounter >= max_questions) {

        // Store the score so it can be retrieved in the results page
        localStorage.setItem('recentScore', score);

        //take the user to the results html page
        //return window.location.href("/dave89gray-CI_PP2_QUIZZLE/results.html");
        return window.location.href = window.location.href.includes("github") 
        ? '/dave89gray-CI_PP2_QUIZZLE/result.html'
        : '/result.html';

    }

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
};

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

        // If the user guess is correct then increment by the bonus score
        if (applyClass === 'correct') {
            incrementScore(correct_bonus);
        }

        /* 
        Set the div class to apply red color to the box if the answer is correct and wait 1 second
        so that it is visible.
        */
        setTimeout(() => {
            selectedAnswer.parentElement.classList.remove(applyClass);
            newQuestions(); //get the next question once answered
        }, 1000); // Wait 1 second before next question loads
    });
});

incrementScore = num => {
    score += num;
    scoreNumber.innerText = score;
};