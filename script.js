var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById("next-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var buttonA = document.getElementById("btnA"); 
var buttonB = document.getElementById("btnB");
var buttonC = document.getElementById("btnC");
var buttonD = document.getElementById("btnD");


let shuffledQuestion, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", setNextQuestion);

function startGame() {
    startButton.classList.add("hide");
    shuffledQuestion = question.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
   questionContainerElement.classList.remove("hide");
    setNextQuestion();

    

    countdown;

    // function countdown() {
    //     let timeLeft = 2;

    //     let timeinterval = setInterval(function () {
    //         if (timeLeft > 1) {
    //             timer.textContent = timeLeft + ' Seconds Remaining';
    //             timeLeft--;
    //         } else if (timeLeft === 0) {
    //             timeLeft.textContent = timeLeft + ' Second Remaining';
    //         } else {
    //             timer.textContent = 'Sorry you took to long to answer.';
    //             clearInterval(timeinterval);

    //         }
    //     }, 1000);
    // }

    // countdown();
    
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestion[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answer.forEach(answer => {
        var button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        } else {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestion.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");
    } else {
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

var question = [
    {
        question: "what is a body in html?",
        answer: [
            { text: "the body is in the middle and is where everything is written", correct: true },
            { text: "it is part of the anatomy of a human", correct: false },
            { text: "it is after footer", correct: false },
            { text: "it is at the very top right before header", correct: false },
        ]
    },
    {
        question: "where does the title go?",
        answer: [
            { text: "in the head", correct: true },
            { text: "in the body", correct: false },
            { text: "in the stylesheet", correct: false },
            { text: "in javascript", correct: false }
        ]
    },
    {
        question: "how many dogs can you have?",
        answer: [
            { text: "unlimited", correct: true },
            { text: "1", correct: false },
            { text: "0", correct: false },
            { text: "2", correct: false }
        ]
    }
];
