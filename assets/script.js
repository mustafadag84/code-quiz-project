var questions = [
    {
      question: "What is a computer?",
      choices: ["A noun", "A verb"],
      answer: "A noun"
    },
    {
      question: "JavaScript is awesome.",
      choices: ["True", "False"],
      answer: "True"
    },
    {
      question: "Which CSS selector should only be applied to one element on the page?",
      choices: ["div", "id", "tag", "var"],
      answer: "id"
  
    },
    {
      question: "JavaScript is a typed language",
      choices: ["true - variable types are defined", "false - variable types are not pre-defined"],
      answer: "false - variable types are not pre-defined"
    },
    {
      question: "What does this refer to?",
      choices: ["this computer", "this variable", "the parent object of the target"],
      answer: "the parent object of the target"
    }
  ]


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


function speedRead() {
  mainEl.append(bodyEl);

  var poemInterval = setInterval(function() {
    if (words[i] === undefined) {
      clearInterval(poemInterval);
    } else {
      mainEl.textContent = words[i];
      i++;
    }

  }, millisecondsPerWord);
}

prepareRead();
