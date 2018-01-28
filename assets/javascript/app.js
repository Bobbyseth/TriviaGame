//ready out document here:
$(document).ready(function(){
//timer shit...
var answer = document.getElementById("q1");
alert(form.element["q1"].value);






var count=60;
var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
function timer() {
  count=count-1;
  document.querySelector("#time").innerHTML = counter;
  if (count <= 0) {
     clearInterval(counter);

     //
     return;
  }

}





var correct = 0;
var wrong = 0;
//psuedo code for checking correct answer
// every question (q1-q10) has a set of answers (q1a1-q1a3). Each question will have a correct answer set, so for q1, q1a2 might be the correct answer. At then end of the timer, the js will evalute each question/amswer combo to see which is right or wrong, then show how many of each the user recieved.












































}
