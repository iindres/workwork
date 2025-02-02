document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "Kas yra 'let'?",
            answers: ["Kintamasis", "Funkcija", "Ciklas", "DOM elementas"],
            correctAnswer: 0
        },
        {
            question: "Ką daro 'document.querySelector'?",
            answers: ["Keičia stilių", "Pasirenka DOM elementą", "Prideda tekstą", "Sukuria funkciją"],
            correctAnswer: 1
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    let timer;
    let timeLeft = 15;

    const startButton = document.getElementById('startButton');
    const quizContainer = document.getElementById('quizContainer');
    const resultContainer = document.getElementById('resultContainer');
    const messageElement = document.createElement('div');
    messageElement.id = 'message';
    document.body.appendChild(messageElement); // Append messageElement to the body

    const timerElement = document.createElement('div');
    timerElement.id = 'timer';
    quizContainer.appendChild(timerElement);

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Sekantis klausimas';
    nextButton.style.display = 'none';
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    });
    quizContainer.appendChild(nextButton);

    const endButton = document.createElement('button');
    endButton.textContent = 'Baigti Quiz';
    endButton.style.display = 'none';
    endButton.addEventListener('click', showResult);
    quizContainer.appendChild(endButton);

    const backButton = document.createElement('button');
    backButton.textContent = 'Grįžti atgal';
    backButton.style.display = 'none';
    backButton.addEventListener('click', restartQuiz);
    quizContainer.appendChild(backButton);

    startButton.addEventListener('click', startQuiz);

    function startQuiz() {
        startButton.style.display = 'none';
        showQuestion();
    }

    function showQuestion() {
        quizContainer.innerHTML = '';
        quizContainer.appendChild(timerElement);
        quizContainer.appendChild(nextButton);
        quizContainer.appendChild(endButton);
        quizContainer.appendChild(backButton);
        nextButton.style.display = 'none';
        endButton.style.display = 'block';
        backButton.style.display = 'block';
        timeLeft = 15;
        startTimer();

        const questionObj = questions[currentQuestionIndex];
        const questionElement = document.createElement('div');
        questionElement.textContent = questionObj.question;
        quizContainer.appendChild(questionElement);

        questionObj.answers.forEach((answer, index) => {
            const answerButton = document.createElement('button');
            answerButton.textContent = answer;
            answerButton.addEventListener('click', () => checkAnswer(index));
            quizContainer.appendChild(answerButton);
        });
    }

    function checkAnswer(selectedIndex) {
        clearInterval(timer);
        const questionObj = questions[currentQuestionIndex];
        if (selectedIndex === questionObj.correctAnswer) {
            score++;
            showMessage('Teisingai!', 'green');
        } else {
            showMessage('Neteisingai!', 'red');
        }

        nextButton.style.display = 'block';
    }

    function showMessage(message, color) {
        messageElement.textContent = message;
        messageElement.style.color = color;
        messageElement.style.display = 'block';
    }

    function showResult() {
        clearInterval(timer);
        quizContainer.style.display = 'none';
        resultContainer.style.display = 'block';
        resultContainer.textContent = `Jūsų rezultatas: ${score} iš ${questions.length}`;
        const restartButton = document.createElement('button');
        restartButton.textContent = 'Pradėti iš naujo';
        restartButton.addEventListener('click', restartQuiz);
        resultContainer.appendChild(restartButton);
    }

    function restartQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        quizContainer.style.display = 'block';
        resultContainer.style.display = 'none';
        startButton.style.display = 'block';
        messageElement.style.display = 'none';
        clearInterval(timer);
    }

    function startTimer() {
        timerElement.textContent = `Laikas: ${timeLeft}s`;
        timer = setInterval(() => {
            timeLeft--;
            timerElement.textContent = `Laikas: ${timeLeft}s`;
            if (timeLeft <= 0) {
                clearInterval(timer);
                showMessage('Laikas baigėsi!', 'red');
                nextButton.style.display = 'block';
            }
        }, 1000);
    }
});