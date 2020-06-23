


var mainEl = document.getElementById("main");
var readEl = document.getElementById("read");
var timerEl = document.getElementById("countdown");
var bodyEl = document.createElement("div");

var i = 0;

// var millisecondsPerWord = prompt("How many milliseconds between words would you like?");

function prepareRead() {
  var timeLeft = 5;

  var timeInterval = setInterval(function() {
    timerEl.textContent = timeLeft + " ";
    timeLeft--;

    if (timeLeft < 0) {
      timerEl.textContent = "";
      speedRead();
      clearInterval(timeInterval);
    }

  }, 1000);
}


// function speedRead() {
//   mainEl.append(bodyEl);

//   var poemInterval = setInterval(function() {
//     if (words[i] === undefined) {
//       clearInterval(poemInterval);
//     } else {
//       mainEl.textContent = words[i];
//       i++;
//     }

//   }, millisecondsPerWord);
// }

prepareRead();

// create a list of questions and answers
var questionList = [
  {
      "question": "1 - Who invented JavaScript?",
      "a": "Douglas Crockford",
      "b": "Sheryl Sandberg",
      "c": "Bill Gates",
      "d": "Brendan Eich",
      "correct": "d",
      "userAnswer": null
  },
  {
      "question": "2 - Which one of these is a JavaScript package manager?",
      "a": "Node.js",
      "b": "TypeScript",
      "c": "npm",
      "d": "jquery",
      "correct": "c",
      "userAnswer": null
  },
  {
      "question": "3 - Which tool can you use to ensure code quality?",
      "a": "Angular",
      "b": "jQuery",
      "c": "RequireJS",
      "d": "ESLint",
      "correct": "d",
      "userAnswer": null
  },
  {
      "question": "4 - Which of the following function of String object causes a string to be displayed in the specified size as if it were in a <font size = 'size'> tag?",
      "a": "fontsize()",
      "b": "fontcolor()",
      "c": "fixed()",
      "d": "bold()",
      "correct": "a",
      "userAnswer": null
  },
  {
      "question": "5 - Which of the following function of String object returns the calling string value converted to lower case?",
      "a": "toLocaleLowerCase()",
      "b": "toLowerCase()",
      "c": "toString()",
      "d": "substring()",
      "correct": "b",
      "userAnswer": null
  },
  {
      "question": "6 - Which of the following function of String object returns the characters in a string between two indexes into the string?",
      "a": "slice()",
      "b": "split()",
      "c": "substr()",
      "d": "substring()",
      "correct": "d",
      "userAnswer": null
  },
  {
      "question": "7 - Which of the following function of Number object returns a string value version of the current number in a format that may vary according to a browser's locale settings.?",
      "a": "toExponential()",
      "b": "toFixed()",
      "c": "toLocaleString()",
      "d": "jtoString()",
      "correct": "c",
      "userAnswer": null
  },
  {
      "question": "8- - Which built-in method calls a function for each element in the array?",
      "a": "while()",
      "b": "loop()",
      "c": "forEach()",
      "d": "None of the above.",
      "correct": "c",
      "userAnswer": null
  },
  {
      "question": "9 - Which of the following function of Array object creates a new array with all of the elements of this array for which the provided filtering function returns true?",
      "a": "concat()",
      "b": "filter()",
      "c": "every()",
      "d": "some()",
      "correct": "b",
      "userAnswer": null
  },
  {
      "question": "10 - Which of the following function of Array object adds and/or removes elements from an array?",
      "a": "splice()",
      "b": "sort()",
      "c": "toSource()",
      "d": "unshift()",
      "correct": "a",
      "userAnswer": null
  },
  
  
];

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
      setTimeout(function(){
          questionIndex++;
          initializeQuestion();
          score.textContent= "";
      }, 5000);
  }
  else{
      score.textContent = "You got it wrong";
      setTimeout(function(){
          questionIndex++;
          initializeQuestion();
          score.textContent= "";
      }, 5000);
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
