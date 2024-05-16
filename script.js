let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    const currentQuestion = questions[currentQuestionIndex];
    const questionDiv = document.createElement('div');
    questionDiv.innerHTML = `
        <p>${currentQuestionIndex + 1}. ${currentQuestion.question}</p>
        ${currentQuestion.options.map((option, i) => `
            <label>
                <input type="radio" name="question" value="${i}">
                ${option}
            </label>
        `).join('')}
    `;
    questionContainer.appendChild(questionDiv);
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="question"]:checked');
    if (!selectedOption) {
        alert("Please select an answer before proceeding.");
        return;
    }

    const answer = parseInt(selectedOption.value);
    const currentQuestion = questions[currentQuestionIndex];

    if (answer === currentQuestion.answer) {
        score++;
    }

    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function submitTest() {
    showResult();
}

function showResult() {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `Your score is ${score} out of ${questions.length}`;
    
    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = questions.map((question, i) => `
        <div>
            <p>${i + 1}. ${question.question}</p>
            <p class="${i === question.answer ? 'correct' : 'incorrect'}">Correct Answer: ${question.options[question.answer]}</p>
            <p>${question.description}</p>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', loadQuestion);
