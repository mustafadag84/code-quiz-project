
var playButton = document.querySelector("#play");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var quizMinutesInput = document.querySelector("#quiz-minutes");
var resultsSection = document.querySelector("#results");
var correctAnswersSpan = document.querySelector("#correct-answers");
var wrongAnswersSpan = document.querySelector("#wrong-answers");
var questionSection = document.querySelector("#question-section");
var scores = document.querySelector("#scores");


scores.addEventListener("click", function(event){
  var savedScores = {"correctAnswers": correctAnswers, "wrongAnswers": wrongAnswers}
  localStorage.setItem("test-result",JSON.stringify(savedScores)); 
})

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;
var correctAnswers = 0;
var wrongAnswers = 0;

// this function runs once a second
function runClockCb() {
  secondsElapsed++;
  
  // change the display
  minutesDisplay.textContent = Math.floor((totalSeconds - secondsElapsed) / 60);
  secondsDisplay.textContent = (totalSeconds - secondsElapsed) % 60;

  // we have to stop it at 0
  if (secondsElapsed >= totalSeconds) {
    clearInterval(interval);
    correctAnswersSpan.textContent = correctAnswers;
    wrongAnswersSpan.textContent = wrongAnswers;
    resultsSection.style.display = "block";
  }
}



function startTimer() {
  // Write code to start the timer here
  questionSection.style.display = "block";
  var minutes = parseInt(quizMinutesInput.value);
  // set time using totalSeconds
  totalSeconds = minutes * 60;
  // initialize seconds on the play button
  secondsElapsed = 0;

  if (typeof interval !== 'undefined') {
    // if we have an interval we want to clear it
    clearInterval(interval);

  }

  // keep track of our interval
  interval = setInterval(runClockCb, 1000);
}

playButton.addEventListener("click", startTimer);





var questionTag = document.body.querySelector("#question");
var answerTagA = document.body.querySelector("#answer-a");
var answerTagB = document.body.querySelector("#answer-b");
var answerTagC = document.body.querySelector("#answer-c");
var answerTagD = document.body.querySelector("#answer-d");

var buttonA = document.body.querySelector("#button-a");
var buttonB = document.body.querySelector("#button-b");
var buttonC = document.body.querySelector("#button-c");
var buttonD = document.body.querySelector("#button-d");

var score = document.body.querySelector("#score");

var questionIndex = 0;

function buttonHandler(event) {
  var button = event.target;
  var userAnswer = button.getAttribute("data-answer");
  var questionId = parseInt(button.getAttribute("data-question"));
  console.log(button);
  console.log(userAnswer);
  console.log(questionId);
  questionList[questionId]["userAnswer"] = userAnswer;

  if(questionList[questionId]["userAnswer"] === questionList[questionId]["correct"]){
      score.textContent = "You got it correct";
      correctAnswers++;
      setTimeout(function(){
          questionIndex++;
          initializeQuestion();
          score.textContent= "";
      }, 1000);
  }
  else{
      score.textContent = "You got it wrong";
      wrongAnswers++;
      setTimeout(function(){
          questionIndex++;
          initializeQuestion();
          score.textContent= "";
      }, 1000);
  }
}

buttonA.addEventListener("click",buttonHandler);
buttonB.addEventListener("click",buttonHandler);
buttonC.addEventListener("click",buttonHandler);
buttonD.addEventListener("click",buttonHandler);

function initializeQuestion(){
  console.log(questionList[questionIndex]);
  var wholeObj = questionList[questionIndex];
  var question = wholeObj.question;
  console.log(question);
  questionTag.textContent = question;
  questionTag.setAttribute("data-question", questionIndex);

  answerTagA.textContent = wholeObj.a;
  answerTagB.textContent = wholeObj.b;
  answerTagC.textContent = wholeObj.c;
  answerTagD.textContent = wholeObj.d;
  buttonA.setAttribute("data-question", questionIndex);
  buttonB.setAttribute("data-question", questionIndex);
  buttonC.setAttribute("data-question", questionIndex);
  buttonD.setAttribute("data-question", questionIndex);
}
initializeQuestion();
