const questions = [
    {
        question: "Qual é o nome da banda liderada por Mick Jagger?",
        options: ["The Beatles", "The Rolling Stones", "Led Zeppelin", "Queen"],
        correctAnswer: 1
    },
    {
        question: "Qual álbum contém a música 'Bohemian Rhapsody'?",
        options: ["Dark Side of the Moon", "Abbey Road", "A Night at the Opera", "Thriller"],
        correctAnswer: 2
    },
    // Adicione mais perguntas conforme necessário
];

let currentQuestion = 0;
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

function loadQuestion() {
    const currentQuizData = questions[currentQuestion];
    questionText.textContent = currentQuizData.question;

    // Limpar as opções anteriores
    optionsContainer.innerHTML = '';

    // Adicionar opções dinamicamente
    for (let i = 0; i < currentQuizData.options.length; i++) {
        const optionElement = document.createElement('button');
        optionElement.textContent = currentQuizData.options[i];
        optionElement.classList.add('option-btn');
        optionElement.addEventListener('click', () => checkAnswer(i));
        optionsContainer.appendChild(optionElement);
    }
}

function checkAnswer(userAnswer) {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    
    if (userAnswer === correctAnswer) {
        alert('Resposta correta!');
    } else {
        alert('Resposta incorreta. A resposta correta é: ' + questions[currentQuestion].options[correctAnswer]);
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert('Quiz concluído. Parabéns!');
        resetQuiz();
    }
}

function resetQuiz() {
    currentQuestion = 0;
    loadQuestion();
}

function nextQuestion() {
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert('Quiz concluído. Parabéns!');
        resetQuiz();
    }
}

// Inicializar o quiz
loadQuestion();
