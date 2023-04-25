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
    showQuestions(que_count);
    queCounter(1);
}
let que_count = 0;
let queNumber = 1;
const nextButton = quizScreen.querySelector(".nextButton");
//creating a click event so that if nextbutton is clicked, it will move up the array of questions/answers starting from 0 index using an if statement
nextButton.onclick = ()=> {
    if(que_count < questions.length -1){
        que_count++;
        queNumber++;
        showQuestions(que_count);
        queCounter(queNumber);
    }else{
        console.log("No more questions to show");
    }
}

//creating a function that will show the questons after the continue button is clicked
//also going to add the corresponding number to the question from the question array
function showQuestions(index){
    const questionText = document.querySelector(".questionText");  
    const choices = document.querySelector(".choices");
    let que_tag = '<span>'+ questions[index].number + "." + questions[index].title + '</span>';
    let choices_tag = '<div class="choice">'+ questions[index].choices[0] +'<span></span></div>'
                    + '<div class="choice">'+ questions[index].choices[1] +'<span></span></div>'
                    + '<div class="choice">'+ questions[index].choices[2] +'<span></span></div>'
                    + '<div class="choice">'+ questions[index].choices[3] +'<span></span></div>';
    questionText.innerHTML = que_tag;
    choices.innerHTML = choices_tag;
}

function queCounter() {
const questionCounter =  quizScreen.querySelector(".questionsLeft");
let quesCountTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p>Questions</span>';
questionCounter.innerHTML = quesCountTag;
}