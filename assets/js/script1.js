var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("start-btn");
var question1 = document.getElementById("question-box1");
var question2 = document.getElementById("question-box2")
var correctOrNot = document.getElementById("answer");


var timeLeft = 20;

// Countdown timer
function countdown() {
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = timerEl;
            clearInterval(timeInterval);
        }
    }, 1000);
}

// Hide start text
function hideStart() {
    document.getElementById("starter-text").style.display = "none";
}

// Show correct/incorrect message
function showBottomMsg() {
    correctOrNot.style.display = "block"
}

// Hide correct/incorrect message
function hideBottomeMsg() {
    correctOrNot.style.display = "none"
}

// Subtract time for wrong answer
function timeAway() {
    timeLeft = timeLeft - 5;
}

// Start Button
startBtn.addEventListener("click", function () {
    countdown();
    hideStart();
    showQuestion1();
})

// Show first question
function showQuestion1() {
    document.getElementById("question-box1").style.display = "block";
    document.getElementById("answer-box1").style.display = "block";
}

// Hide first question
function hideQuestion1() {
    document.getElementById("question-box1").style.display = "none";
    document.getElementById("answer-box1").style.display = "none";
}

// Question 1 answer and to Question 2
question1.addEventListener("click", function(event) {
    var button = event.target;
    if (button.matches(".userChoice")) {
        var choice = button.textContent
        var answer = button.parentElement.getAttribute("data-answer");
        if (choice === answer) {
            hideQuestion1();
        } else {
            timeAway();
            hideQuestion1();
        }
    } showQuestion2();
});

// Show second question
function showQuestion2() {
    hideBottomeMsg();
    document.getElementById("question-box2").style.display = "block";
    document.getElementById("answer-box2").style.display = "block";
}