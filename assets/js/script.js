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
    question: "Commonly used data types DO NOT include:",
    a1: "strings",
    a2: "booleans",
    a3: "alerts",
    a4: "numbers",
    ca: 3,
  },

  {
    question:
      "The condition in an if/else statement is enclosed with ________.",
    a1: "quotes",
    a2: "curly brackets",
    a3: "parenthesis",
    a4: "square brackets",
    ca: 3,
  },

  {
    question: "Arrays in Javascript can be used to store ____________?",
    a1: "numbers and strings",
    a2: "other arrays",
    a3: "booleans",
    a4: "all of the above",
    ca: 4,
  },
  {
    question: "Javascript is an _______ language?",
    a1: "object-oriented",
    a2: "object-based",
    a3: "procedural",
    a4: "all of the above",
    ca: 4,
  },
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    a1: "var",
    a2: "let",
    a3: "Both A dnd B",
    a4: "all of the above",
    ca: 3,
  },
  {
    question:
      "AWhich of the following methods can be used to display data in some form using Javascript?",
    a1: "docuement.write()",
    a2: "console.log()",
    a3: "window.alert()",
    a4: "all of the above",
    ca: 4,
  },
  {
    question: "How can a datatype be declared to be a constant type?",
    a1: "const",
    a2: "var",
    a3: "let",
    a4: "constant",
    ca: 1,
  },
  {
    question:
      "What keyword is used to check whether a given property is valid or not?",
    a1: "in",
    a2: "is in",
    a3: "exists",
    a4: "lies",
    ca: 1,
  },
  {
    question:
      "When an operator’s value is NULL, the typeof returned by the unary operator is:",
    a1: "boolean",
    a2: "undefined",
    a3: "object",
    a4: "integer",
    ca: 3,
  },
];
// end question section.........................

// Start code

// Variables for objects on page
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
var submit = document.getElementById("highscore");
var init = document.getElementById("init");
var highbutton = document.getElementById("highbutton");
var highscores = document.getElementById("highscores");
var questionPicked = 0;
var score = 0;

// Start button clicked - starts timer and questions
startBtn.addEventListener("click", function () {
  setTime();
  askQuestion();
});

// time allowed for quiz
var secondsLeft = 60;

// Timer function for quiz
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

// Ask question function - edits page
function askQuestion() {
  // Check if all questions have been asked before starting page
  if (questionPicked == qbank.length) {
    endGame();
    return;
  }

  // Set text for q and as and hide start page
  titlepage.setAttribute("style", "display: none");
  questionpage.setAttribute("style", "display: block");

  //Hide correct/wrong alerts
  correct.setAttribute("style", "display: none");
  wrong.setAttribute("style", "display: none");

  // Set text on question page
  question.textContent = `${qbank[questionPicked].question}`;
  ba1.textContent = `${qbank[questionPicked].a1}`;
  ba2.textContent = `${qbank[questionPicked].a2}`;
  ba3.textContent = `${qbank[questionPicked].a3}`;
  ba4.textContent = `${qbank[questionPicked].a4}`;
  currentAnswer = qbank[questionPicked].ca;
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

// Highscore and game ending sections

//submit initials and score to local storage if currently the best score
submit.addEventListener("submit", function () {
  event.preventDefault();
  var initials = document.querySelector("#init").value;
  localStorage.setItem("initials", initials);
  localStorage.setItem("score", score);
  submit.setAttribute("style", "display: none");
  document.getElementById("restart").setAttribute("style", "display: block");
});

//Setup highscore page and endgame page - stops timer
function endGame() {
  secondsLeft = 0;
  correct.setAttribute("style", "display: none");
  wrong.setAttribute("style", "display: none");
  titlepage.setAttribute("style", "display: none");
  questionpage.setAttribute("style", "display: none");
  endpage.setAttribute("style", "display: flex");
  document.getElementById("score").textContent = score;

  //Ask for initials if current high score or if currently null
  if (
    score > localStorage.getItem("score") ||
    localStorage.getItem("score") == null
  ) {
    highscore.setAttribute("style", "display: flex");
    document.getElementById("restart").setAttribute("style", "display: none");
  }
  if (score < localStorage.getItem("score")) {
    document.getElementById("restart").setAttribute("style", "display: block");
  }
}
document.getElementById("restart").addEventListener("click", function () {
  location.reload();
});

// Opens highscore page
highbutton.addEventListener("click", function () {
  highpage();
});

document.getElementById("restarths").addEventListener("click", function () {
  location.reload();
});

document.getElementById("clearhs").addEventListener("click", function () {
  localStorage.clear();
  localStorage.setItem("initials", "This could be you!");
  localStorage.setItem("score", "0");
  location.reload();
});

function highpage() {
  titlepage.setAttribute("style", "display: none");
  highscores.setAttribute("style", "display: flex");
  document.getElementById("HSName").textContent =
    localStorage.getItem("initials");
  document.getElementById("HSScore").textContent =
    "Score: " + localStorage.getItem("score");
}
