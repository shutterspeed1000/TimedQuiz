
// Question Bank for Quiz

const qbank = [
  {
    question:
      "What is the HTML attribute used to define the internal CSS stylesheet?",
    a1: "Styles",
    a2: "class",
    a3: "style",
    a4: "variable",
    ca: "style",
    qnum: "Question 1",
  },

  {
    question: "Questions 2",
    a1: "Test",
    a2: "class",
    a3: "style",
    a4: "variable",
    ca: "style",
    qnum: "Question 1",
  },

  {
    question: "Question 3",
    a1: "Styles",
    a2: "class",
    a3: "style",
    a4: "variable",
    ca: "style",
    qnum: "Question 1",
  },

  {
    question: "Question 4?",
    a1: "a4",
    a2: "class",
    a3: "style",
    a4: "variable",
    ca: "style",
    qnum: "Question 1",
  },
];


//Timer for game/updates header
var timeEl = document.getElementById("time");
var startBtn = document.getElementById("start");
var questionPicked = Math.floor(Math.random() * 3);
 startBtn.addEventListener("click", function () {
askQuestion()
})


var questionPicked = Math.floor(Math.random() * 3);






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

  document.getElementById("mainsection").innerHTML = `<h1>${qbank[questionPicked].question}</h1>

  <div class = qbox>

  <button class= "answer" id="ba1">${qbank[questionPicked].a1}</button>
  <button class= "answer" id="ba2">${qbank[questionPicked].a2}</button>
  <button class= "answer" id="ba3">${qbank[questionPicked].a3}</button>
  <button class= "answer" id="ba4">${qbank[questionPicked].a4}</button>

  </div>`

  var answerClicked

  // Buttons for answers
  var ba1 = document.getElementById("ba1");
  var ba2 = document.getElementById("ba2");
  var ba3 = document.getElementById("ba3");
  var ba4 = document.getElementById("ba4");
  
  ba1.addEventListener("click", function () {
    var answerClicked = 1
   })
  
   console.log(answerClicked) 


}

