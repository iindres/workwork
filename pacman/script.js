const grid = document.querySelector('.grid');
const scoreDisplay = document.getElementById('score');
const livesDisplay = document.getElementById('lives');
const levelDisplay = document.getElementById('level');
const restartButton = document.getElementById('restart');
let score = 0;
let level = 1;
let lives = 5;

// Define multiple layouts for different levels
const layouts = [
    // Level 1: Super Easy
    [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 2, 2, 2, 1, 2, 2, 2, 2, 1,
        1, 2, 1, 2, 1, 2, 1, 1, 2, 1,
        1, 2, 1, 2, 2, 2, 0, 2, 2, 1,
        1, 2, 1, 1, 1, 0, 1, 1, 2, 1,
        1, 2, 0, 0, 0, 0, 0, 0, 2, 1,
        1, 2, 1, 1, 0, 1, 0, 0, 2, 1,
        1, 2, 2, 0, 2, 1, 1, 2, 2, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ],
    // Level 2: Easy
    [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 2, 2, 2, 1, 2, 2, 2, 2, 1,
        1, 2, 1, 2, 1, 2, 1, 1, 2, 1,
        1, 2, 1, 2, 2, 2, 0, 2, 2, 1,
        1, 2, 1, 1, 1, 0, 1, 1, 2, 1,
        1, 2, 0, 0, 0, 0, 0, 0, 2, 1,
        1, 2, 1, 1, 0, 1, 0, 0, 2, 1,
        1, 2, 2, 0, 2, 1, 1, 2, 2, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ],
    // Level 3: Medium
    [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 2, 2, 2, 1, 2, 2, 2, 2, 1,
        1, 2, 1, 2, 1, 2, 1, 1, 2, 1,
        1, 2, 1, 2, 2, 2, 0, 2, 2, 1,
        1, 2, 1, 1, 1, 0, 1, 1, 2, 1,
        1, 2, 0, 0, 0, 0, 0, 0, 2, 1,
        1, 2, 1, 1, 0, 1, 0, 0, 2, 1,
        1, 2, 2, 0, 2, 1, 1, 2, 2, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]
];

let layout = layouts[level - 1];
const squares = [];

// Create the grid and render it
function createBoard() {
    grid.innerHTML = '';
    squares.length = 0;
    for (let i = 0; i < layout.length; i++) {
        const square = document.createElement('div');
        grid.appendChild(square);
        squares.push(square);

        // Add layout to the board
        if (layout[i] === 0) {
            square.classList.add('empty');
        } else if (layout[i] === 1) {
            square.classList.add('wall');
        } else if (layout[i] === 2) {
            square.classList.add('food');
        }
    }
}
createBoard();

// Starting position of Pac-Man
let pacmanCurrentIndex = 40;
squares[pacmanCurrentIndex].classList.add('pacman');

// Ghosts
class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className;
        this.startIndex = startIndex;
        this.speed = speed;
        this.currentIndex = startIndex;
        this.timerId = NaN;
    }
}

let ghosts = [
    new Ghost('blinky', 11, 250),
    new Ghost('pinky', 13, 400),
    new Ghost('inky', 16, 300),
    new Ghost('clyde', 18, 500)
];

// Draw ghosts onto the grid
function drawGhosts() {
    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add(ghost.className);
        squares[ghost.currentIndex].classList.add('ghost');
    });
}
drawGhosts();

// Move ghosts
function moveGhosts() {
    ghosts.forEach(ghost => moveGhost(ghost));
}

function moveGhost(ghost) {
    const directions = [-1, +1, -10, +10];
    let direction = directions[Math.floor(Math.random() * directions.length)];

    ghost.timerId = setInterval(function () {
        // If the next square does NOT contain a wall and does NOT contain a ghost
        if (!squares[ghost.currentIndex + direction].classList.contains('wall') &&
            !squares[ghost.currentIndex + direction].classList.contains('ghost')) {
            // Remove ghost class
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost');
            // Move into that space
            ghost.currentIndex += direction;
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
        } else {
            // Change direction
            direction = directions[Math.floor(Math.random() * directions.length)];
        }

        // Check for game over
        if (squares[ghost.currentIndex].classList.contains('pacman')) {
            loseLife();
        }
    }, ghost.speed);
}
moveGhosts();

