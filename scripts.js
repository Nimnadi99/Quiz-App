const questions = [
    {
        question: "What is the capital of Australia?",
        answers: [
            {text: "Sydney", correct: false},
            {text:"Canberra", correct: true},
            {text:"Melbourne", correct: false},
            {text:"Brisbane", correct: false}
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            {text: "Venus", correct: false},
            {text: "Mars", correct: true},
            {text: "Jupiter", correct: false},
            {text: "Saturn",correct: false}
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            {text: "Elephant", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Giraffe", correct: false},
            {text: "Gorilla", correct: false}
        ]
    },
    {
        question: "In which year did the United States declare its independence?",
        answers: [
            {text: "1776", correct:true},
            {text:"1789", correct: false},
            {text: "1801", correct: false},
            {text: "1850", correct: false}
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            {text: "William Wordsworth", correct:false},
            {text: "William Shakespeare", correct: true},
            {text: "Jane Austen", correct: false},
            {text: "Charles Dickens", correct: false}
        ]
    },
    {
        question: "Which element has the chemical symbol 'Hg'?",
        answers: [
            {text: "Hydrogen", correct: false},
            {text: "Helium", correct: false},
            {text: "Mercury", correct: true},
            {text: "Magnesium", correct: false}
        ]
        
    },
    {
        question: "What is the currency of Japan?",
        answers: [
            {text: "Yen", correct:true},
            {text:"Won", correct: false},
            {text:"Ringgit", correct: false},
            {text: "Baht", correct: false}
        ]
    },
    {
        question: "Who is known as the 'Father of Computer Science'?",
        answers: [
            {text: "Alan Turing", correct:true},
            {text: "Bill Gates", correct:false},
            {text: "Steve Jobs", correct:false},
            {text: "Mark Zuckerberg", correct:false}
        ]
    },
    {
        question:"Which ocean is the largest by area?",
        answers: [
            {text:"Atlantic Ocean", correct:false},
            {text:"Indian Ocean", correct:false},
            {text:"Southern Ocean", correct:false},
            {text:"Pacific Ocean", correct:true}
        ]
    },
    {
        question:"What is the chemical symbol for gold?",
        answers: [
            {text:"Go", correct:false},
            {text:"Au", correct:true},
            {text:"Ag", correct:false},
            {text:"Ge", correct:false}
        ]
    }
]
const questionTask = document.querySelector(".Question");
const answerButtons = document.getElementById("answerList");
const nextButton = document.getElementById("next");
const message = document.querySelector(".message");
let currentQuestionIndex = 0;
let score = 0;

//Need display questions with answers
function questionAnswersDisplay(){
    let currentQuestion = questions[currentQuestionIndex];
    questionTask.innerHTML =currentQuestion.question;

    let answersSet = currentQuestion.answers.forEach(answer =>{
        let answerBtn = document.createElement("button");
        answerBtn.innerHTML = answer.text;
        answerBtn.classList.add("btn");
        answerButtons.appendChild(answerBtn);

    
        answerBtn.addEventListener("click", ()=>{
                    if(answer.correct){ //true
                        answerBtn.style.background = "Green";
                        answerBtn.style.color = "White";
                        message.style.display = "block";
                        message.innerHTML = "You are correct!!!!"
                        message.style.color = "Green";
                        score = score + 10;
                    }else{
                        answerBtn.style.background = "Red";
                        answerBtn.style.color = "White";
                        message.style.display = "block";
                        message.innerHTML = "You are wrong!!!!"
                        message.style.color = "Red";
                    }
                     // Disable buttons after selection
                     document.querySelectorAll(".btn").forEach(button => {
                        button.disabled = true;
                    });
                    nextButton.style.display = "block";
                    currentQuestionIndex++;
        });
    });
    
    
}
questionAnswersDisplay();

function moveNextQuestion() {
    resetButton();
    if (currentQuestionIndex < questions.length) {
        questionAnswersDisplay();
    } else {
        // If no more questions, show final score or end game
        questionTask.textContent = "Quiz Finished! Your score: " + score;
        nextButton.style.display = "none";
        const restartButton = document.createElement("button");
        restartButton.innerHTML = "RESET";
        restartButton.classList.add("nextCLass");
        answerButtons.appendChild(restartButton);
        restartButton.onclick = restartGame;

    }
}

function resetButton() {
    questionTask.innerHTML = "";
    answerButtons.innerHTML = "";
    nextButton.style.display = "none";
    message.style.display = "none";
}
nextButton.addEventListener("click", moveNextQuestion);

function restartGame(){
    currentQuestionIndex = 0;
    score = 0;
    resetButton();
    questionAnswersDisplay();
}