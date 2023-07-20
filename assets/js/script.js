
//Timer for game/updates header

var timeEl = document.getElementById("time");

// Selects element by id


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

document.getElementById("mainsection").innerHTML = '${secondsLeft}'











setTime();



function question(){

}





// Question Bank Vars as Objects

var q1 = {
    question: "What is the HTML attribute used to define the internal CSS stylesheet?",
    a1: "styles",
    a2: "class",
    a3: "style",
    a4: "variable",
    ca: "style",
    qnum: "1"
}


