var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("start-btn");
var answerBox = document.getElementById("answer-box");
var questionBox = document.getElementById("question-box");

var start = false;
var score = 0;

const Questions = [{
    id: 0,
    q: "What is the answer to the first question?",
    a: [{text: "This is not the answer", isCorrect: false},
        {text: "This is the answer", isCorrect: true},
        {text: "This is not the answer", isCorrect: false},
        {text: "This is not the answer", isCorrect: false}
]
}]

startBtn.addEventListener("click", function () {
    seconds = 5;
    start = true;

    var starterText = document.getElementById("starter-text");
        if (starterText.style.display === "none") {
            starterText.style.display = "block";
        } else {
            starterText.style.display = "none"
        }

    var questionBox = document.getElementById("question-box");
        if (questionBox.style.display !== "none") {
            questionBox.style.display = "block";
        } else {
            questionBox.style.display = "none"
        }

    var answerBox = document.getElementById("answer-box");
        if (answerBox.style.display !== "none") {
            answerBox.style.display = "block";
        } else {
            answerBox.style.display = "none"
        }

    countdown = setInterval(function () {
        if (seconds > 0) {
            timerEl.textContent = "Timer: " + seconds;
            seconds--;
        } else {
            timerEl.textContent = "Timer: 0";
        }
    }, 1000);
})

startBtn.addEventListener("click", function iterate() {
    var question = document.getElementById("question-box");

    question.innerText = Questions[0].q;

    var option1 = document.getElementById("option1");
    var option2 = document.getElementById("option2");
    var option3 = document.getElementById("option3");
    var option4 = document.getElementById("option4");
    
    option1.textContent = Questions[0].a[0].text;
    option2.textContent = Questions[0].a[1].text;
    option3.textContent = Questions[0].a[2].text;
    option4.textContent = Questions[0].a[3].text;

    option1.value = Questions[0].a[0].isCorrect;
    option2.value = Questions[0].a[1].isCorrect;
    option3.value = Questions[0].a[2].isCorrect;
    option4.value = Questions[0].a[3].isCorrect;

    
})