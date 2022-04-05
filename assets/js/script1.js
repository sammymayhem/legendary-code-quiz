var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("start-btn");
var question1 = document.getElementById("question-box1");
var question2 = document.getElementById("question-box2");
var question3 = document.getElementById("question-box3");
var question4 = document.getElementById("question-box4");
var question5 = document.getElementById("question-box5");
var correctOrNot = document.getElementById("answer");


// Countdown timer
function countdown() {
    var timeLeft = 5;

    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = "Time: " + timerEl;
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
    hideQuestion2();
    hideQuestion3();
    hideQuestion4();
    hideQuestion5();
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

// Hide second question
function hideQuestion2() {
    document.getElementById("question-box2").style.display = "none";
    document.getElementById("answer-box2").style.display = "none";
}

// Question 2 answer and to Question 3
question2.addEventListener("click", function(event) {
    var button = event.target;
    if (button.matches(".userChoice")) {
        var choice = button.textContent
        var answer = button.parentElement.getAttribute("data-answer");
        if (choice === answer) {
            hideQuestion2();
        } else {
            timeAway();
            hideQuestion2();
        }
    } showQuestion3();
});

// Show third question
function showQuestion3() {
    hideBottomeMsg();
    document.getElementById("question-box3").style.display = "block";
    document.getElementById("answer-box3").style.display = "block";
}

// Hide third question
function hideQuestion3() {
    document.getElementById("question-box3").style.display = "none";
    document.getElementById("answer-box3").style.display = "none";
}

// Question 3 answer and to Question 4
question3.addEventListener("click", function(event) {
    var button = event.target;
    if (button.matches(".userChoice")) {
        var choice = button.textContent
        var answer = button.parentElement.getAttribute("data-answer");
        if (choice === answer) {
            hideQuestion3();
        } else {
            timeAway();
            hideQuestion3();
        }
    } showQuestion4();
});

// Show fourth question
function showQuestion4() {
    hideBottomeMsg();
    document.getElementById("question-box4").style.display = "block";
    document.getElementById("answer-box4").style.display = "block";
}

// Hide fourth question
function hideQuestion4() {
    document.getElementById("question-box4").style.display = "none";
    document.getElementById("answer-box4").style.display = "none";
}

// Question 4 answer and to Question 5
question4.addEventListener("click", function(event) {
    var button = event.target;
    if (button.matches(".userChoice")) {
        var choice = button.textContent
        var answer = button.parentElement.getAttribute("data-answer");
        if (choice === answer) {
            hideQuestion4();
        } else {
            timeAway();
            hideQuestion4();
        }
    } showQuestion5();
});

// Show fifth question
function showQuestion5() {
    hideBottomeMsg();
    document.getElementById("question-box5").style.display = "block";
    document.getElementById("answer-box5").style.display = "block";
}

// Hide fifth question
function hideQuestion5() {
    document.getElementById("question-box5").style.display = "none";
    document.getElementById("answer-box5").style.display = "none";
}