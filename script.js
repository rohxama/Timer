// Initializing the buttons 
document.getElementById("start-btn").disabled = false;
document.getElementById("pause-btn").disabled = true;
document.getElementById("reset-btn").disabled = true;
document.getElementById("inputH").disabled = false;
document.getElementById("inputM").disabled = false;
document.getElementById("inputS").disabled = false;

// Global Variables
let timer = null;
let hours = 0;
let minutes = 0;
let seconds = 0;

// Defining a start function 
function startTimer() {
    hours = document.getElementById("inputH").value || 0;
    minutes = document.getElementById("inputM").value || 0;
    seconds = document.getElementById("inputS").value || 0;

    // Displaying initial Time 
    counting();

    // Start the timer 
    timer = setInterval(counting, 1000);

    // Changing the states of buttons 
    document.getElementById("start-btn").disabled = true;
    document.getElementById("pause-btn").disabled = false;
    document.getElementById("reset-btn").disabled = false;
    document.getElementById("inputH").disabled = true;
    document.getElementById("inputM").disabled = true;
    document.getElementById("inputS").disabled = true;
}

// Defining a pause function
function pauseTimer() {

    // Changing the states of buttons 
    document.getElementById("start-btn").disabled = false;
    document.getElementById("pause-btn").disabled = true;
    document.getElementById("reset-btn").disabled = false;
    document.getElementById("inputH").disabled = true;
    document.getElementById("inputM").disabled = true;
    document.getElementById("inputS").disabled = true;

    // Pause the timer 
    clearInterval(timer);
}

// Defining a reset function 
function resetTimer() {

    clearInterval(timer);

    // Changing the states of buttons 
    document.getElementById("start-btn").disabled = false;
    document.getElementById("pause-btn").disabled = true;
    document.getElementById("reset-btn").disabled = true;
    document.getElementById("inputH").disabled = false;
    document.getElementById("inputM").disabled = false;
    document.getElementById("inputS").disabled = false;

    // Reset the timer 
    document.getElementById("inputH").value = 0;
    document.getElementById("inputM").value = 0;
    document.getElementById("inputS").value = 0;

    document.querySelector("p").innerHTML = "Timer Stopped <br> Start it again 🕛"
}

// Defining the countdown function 
function counting() {

    // Increment Seconds 
    seconds++;

    // Increment Minutes 
    if (seconds >= 60) {
        seconds = 0;
        minutes++;

    }
    
    // Increment Hours 
    if (minutes >= 60) {

        minutes = 0;
        hours++;
    }

    // Update input fields
    document.getElementById("inputH").value = hours;
    document.getElementById("inputM").value = minutes;
    document.getElementById("inputS").value = seconds;

    // Displaying the current time 
    document.querySelector("p").innerHTML = hours + " hours " + minutes + " minutes " + seconds + " seconds ";
}




