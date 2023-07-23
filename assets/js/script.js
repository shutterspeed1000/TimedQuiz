// Question Bank for Quiz

const qbank = [
  {
    question:
      "What is the HTML attribute used to define the internal CSS stylesheet?",
    a1: "Styles",
    a2: "class",
    a3: "style",
    a4: "variable",
    ca: "1",
  },

  {
    question: "Questions 2",
    a1: "Test",
    a2: "class",
    a3: "style",
    a4: "variable",
    ca: "3",
  },

  {
    question: "Question 3",
    a1: "Styles",
    a2: "class",
    a3: "style",
    a4: "variable",
    ca: "2",
   
  },

  {
    question: "Question 4?",
    a1: "a4",
    a2: "class",
    a3: "style",
    a4: "variable",
    ca: "1",
    
  },
];

//Timer for game/updates header
var timeEl = document.getElementById("time");

var startBtn = document.getElementById("start");

var titlepage = document.getElementById("titlepage");
var questionpage = document.getElementById("questionpage");
var endpage = document.getElementById("endpage");
var question = document.getElementById("question");
var ba1 = document.getElementById("ba1");
var ba2 = document.getElementById("ba2");
var ba3 = document.getElementById("ba3");
var ba4 = document.getElementById("ba4");

startBtn.addEventListener("click", function () {
  setTime();
  askQuestion();
});

var secondsLeft = 60;

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
  titlepage.setAttribute("style", "display: none");
  questionpage.setAttribute("style", "display: block");

  var questionPicked = Math.floor(Math.random() * 3);

  // Set text for q and as
  question.textContent = `${qbank[questionPicked].question}`;
  ba1.textContent = `${qbank[questionPicked].a1}`;
  ba2.textContent = `${qbank[questionPicked].a2}`;
  ba3.textContent = `${qbank[questionPicked].a3}`;
  ba4.textContent = `${qbank[questionPicked].a4}`;
  currentAnswer = qbank[questionPicked].ca;

  return currentAnswer
}

// Check for correct answer when button pushed


var answerClicked


ba1.addEventListener("click", function () {
  answerClicked = 1;
  alert(1);
  if (answerClicked == currentAnswer) {
    alert("Correct");
    askQuestion();
  } else {
    secondsLeft = secondsLeft - 5;
  }
});

ba2.addEventListener("click", function () {
  answerClicked = 2;
  alert(2);
  if (answerClicked == currentAnswer) {
    alert("Correct");
    askQuestion();
  } else {
    secondsLeft = secondsLeft - 5;
  }
});

ba3.addEventListener("click", function () {
  alert(3);
  answerClicked = 3;
  if (answerClicked == currentAnswer) {
    alert("Correct");
    askQuestion();
  } else {
    secondsLeft = secondsLeft - 5;
  }
});

ba4.addEventListener("click", function () {
  alert(4);
  answerClicked = 4;
  if (answerClicked == currentAnswer) {
    alert("Correct");
    askQuestion();
  } else {
    secondsLeft = secondsLeft - 5;
  }
});

// document.getElementById("mainsection").innerHTML = `<h1>${qbank[questionPicked].question}</h1>`

//   <div class = qbox>

//   <button class= "answer" id="ba1">${qbank[questionPicked].a1}</button>
//   <button class= "answer" id="ba2">${qbank[questionPicked].a2}</button>
//   <button class= "answer" id="ba3">${qbank[questionPicked].a3}</button>
//   <button class= "answer" id="ba4">${qbank[questionPicked].a4}</button>

//   </div>`
//   var corectAnswer = qbank[qbank[questionPicked].ca]
//   var answerClicked

//   // Buttons for answers
//   var ba1 = document.getElementById("ba1");
//   var ba2 = document.getElementById("ba2");
//   var ba3 = document.getElementById("ba3");
//   var ba4 = document.getElementById("ba4");

// ba1.addEventListener("click", function () {
//   var answerClicked = 1
//   })

// return corectAnswer,answerClicked
