// vars defined here:
var correct = 0;
var wrong = 0;
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
        results();
    }
}

//function to run when time runs out
function outOfTime() {
  clearInterval(clock);
  $("#time").html("<h3>You're out of time</h3>");
  document.getElementById("quiz").submit();
  document.getElementById("quiz").reset();
}

//function for checking results, not working...
function results() {
  if (document.getElementById("q1").checked) {
    var answer1 = document.getElementsByName("q1").value;
    if (answer1 == 1) {
      correct++;
      }
    if (answer1 != 1) {
      wrong++;
      }
  }
}
