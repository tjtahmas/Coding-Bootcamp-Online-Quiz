// TJ Tahmassebi's Code
// 10/8: Started making questions. Figure out how to make array of objects (possibly JSON)
// 10/10: Added timer and more questions. Added elements to HTML and created basic CSS styling. Stores score and initials to local storage. Displays first question and options

var score = [0, 0]; //Keeps track of their correct and incorrect answers. First value is correct, second is incorrect

var Question1 = {
    Q: "_____ require a comma after each new variable.",
    As: ["Arrays","Objects","Strings","Lines"],
    Correct: 2,
}

var Question2 = {
    Q: "A common name for a javascript file is...",
    As: ["style","index","README","script"],
    Correct: 4,
}

var Question3 = {
    Q: "What does API stand far?",
    As: ["Airwaves Perpetrator Imposition", "Alturistic Polygraph Induction", "Applitcation Programming Interface", "Antinodal Plyometric Interference"],
    Correct: 3,
}

var Question4 = {
    Q: "What do you put before a comment in JavaScript?",
    As: ["<!--","##","/*","//"],
    Correct: 4,
}

var Question5 = {
    Q: "Which logical operator compares value and type?",
    As: ["=","==","===","%"],
    Correct: 3,
}

var Question6 = {
    Q: "Which logical operator means 'or'?",
    As: ["@@","&&","##","||"],
    Correct: 4,
}

var Question7 = {
    Q: "Which response means 'An assigned variable with no value'?",
    As: ["null","undefined","false","0"],
    Correct: 1,
}

var Question8 = {
    Q: "An array's first index is assigned which value?",
    As: ["1","0","i","true"],
    Correct: 2,
}

var Question9 = {
    Q: "Which method adds the value as the first element of an arry without removing any elements?",
    As: ["concat","unshift","pop","toUpperCase"],
    Correct: 2,
}

var Question10 = {
    Q: "Which statement creates a loops that continues to run as long as a specified condition is true?",
    As: ["while","if","var","for"],
    Correct: 1,
}

//Make Array of Question Objects

//var Quiz = JSON.stringify(Question1,Question2,Question3,Question4,Question5,Question6,Question7,Question8,Question9,Question10);
//console.log(JSON.parse(Quiz))

//Spawn in Question elements to correct attributes while the timer runs

//Question
var question = document.getElementById("display");
question.textContent = Question1.Q;


//Answer Options
var first = document.getElementById("Q1");
var second = document.getElementById("Q2");
var third = document.getElementById("Q3");
var fourth = document.getElementById("Q4");

console.log(first)
console.log(Question1.As[0])

first.textContent = Question1.As[0];
second.textContent = Question1.As[1];
third.textContent = Question1.As[2];
fourth.textContent = Question1.As[3];

//Turn the above into a function, too much repeated action

//Add event listener to each list item





//Keep track of the correct and incorrect answers

//Display score at the end


//Save score and initials to local storage
initials = "TT";

localStorage.setItem("#score",score[0]);
localStorage.setItem("#initials",initials);



///////////////////////////
// Timer Code

var timerEl = document.getElementById('countdown');

function countdown() {
  var timeLeft = 30;

  //
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + " seconds left";

    if(timeLeft == 0){
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

countdown();

