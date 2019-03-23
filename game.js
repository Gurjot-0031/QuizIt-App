// console.log("HELLO FROM THE SIDE");
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
//console.log(choices); 

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [


    {
        question: "BLABALCLBABVLABVEL?",
        choice1: "gjkrlgjr",
        choice2: "gjkrlgjr",
        choice3: "gjkrlgjr",
        choice4: "gjkrlgjr",
        answer: 1  

    },
    {
        question: "rbvwrg?",
        choice1: "gjkrg4glgjr",
        choice2: "gjkrg4lgjr",
        choice3: "gjkrg4g4lgjr",
        choice4: "gjkgrlgjr",
        answer: 4  

    },
    {
        question:"fawrg?",
        choice1: "gjkrg44wgwhglgjr",
        choice2: "gjkrgw4g4wgg4lgjr",
        choice3: "gjkr4whwhg4g4lgjr",
        choice4: "gjkghwhhrlgjr",
        answer: 2  

    }
]

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

function startGame(){
 questionCounter=0;
 score=0;
 availableQuestions = [...questions];
 console.log(availableQuestions);

 getNewQuestion();
}
function getNewQuestion(){
    if (availableQuestions.length===0 || questionCounter>=MAX_QUESTIONS) {
        // go to the end page
        return window.location.assign("/score.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random()*availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(element => {
        const number = element.dataset["number"];
        //console.log(number);
        element.innerText = currentQuestion["choice"+number];
    });
//removing questions that are done
    availableQuestions.splice(questionIndex,1);
    acceptingAnswers = true;
}
//adding event listeneres to the choices
choices.forEach(choice =>{
    choice.addEventListener("click",e=>{
        //console.log(e.target);

        if (!acceptingAnswers) {
            return;
        }
        acceptingAnswers=false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
       
        //console.log(selectedAnswer== currentQuestion.answer);
        //getting correct 
        const classToApply = selectedAnswer==currentQuestion.answer ? 'correct' : 'incorrect';

        selectedChoice.parentElement.classList
        console.log(classToApply);
        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() =>{
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        },1000);
  

    })
});
startGame();
 

