
//Timer for game/updates header
var timeEl = document.getElementById("time");

// Question Bank for Quiz

var qbank = {
  question: "What is the HTML attribute used to define the internal CSS stylesheet?",
  a1: "styles",
  a2: "class",
  a3: "style",
  a4: "variable",
  ca: "style",
  qnum: "Question 1"
};


var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;
    console.log(secondsLeft);

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
    //   sendMessage();
    }

  }, 1000);
}

document.getElementById("mainsection").innerHTML= 

`<h1>Time ${qbank.question}</h1>
  <div class = qbox>
  
  <button>${qbank.a1}</button>
  <button>${qbank.a2}</button>
  <button>${qbank.a3}</button>
  <button>${qbank.a4}</button>

  </div>


`;

setTime();








