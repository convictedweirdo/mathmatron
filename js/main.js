import * as mfunc from "./functions.js";

/* INIT */
const startScreen = document.getElementById("start-screen");
const screen = document.getElementById("screen");
const startButton = document.getElementById("start-button");
const countDown = document.getElementById("count-down");
const questionBox = document.getElementById("question");

/* Start Button - hide start screen and show main game */

startButton.addEventListener("click", function() {
    console.log("button clicked");
    startScreen.classList.add("hide");    
    screen.classList.remove("hide");
    countdown();
    setTimeout(generateQuestion, 1000);
} )

/* Hide game screen by default */
screen.classList.add("hide");

/* Countdown funtion */
function countdown() {
    let timer = 11;
    let endTimer = 0;

    let timerId = setInterval(function() {
        timer--;
        // console.log(timer);
        countDown.textContent = `${timer}`;
        if (timer <= endTimer) {
            clearInterval(timerId);
            timer = 11;
            // generateQuestion();
            setTimeout(generateQuestion, 1000);
            countdown()
        }
    }, 1000)
    
}

class questionList {
    constructor(questionAsked, correctAnswer, incorrectAnswer1, incorrectAnswer2) {
        this.questionAsked = questionAsked;
        this.correctAnswer = correctAnswer;
        this.incorrectAnswer1 = incorrectAnswer1;
        this.incorrectAnswer2 = incorrectAnswer2;
    }
}

// question list 
let question = [];
// input order: question, correct answer, first wrong answer, second wrong answer

// for future use, consider adding multiple wrong answers, 
// so wrong answers can be generated with more randomness
question[0] = new questionList("1 + 1?", "2", "1.5", "3");
question[1] = new questionList("Which number is higher? 0, -10 or 5", "5", "-10", "0")
question[2] = new questionList("How many sides does a triangle have?", "3", "2", "4");
question[3] = new questionList("What is 3 x 6?", "18", "12", "16");
question[4] = new questionList("What is (2 x 3) + 4?", "10", "8", "12");
question[5] = new questionList("What is 4 + 4 x 2?", "12", "16", "10");
question[6] = new questionList("If Y = 2, What is X? - Y + X = 5", "3", "2", "1.5");
question[7] = new questionList("What is 7 - 3?", "4", "5", "3");
question[8] = new questionList("What is 22 x 10?", "220", "222", "210");
question[9] = new questionList("What is 3 divided by 1", "1", "3", "1.5");


function generateQuestion() {
    // get random question from question array
    let rand = Math.floor(Math.random() * question.length);
    let currentQuestion = question[rand];
    // display question and reset timer
    let q = currentQuestion.questionAsked;
    questionBox.textContent = q;
    rand = Math.floor(Math.random() * 3);
    let correctLocation = rand;
    console.log(`the correct answer is on button number ${rand}`);
}

console.log(mfunc.addup(3,3));

