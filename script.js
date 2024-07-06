let timer;
let totalTime;
let running = false;

const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const timerDisplay = document.getElementById("timerDisplay");
const startStopButton = document.getElementById("startStopButton");

const timerSound = document.getElementById("timerSound");

function toggleTimer() {        // This function checks if the timer is running. If it is, it stops the timer. If it's not, it starts the timer.
    if (running) {
        stopTimer();
    } else {
        startTimer();
    }
}

// This is the function where timer is start
function startTimer() {
    let minutes = parseInt(minutesInput.value) || 0;   //This line gets the value from the minutesInput HTML input element, converts it to an integer using parseInt, and assigns it to the variable minutes. If the conversion results in NaN (e.g., if the input is empty or not a number), it defaults to 0 due to the || 0 part.
    let seconds = parseInt(secondsInput.value) || 0;
    
    totalTime = minutes * 60 + seconds;  //calculates the total time in seconds by converting minutes to seconds (multiplying by 60) and adding the remaining seconds. The result is stored in the totalTime variable.
    
    if (totalTime > 0) {   //checks if totalTime is greater than 0. If it is, the code inside the if block will execute. This ensures that the timer only starts if there is a positive amount of time to count down.
        alert("Timer start!");
        running = true; //sets the running variable to true, indicating that the timer is currently running.
        startStopButton.textContent = "Stop Timer";
        timerSound.play();  // plays the sound associated with the timerSound HTML element.
        timer = setInterval(countDown, 1000);
    }
}

function stopTimer() {
    alert("Timer Stop!");
    running = false;
    clearInterval(timer);
    timerSound.pause();
    timerSound.currentTime = 0;
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






