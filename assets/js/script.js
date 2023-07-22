//Timer for game/updates header
var timeEl = document.getElementById("time");
var startBtn = document.getElementById("start")

// Question Bank for Quiz

var qbank1 = {
  question:
    "What is the HTML attribute used to define the internal CSS stylesheet?",
  a1: "Styles",
  a2: "class",
  a3: "style",
  a4: "variable",
  ca: "style",
  qnum: "Question 1",
};

var qbank2 = {
  question:
    "Questions 2",
  a1: "Farts",
  a2: "class",
  a3: "style",
  a4: "variable",
  ca: "style",
  qnum: "Question 1",
};

var qbank3 = {
  question:
    "Question 3",
  a1: "Styles",
  a2: "class",
  a3: "style",
  a4: "variable",
  ca: "style",
  qnum: "Question 1",
};

var qbank4 = {
  question:
    "Question 4?",
  a1: "Styles",
  a2: "class",
  a3: "style",
  a4: "variable",
  ca: "style",
  qnum: "Question 1",
};

var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;
    console.log(secondsLeft);

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      //   sendMessage();
    }
  }, 1000);
}


function askQuestion() {
//start time when quiz starts
setTime()


var qnum = qbank2

  document.getElementById("mainsection").innerHTML = `<h1>${qnum.question}</h1>
  <div class = qbox>

  <button class= "answer">${qnum.a1}</button>
  <button class= "answer">${qnum.a2}</button>
  <button class= "answer">${qnum.a3}</button>
  <button class= "answer">${qnum.a4}</button>

  </div>


`;
}


// askQuestion();