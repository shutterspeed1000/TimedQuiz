// Question Bank for Quiz

const qbank = [
  {
    question:
      "What is the HTML attribute used to define the internal CSS stylesheet?",
    a1: "Styles",
    a2: "class",
    a3: "style",
    a4: "variable",
    ca: 1,
  },

  {
    question: "Questions 2",
    a1: "Test",
    a2: "class",
    a3: "style",
    a4: "variable",
    ca: 3,
  },

  {
    question: "Question 3",
    a1: "Styles",
    a2: "class",
    a3: "style",
    a4: "variable",
    ca: 2,
  },

  {
    question: "Question 4?",
    a1: "a4",
    a2: "class",
    a3: "style",
    a4: "variable",
    ca: 1,
  },
];

//Timer for game/updates header
var timeEl = document.getElementById("time");

var startBtn = document.getElementById("start");

var titlepage = document.getElementById("titlepage");
var questionpage = document.getElementById("questionpage");
var endpage = document.getElementById("endPage");
var question = document.getElementById("question");
var ba1 = document.getElementById("ba1");
var ba2 = document.getElementById("ba2");
var ba3 = document.getElementById("ba3");
var ba4 = document.getElementById("ba4");
var correct = document.getElementById("correct");
var wrong = document.getElementById("wrong");
var submit = document.getElementById("submit");
var init = document.getElementById("init");
// var highscore = document.getElementById("highscore");
var highbutton = document.getElementById("highbutton");

var questionPicked = 0;
var score = 0;

startBtn.addEventListener("click", function () {
  // setTime();
  askQuestion();
});

var secondsLeft = 500;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;
    console.log(secondsLeft);

    if (secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      endGame();
    }
  }, 1000);
}

function askQuestion() {

  // Check if all questions have been asked before starting page
  if (questionPicked == qbank.length) {
    endGame();
    return
  }

  // Set text for q and as and hide start page

  titlepage.setAttribute("style", "display: none");
  questionpage.setAttribute("style", "display: block");

  //Hide correct/wrong alerts
  correct.setAttribute("style", "display: none");
  wrong.setAttribute("style", "display: none");


  question.textContent = `${qbank[questionPicked].question}`;
  ba1.textContent = `${qbank[questionPicked].a1}`;
  ba2.textContent = `${qbank[questionPicked].a2}`;
  ba3.textContent = `${qbank[questionPicked].a3}`;
  ba4.textContent = `${qbank[questionPicked].a4}`;
  currentAnswer = qbank[questionPicked].ca;

  return currentAnswer;
}

// Check for correct answer when button pushed

var answerClicked;


ba1.addEventListener("click", function () {
  answerClicked = 1;
  if (answerClicked == currentAnswer) {
    correct.setAttribute("style", "display: block");
    wrong.setAttribute("style", "display: none");
    questionPicked++;
    score++;
    askQuestion();
  } else {
    correct.setAttribute("style", "display: none");
    wrong.setAttribute("style", "display: block");
    secondsLeft = secondsLeft - 5;
  }
});

ba2.addEventListener("click", function () {
  answerClicked = 2;
  if (answerClicked == currentAnswer) {
    correct.setAttribute("style", "display: block");
    wrong.setAttribute("style", "display: none");
    questionPicked++;
    score++;
    askQuestion();
  } else {
    correct.setAttribute("style", "display: none");
    wrong.setAttribute("style", "display: block");
    secondsLeft = secondsLeft - 5;
  }
});

ba3.addEventListener("click", function () {
  answerClicked = 3;
  if (answerClicked == currentAnswer) {
    correct.setAttribute("style", "display: block");
    wrong.setAttribute("style", "display: none");
    questionPicked++;
    score++;
    askQuestion();
  } else {
    correct.setAttribute("style", "display: none");
    wrong.setAttribute("style", "display: block");
    secondsLeft = secondsLeft - 5;
  }
});

ba4.addEventListener("click", function () {
  answerClicked = 4;
  if (answerClicked == currentAnswer) {
    correct.setAttribute("style", "display: block");
    wrong.setAttribute("style", "display: none");
    questionPicked++;
    score++;
    askQuestion();
  } else {
    correct.setAttribute("style", "display: none");
    wrong.setAttribute("style", "display: block");
    secondsLeft = secondsLeft - 5;
  }
});

//submit initials and score to local storage
submit.addEventListener("click", function() {
  event.preventDefault();
var initials = document.querySelector("#init").value;
localStorage.setItem("initials", initials);
localStorage.setItem("score", score);
highscore.setAttribute("style", "display: none");
document.getElementById("restart").setAttribute("style", "display: block");
});

//Setup highscore page and endgame

function endGame() {
  correct.setAttribute("style", "display: none");
  wrong.setAttribute("style", "display: none");
  titlepage.setAttribute("style", "display: none");
  questionpage.setAttribute("style", "display: none");
  endpage.setAttribute("style", "display: block");
  document.getElementById("score").textContent = score;
//Ask for initials if current high score
if (score > localStorage.getItem("score")) {
highscore.setAttribute("style", "display: block");
document.getElementById("restart").setAttribute("style", "display: none");
}

if (score < localStorage.getItem("score")){
document.getElementById("restart").setAttribute("style", "display: block");
}
}


highbutton.addEventListener("click", function() {
highpage()
})

function highpage() {

  document.getElementById("mainsection").innerHTML = `
  
  <h2>Current High Score</h2>
  <h2>${localStorage.getItem("initials")} - ${localStorage.getItem("score")}</h2>

  `
  
  

}
