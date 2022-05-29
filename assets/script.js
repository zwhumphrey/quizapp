const question = document.querySelector("#question");
const choices = arry.from(document.querySelectorAll(".choice-text"));

var currentQuestion = {}
var acceptingAnswer = true
var score = 0
var questionCounter = 0
var avaliableQuestions = []

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choice1: "Strings",
        choice2: "Booleans",
        choice3: "alerts",
        choice4: "numbers",
        anwser: 3,
    },
    {
        question: "The condition in an if/else statement is enclosed within ______.",
        choice1: "quotes",
        choice2: "curly brackets",
        choice3: "parentheses",
        choice4: "square brackets",
        answer: 3,
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        choice1: "numbers and strings",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "all of the above",
        answer: 4,
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        choice1: "commmas",
        choice2: "curley brackets",
        choice3: "quotes",
        choice4: "parentheses",
        answer: 3,
    },
];



