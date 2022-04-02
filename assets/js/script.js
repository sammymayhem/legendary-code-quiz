var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("start-btn");
var answerBox = document.getElementById("answer-box");


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

    var starterText = document.getElementById("starter-text");
        if (starterText.style.display == "none") {
            starterText.style.display = "block";
        } else {
            starterText.style.display = "none"
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