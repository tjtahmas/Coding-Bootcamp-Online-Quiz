// TJ Tahmassebi's Code
// 10/8: Started making questions. Figure out how to make array of objects (possibly JSON)
// 10/10: Added timer and more questions. Added elements to HTML and created basic CSS styling. Stores score and initials to local storage. Displays first question and options
// 10/11: Added jQuery link to add multiple even listeners to buttons. Keeps track of answers. Displays score at the end. Stops when timer goes off. 

//Still need to add initials, make it loop. Maybe make a start button

var score = [0, 0]; //Keeps track of their correct and incorrect answers. First value is correct, second is incorrect

var Question1 = {
    Q: "_____ require a comma after each new variable.",
    As: ["Arrays", "Objects", "Strings", "Lines"],
    Correct: 2,
}

var Question2 = {
    Q: "A common name for a javascript file is...",
    As: ["style", "index", "README", "script"],
    Correct: 4,
}

var Question3 = {
    Q: "What does API stand far?",
    As: ["Airwaves Perpetrator Imposition", "Alturistic Polygraph Induction", "Applitcation Programming Interface", "Antinodal Plyometric Interference"],
    Correct: 3,
}

var Question4 = {
    Q: "What do you put before a comment in JavaScript?",
    As: ["<!--", "##", "/*", "//"],
    Correct: 4,
}

var Question5 = {
    Q: "Which logical operator compares value and type?",
    As: ["=", "==", "===", "%"],
    Correct: 3,
}

var Question6 = {
    Q: "Which logical operator means 'or'?",
    As: ["@@", "&&", "##", "||"],
    Correct: 4,
}

var Question7 = {
    Q: "Which response means 'An assigned variable with no value'?",
    As: ["null", "undefined", "false", "0"],
    Correct: 1,
}

var Question8 = {
    Q: "An array's first index is assigned which value?",
    As: ["1", "0", "i", "true"],
    Correct: 2,
}

var Question9 = {
    Q: "Which method adds the value as the first element of an arry without removing any elements?",
    As: ["concat", "unshift", "pop", "toUpperCase"],
    Correct: 2,
}

var Question10 = {
    Q: "Which statement creates a loops that continues to run as long as a specified condition is true?",
    As: ["while", "if", "var", "for"],
    Correct: 1,
}

var options = $('.options');
    options.on('click', '.option', chooseSelection);

//Displays Question and Options from Object entered
function displayQuestion(question) {
    //Display Question
    var display = document.getElementById("display");
    display.textContent = question.Q;

    //Get Answers
    var first = document.getElementById("Q1");
    var second = document.getElementById("Q2");
    var third = document.getElementById("Q3");
    var fourth = document.getElementById("Q4");

    //Set answers to options
    first.textContent = question.As[0];
    second.textContent = question.As[1];
    third.textContent = question.As[2];
    fourth.textContent = question.As[3];
}

var Key = [2,4,3,4,3,4,1,2,2,1];
var qNumber = 0;

function chooseSelection(event){
    var chosen = event.target.value;
    if(chosen == Key[qNumber - 1]){ //Keep track of the correct and incorrect answers
        score[0]++;
        nextQuestion();
    } else {
        score[1]++;
        nextQuestion();
    }
    //console.log(score)
    //console.log(Key[qNumber])
}

function selectQuestion(qNumber){ //Spawn in Question elements to correct attributes while the timer runs
    if (qNumber == 1){
        displayQuestion(Question1);
    } else if (qNumber == 2){
        displayQuestion(Question2);
    } else if (qNumber == 3){
        displayQuestion(Question3);
    } else if (qNumber == 4){
        displayQuestion(Question4);
    } else if (qNumber == 5){
        displayQuestion(Question5);
    } else if (qNumber == 6){
        displayQuestion(Question6);
    } else if (qNumber == 7){
        displayQuestion(Question7);
    } else if (qNumber == 8){
        displayQuestion(Question8);
    } else if (qNumber == 9){
        displayQuestion(Question9);
    } else if (qNumber == 10){
        displayQuestion(Question10);
    }  
    else {
        clearOptions();
        timerEl.textContent = '0';
        showScore();
    }
}

function clearOptions(){
    var Q = $('.question');
    Q.empty();
    var O = $('.option')
    O.parent().empty();
    spawnTextbox();
}

function showScore(){ //Display score at the end
    var show = $('#scoreboard')
    show.text("You got " + score[0] + " correct and " + score[1] + " wrong.");
}

function nextQuestion (){ 
    qNumber++; 
    selectQuestion(qNumber);
}

nextQuestion();
countdown();

//Save score and initials to local storage
function spawnTextbox(){
    var div = $('.inits');
    var input = $('<input>')
    var message = $('<h3>')
    var button = $('<button>')
    //button.addEventListener("click", enterInitials);
    message.text('Enter your initials!')
    div.append(message);
    div.append(input);
    div.append(button);
    
}

function enterInitials(){
    var div = $('.inits');
    var input = div.children().eq(1);
    initials = input.value;

    localStorage.setItem("#score", score[0].toString());
    localStorage.setItem("#initials", initials);
}





///////////////////////////
// Timer Code

var timerEl = document.getElementById('countdown');

function countdown() {
    var timeLeft = 60;

    //
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft + " seconds left";

        if (timeLeft == 0) {
            clearInterval(timeInterval);
            if (qNumber !== 11) {
            clearOptions();
            showScore();
            }
        }
    }, 1000);
}



