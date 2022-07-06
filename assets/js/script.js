const question = document.getElementById('question');
const options = Array.from(document.getElementsByClassName('answer-selection'));


let questions = [
    {
        Question: 'What is the capital city of Scotalnd?',
        choice1: 'Aberdeen',
        choice2: 'Glasgow',
        choice3: 'Edinburgh',
        choice4: 'Newcastle',
        answer: 2,
    },
    {
        Question: 'Which two colours are featured on the saltire - the flag of Scotland?',
        choice1: 'Red and white',
        choice2: 'Green and white',
        choice3: 'Black and white',
        choice4: 'Blue and white',
        answer: 4,
    },
    {
        Question: 'What is the national animal of Scotland?',
        choice1: 'Unicorn',
        choice2: 'Rabbit',
        choice3: 'Deer',
        choice4: 'Snake',
        answer: 1,
    },
    {
        Question: 'Which train station in scotland is named after a novel by Sir Walter Scott?',
        choice1: 'Edinburgh Waverly',
        choice2: 'Glenfinnan Railway Station',
        choice3: 'Bridge of Orchy',
        choice4: 'Montrose Railway Station',
        answer: 1,
    }, {
        Question: 'To be legally decalred whiskey, a spirit should be mature for how long in a barrel?',
        choice1: '1 year',
        choice2: '2 years',
        choice3: '3 years',
        choice4: '10 years',
        answer: 3,
    },
    {
        Question: 'Uisge Beatha” is the Gaelic word for whisky. What does it literally mean?',
        choice1: 'Water of life',
        choice2: 'Good health',
        choice3: 'Spirit of Scotland',
        choice4: 'Good luck',
        answer: 1,
    },
    {
        Question: 'What is the national tree of Scotland?',
        choice1: 'The Scot oak',
        choice2: 'The Scot pine',
        choice3: 'The Scot Birch',
        choice4: 'Connifer tree',
        answer: 2,
    },
    {
        Question: 'What is the national flower of Scotland?',
        choice1: 'Shamrock',
        choice2: 'Daffodil',
        choice3: 'Heather',
        choice4: 'Thistle',
        answer: 4,
    },
    {
        Question: 'What can we do with a Rowie?',
        choice1: 'Play with it',
        choice2: 'Eat it',
        choice3: 'Wear it',
        choice4: 'Smell it',
        answer: 2,
    },
    {
        Question: 'Logarithms were invented by which Scottish mathematician?',
        choice1: 'John Napier',
        choice2: 'James Clerk Maxwell',
        choice3: 'James Gregory',
        choice4: 'Graeme Lamb',
        answer: 1,
    }
]