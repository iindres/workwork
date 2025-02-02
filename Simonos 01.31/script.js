document.addEventListener('DOMContentLoaded', () => {
    let randomNumber;
    let attempts = 0;
    const maxAttempts = 10;

    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const newGameButton = document.getElementById('newGameButton');
    const messageArea = document.getElementById('messageArea');
    const attemptsArea = document.getElementById('attemptsArea');
    const resultImage = document.getElementById('resultImage');
    const maxNumberSelect = document.getElementById('maxNumber');

    function startNewGame() {
        const maxNumber = Number(maxNumberSelect.value);
        randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        attempts = 0;
        messageArea.textContent = '';
        attemptsArea.textContent = '';
        resultImage.style.display = 'none';
        guessInput.value = '';
        guessInput.disabled = false;
        guessButton.disabled = false;
    }

    function isNumeric(value) {
        return /^\d+$/.test(value);
    }

    function checkGuess() {
        const userGuess = guessInput.value;
        if (!isNumeric(userGuess)) {
            messageArea.textContent = 'Turite įvesti skaičių!';
            return;
        }

        const guess = Number(userGuess);
        attempts++;
        attemptsArea.textContent = `Bandymai: ${attempts}`;

        if (guess === randomNumber) {
            messageArea.textContent = 'Sveikinimai! Jūs atspėjote skaičių!';
            resultImage.style.display = 'block';
            guessInput.disabled = true;
            guessButton.disabled = true;
        } else if (guess < randomNumber) {
            messageArea.textContent = 'Skaičius yra didesnis!';
        } else {
            messageArea.textContent = 'Skaičius yra mažesnis!';
        }

        if (attempts >= maxAttempts && guess !== randomNumber) {
            messageArea.textContent = `Pralaimėjote! Buvo skaičius ${randomNumber}.`;
            guessInput.disabled = true;
            guessButton.disabled = true;
        }
    }

    guessButton.addEventListener('click', checkGuess);
    newGameButton.addEventListener('click', startNewGame);
    maxNumberSelect.addEventListener('change', startNewGame);

    startNewGame();
});