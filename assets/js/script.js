var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", function () {
    seconds = 5;

    countdown = setInterval(function () {
        if (seconds > 0) {
            timerEl.textContent = "Timer: " + seconds;
            seconds--;
        } else {
            timerEl.textContent = "Timer: 0";
        }
    }, 1000);
})