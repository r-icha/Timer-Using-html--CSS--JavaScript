let timer;
let totalTime;
let running = false;
let minutesInput = document.getElementById("minutes");
let secondsInput = document.getElementById("seconds");
let timerDisplay = document.getElementById("timerDisplay");
let startStopButton = document.getElementById("startStopButton");

function toggleTimer() {
    if (running) {
        stopTimer();
    } else {
        startTimer();
    }
}

function startTimer() {
    let minutes = parseInt(minutesInput.value) || 0;
    let seconds = parseInt(secondsInput.value) || 0;
    
    totalTime = minutes * 60 + seconds;
    
    if (totalTime > 0) {
        running = true;
        startStopButton.textContent = "Stop Timer";
        timer = setInterval(countDown, 1000);
    }
}

function stopTimer() {
    running = false;
    clearInterval(timer);
    startStopButton.textContent = "Start Timer";
}

function countDown() {
    if (totalTime <= 0) {
        stopTimer();
        alert("Time's up!");
        return;
    }
    
    totalTime--;
    
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    
    timerDisplay.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
