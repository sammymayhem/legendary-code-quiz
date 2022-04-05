var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("start-btn");
var answerBox = document.getElementById("answer-box");
var questionBox = document.getElementById("question-box");
var correctOrNot = document.getElementById("answer");

var start = false;
var score = 0;
var currentQuestion = 0;

const Questions = [{
    id: 0,
    q: "What is the answer to the first question?",
    a: [{text: "This is not the answer", isCorrect: false},
        {text: "This is the answer", isCorrect: true},
        {text: "This is not the answer", isCorrect: false},
        {text: "This is not the answer", isCorrect: false}
]},
    {id: 1,
    q: "This is the second quesiton?",
    a: [{text: "Yes it is", isCorrect: true},
        {text: "No it is not", isCorrect: false},
        {text: "No it is not", isCorrect: false},
        {text: "No it is not", isCorrect: false}
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

        var correctOrNot = document.getElementById("answer");
        if (correctOrNot.style.display !== "none") {
            correctOrNot.style.display = "block";
        } else {
            correctOrNot.style.display = "none"
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

startBtn.addEventListener("click", function() {
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

answerBox.addEventListener("click", function() {
    var question = document.getElementById("question-box");
    var correctOrNot = document.getElementById("answer");

    var option1 = document.getElementById("option1");
    var option2 = document.getElementById("option2");
    var option3 = document.getElementById("option3");
    var option4 = document.getElementById("option4");

    option1.textContent = Questions[0].a[0].text;
    option2.textContent = Questions[0].a[1].text;
    option3.textContent = Questions[0].a[2].text;
    option4.textContent = Questions[0].a[3].text;

    option1.value = Questions[0].a[0].isCorrect;
    console.log(option1.value);
    option2.value = Questions[0].a[1].isCorrect;
    console.log(option2.value);
    option3.value = Questions[0].a[2].isCorrect;
    option4.value = Questions[0].a[3].isCorrect;

    var userAnswer = "";

    option1.addEventListener("click", () => {
        userAnswer = option1.value;
        console.log(userAnswer)
    })
    option2.addEventListener("click", () => {
        userAnswer = option2.value;
        console.log(userAnswer)
    })
    option3.addEventListener("click", () => {
        userAnswer = option3.value;
    })
    option4.addEventListener("click", () => {
        userAnswer = option4.value;
    })

    if (userAnswer === "true") {
        correctOrNot.textContent = "That is correct!"
    } else {
        correctOrNot.textContent = "That is incorrect!"
    }

})


function endQuiz() {
    clearInterval(timerEl);
    seconds = 0;
}