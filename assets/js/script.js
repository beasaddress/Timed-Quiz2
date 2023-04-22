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
    showQuestions(2);
}
let que_count = 0;
//creating a function that will show the questons after the continue button is clicked
function showQuestions(index){
    var questionText = document.getElementByClass(".questionText");  
    var choices = document.querySelector(".choices");
    let que_tag = '<span>' + questions[index].title + '</span>';
    let choices_tag = '<div class="choice">'+ questions[index].choices[0] +'<span></span></div>'
                    + '<div class="choice">'+ questions[index].choices[1] +'<span></span></div>'
                    + '<div class="choice">'+ questions[index].choices[2] +'<span></span></div>'
                    + '<div class="choice">'+ questions[index].choices[3] +'<span></span></div>';
    questionText.innerHTML = que_tag;
    choices.innerHTML = choices_tag;
}