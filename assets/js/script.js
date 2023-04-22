//getting all elements from the html file that will need js functionality
var startButton = document.querySelector(".startButton button");
var rulesBox = document.querySelector(".rulesBox");
var quit = rulesBox.querySelector(".buttons .quit");
var restart = rulesBox.querySelector(".buttons .restart");
var quizScreen = document.querySelector(".quizScreen");

//if user clicks start quiz
startButton.onclick = ()=>{
    rulesBox.classList.add("activeRules");
}

quit.onclick = ()=>{
    rulesBox.classList.remove("activeRules"); //hides rules when quit is clicked
}

restart.onclick = ()=>{
    rulesBox.classList.remove("activeRules");
    quizScreen.classList.add("activeQuiz");
}
let que_count = 0;
//using the arrays to switch out questions
function showQuestions(){
    var questionText = document.querySelecter(".questionsText");
}