// Move Pac-Man
function movePacman(e) {
    squares[pacmanCurrentIndex].classList.remove('pacman');

    switch (e.key) {
        case 'ArrowUp':
        case 'w':
            if (pacmanCurrentIndex - 10 >= 0 && !squares[pacmanCurrentIndex - 10].classList.contains('wall')) {
                pacmanCurrentIndex -= 10;
            }
            break;
        case 'ArrowDown':
        case 's':
            if (pacmanCurrentIndex + 10 < layout.length && !squares[pacmanCurrentIndex + 10].classList.contains('wall')) {
                pacmanCurrentIndex += 10;
            }
            break;
        case 'ArrowLeft':
        case 'a':
            if (pacmanCurrentIndex % 10 !== 0 && !squares[pacmanCurrentIndex - 1].classList.contains('wall')) {
                pacmanCurrentIndex -= 1;
            }
            break;
        case 'ArrowRight':
        case 'd':
            if (pacmanCurrentIndex % 10 < 9 && !squares[pacmanCurrentIndex + 1].classList.contains('wall')) {
                pacmanCurrentIndex += 1;
            }
            break;
    }

    squares[pacmanCurrentIndex].classList.add('pacman');

    // Pac-Man eats food
    if (squares[pacmanCurrentIndex].classList.contains('food')) {
        squares[pacmanCurrentIndex].classList.remove('food');
        score++;
        scoreDisplay.textContent = score;
    }

    // Check for game over
    if (squares[pacmanCurrentIndex].classList.contains('ghost')) {
        loseLife();
    }

    // Check for level completion
    if (!squares.some(square => square.classList.contains('food'))) {
        if (level < 3) {
            nextLevel();
        } else {
            gameComplete();
        }
    }
}

document.addEventListener('keydown', movePacman);

function loseLife() {
    lives--;
    livesDisplay.textContent = lives;
    if (lives === 0) {
        gameOver();
    } else {
        resetPacman();
    }
}

function resetPacman() {
    squares[pacmanCurrentIndex].classList.remove('pacman');
    pacmanCurrentIndex = 40;
    squares[pacmanCurrentIndex].classList.add('pacman');
}

function gameOver() {
    ghosts.forEach(ghost => clearInterval(ghost.timerId));
    document.removeEventListener('keydown', movePacman);
    alert('Game Over!');
}

function nextLevel() {
    level++;
    score = 0;
    scoreDisplay.textContent = score;
    levelDisplay.textContent = `Level ${level}`;
    ghosts.forEach(ghost => clearInterval(ghost.timerId)); // Clear existing ghost intervals
    layout = layouts[level - 1];
    createBoard();
    pacmanCurrentIndex = 40;
    squares[pacmanCurrentIndex].classList.add('pacman');
    drawGhosts();
    moveGhosts();
}

function gameComplete() {
    ghosts.forEach(ghost => clearInterval(ghost.timerId));
    document.removeEventListener('keydown', movePacman);
    showCongratulations();
    // Add confetti and ghost dancing logic here
    // Example: animate ghosts in a loop
    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add('dancing');
    });
}

restartButton.addEventListener('click', restartGame);

function restartGame() {
    level = 1;
    score = 0;
    lives = 5;
    scoreDisplay.textContent = score;
    livesDisplay.textContent = lives;
    levelDisplay.textContent = `Level ${level}`;
    ghosts.forEach(ghost => clearInterval(ghost.timerId)); // Clear existing ghost intervals
    layout = layouts[level - 1];
    createBoard();
    pacmanCurrentIndex = 40;
    squares[pacmanCurrentIndex].classList.add('pacman');
    drawGhosts();
    moveGhosts();
    document.addEventListener('keydown', movePacman);
    hideCongratulations();
}

function showCongratulations() {
    const congratsMessage = document.createElement('div');
    congratsMessage.id = 'congratulations';
    congratsMessage.textContent = 'CONGRATULATIONS!!!';
    document.body.appendChild(congratsMessage);
    confetti();
}

function hideCongratulations() {
    const congratsMessage = document.getElementById('congratulations');
    if (congratsMessage) {
        congratsMessage.remove();
    }
}

function confetti() {
    const duration = 5 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}