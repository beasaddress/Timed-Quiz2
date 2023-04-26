//getting all elements from the html file that will need js functionality
var startButton = document.querySelector(".startButton button");
var rulesBox = document.querySelector(".rulesBox");
var quit = rulesBox.querySelector(".buttons .quit");
var restart = rulesBox.querySelector(".buttons .restart");
var quizScreen = document.querySelector(".quizScreen");
const choices = document.querySelector(".choices");
const timeCountdown = quizScreen.querySelector(".timer .timerSeconds");

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
    startTimer(15);
}
let que_count = 0;
let queNumber = 1; //for the question counter..
let countdown;
let timeAllowed = 15;
const nextButton = quizScreen.querySelector(".nextButton");
//creating a click event so that if nextbutton is clicked, it will move up the array of questions/answers starting from 0 index using an if statement
nextButton.onclick = ()=> {
    if(que_count < questions.length -1){
        que_count++;
        queNumber++;
        showQuestions(que_count);
        queCounter(queNumber);//making it so that that question counter will plus one everytime the user clicks next
        clearInterval(countdown);//setting the timer back to 15 seconds if the next button is clicked
        startTimer(timeAllowed);
    }else{
        console.log("No more questions to show");
    }
}

//creating a function that will show the questons after the continue button is clicked
//also going to add the corresponding number to the question from the question array
function showQuestions(index){
    const questionText = document.querySelector(".questionText");  
    
    let que_tag = '<span>'+ questions[index].number + "." + questions[index].title + '</span>';
    let choices_tag = '<div class="choice">'+ questions[index].choices[0] +'<span></span></div>'
                    + '<div class="choice">'+ questions[index].choices[1] +'<span></span></div>'
                    + '<div class="choice">'+ questions[index].choices[2] +'<span></span></div>'
                    + '<div class="choice">'+ questions[index].choices[3] +'<span></span></div>';
    questionText.innerHTML = que_tag;
    choices.innerHTML = choices_tag;
    const choice = choices.querySelectorAll(".choice");
    //using a for loop so that when the user clicks an answer, it registers as the choice selected by user
    for (let i = 0; i < choice.length; i++) {
    choice[i].setAttribute("onclick", "choiceSelected(this)");
    }
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = ' <div class="icon cross"><i class="fas fa-times"></i></div>';
function choiceSelected(answer){
    clearInterval(countdown); //stopping time if user chooses 
    let userChoice = answer.textContent;
    let correctChoice = questions[que_count].answer;
    let allChoices = choices.children.length;
    //using an if statement to see if the user choice is equal to the answer from questions.js
    if(userChoice == correctChoice){
        answer.classList.add("correct");
        //making the correct answer box turn to a differnt color when clicked
        console.log("that's correct!");
        //inserting my google font icons here using the insertAdjacentHTML method when the function decides if the wrong or right answer was selected. 
        answer.insertAdjacentHTML("beforeend", tickIcon);
    }else{
        answer.classList.add("incorrect");
        console.log("that's incorrect.");
        answer.insertAdjacentHTML("beforeend", crossIcon);
        //show user that their answer was wrong by hightlighting the correct answer and adding the tickIcon
        for(let i=0; i < allChoices; i++){
            if(choices.children[i].textContent == correctChoice){
                choices.children[i].setAttribute("class", "choice correct");
                choices.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }
    //disabling the children in .choices from changing colors after the user chooses one choice
    for(let i = 0; i < allChoices; i++) {
        choices.children[i].classList.add("disabled");
        }

    }
//creating a function that will start counting down from 15 when the nxt button is clicked
function startTimer(time){
    countdown = setInterval(timer, 1000);
    function timer(){
        timeCountdown.textContent = time;
        time--;
    }
}
//adding a function that will tell the user what question they are one
function queCounter(index){
const questionCounter =  quizScreen.querySelector(".questionsLeft");
let quesCountTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p>Questions</span>';
questionCounter.innerHTML = quesCountTag;
}