// timer variable
var timeLeft = 60;
// function for running the timer
function run() {
   clock = setInterval(decrement, 1000);
}
run();
//funcion for the timer
function decrement() {
    timeLeft--;
    $("#time").html("<h3>Time Left: " + timeLeft + "</h3>");
    if (timeLeft === 0) {
        outOfTime();
    }
}
//function to run when time runs out
function outOfTime() {
  clearInterval(clock);
  $("#time").html("<h3>You're out of time</h3>");
}
