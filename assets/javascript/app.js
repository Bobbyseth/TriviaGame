var correct = 0;
var wrong = 0;
// timer variable
var timeLeft = 5;
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
  document.getElementById("quiz").submit();
  check();
}

function check() {
  $('#quiz input').on('change', function() {
    var a1 = ($('input[name=q1]:checked', '#quiz').val());
      if (a1 == 1) {
        correct++;
      }
      else {
      wrong++;
      }
  });
  $('#quiz input').on('change', function() {
    var a2 = ($('input[name=q2]:checked', '#quiz').val());
      if (a2 == 1) {
        correct++;
      }
      else {
      wrong++;
      }
  });
  $('#quiz input').on('change', function() {
    var a3 = ($('input[name=q3]:checked', '#quiz').val());
      if (a3 == 1) {
        correct++;
      }
      else {
      wrong++;
      }
  });
  $('#quiz input').on('change', function() {
    var a4 = ($('input[name=q4]:checked', '#quiz').val());
      if (a4 == 1) {
        correct++;
      }
      else {
      wrong++;
      }
  });
  $('#quiz input').on('change', function() {
    var a5 = ($('input[name=q5]:checked', '#quiz').val());
      if (a1 == 5) {
        correct++;
      }
      else {
      wrong++;
      }
  });
  $('#quiz input').on('change', function() {
    var a6 = ($('input[name=q6]:checked', '#quiz').val());
      if (a1 == 6) {
        correct++;
      }
      else {
      wrong++;
      }
  });
  $('#quiz input').on('change', function() {
    var a7 = ($('input[name=q7]:checked', '#quiz').val());
      if (a1 == 7) {
        correct++;
      }
      else {
      wrong++;
      }
  });
  $('#quiz input').on('change', function() {
    var a8 = ($('input[name=q8]:checked', '#quiz').val());
      if (a1 == 8) {
        correct++;
      }
      else {
      wrong++;
      }
  });
  $('#quiz input').on('change', function() {
    var a9 = ($('input[name=q9]:checked', '#quiz').val());
      if (a1 == 9) {
        correct++;
      }
      else {
      wrong++;
      }
  });
  $('#quiz input').on('change', function() {
    var a10 = ($('input[name=q10]:checked', '#quiz').val());
      if (a10 == 1) {
        correct++;
      }
      else {
      wrong++;
      }
  });
}
