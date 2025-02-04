const grid = document.querySelector('.grid');
const foodLeftDisplay = document.getElementById('food-left'); // Update to food-left
const livesDisplay = document.getElementById('lives');
const levelDisplay = document.getElementById('level');
const restartButton = document.getElementById('restart');
const startButton = document.getElementById('start'); // Add start button
let foodLeft = 0; // Change score to foodLeft
let level = 1;
let lives = 5;
let gameStarted = false; // Add a flag to check if the game has started

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
        1, 2, 2, 2, 0, 0, 2, 2, 2, 1,
        1, 2, 1, 1, 0, 1, 1, 1, 2, 1,
        1, 0, 1, 2, 0, 2, 2, 1, 2, 1,
        1, 2, 2, 2, 0, 1, 2, 1, 2, 1,
        1, 0, 1, 2, 1, 1, 2, 1, 2, 1,
        1, 2, 2, 2, 0, 2, 2, 2, 2, 1,
        1, 2, 1, 2, 1, 2, 2, 1, 2, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ],
    // Level 3: Medium
    [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 2, 2, 1, 0, 0, 0, 2, 2, 1,
        1, 1, 2, 1, 0, 1, 2, 1, 2, 1,
        1, 2, 2, 1, 0, 1, 2, 1, 2, 1,
        1, 0, 0, 2, 2, 1, 0, 2, 2, 1,
        1, 2, 1, 1, 1, 1, 0, 1, 2, 1,
        1, 2, 1, 2, 2, 2, 0, 1, 1, 1,
        1, 2, 2, 2, 1, 1, 0, 2, 2, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]
];

let layout = layouts[level - 1];
const squares = [];

// Create the grid and render it
function createBoard() {
    grid.innerHTML = '';
    squares.length = 0;
    foodLeft = 0; // Reset foodLeft
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
            foodLeft++; // Count the food
        }
    }
    foodLeftDisplay.textContent = foodLeft; // Display the initial food count
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
    new Ghost('blinky', 11, 400), // Slower speed
    new Ghost('pinky', 13, 500),  // Slower speed
    new Ghost('inky', 16, 450),   // Slower speed
    new Ghost('clyde', 18, 550)   // Slower speed
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
    if (!gameStarted) return; // Prevent ghosts from moving if the game hasn't started
    ghosts.forEach(ghost => moveGhost(ghost));
}

function moveGhost(ghost) {
    const directions = [-1, +1, -10, +10];
    let direction = directions[Math.floor(Math.random() * directions.length)];

    ghost.timerId = setInterval(function () {
        if (!gameStarted) return; // Prevent ghosts from moving if the game hasn't started

        // If the next square does NOT contain a wall and does NOT contain a ghost
        if (!squares[ghost.currentIndex + direction].classList.contains('wall') &&
            !squares[ghost.currentIndex + direction].classList.contains('ghost')) {
            // Remove ghost class
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost');
            // Move into that space
            ghost.currentIndex += direction;
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
        } else {
            // Change direction immediately
            direction = directions[Math.floor(Math.random() * directions.length)];
        }

        // Check for game over
        if (squares[ghost.currentIndex].classList.contains('pacman')) {
            loseLife();
        }
    }, ghost.speed);
}

// Move Pac-Man
function movePacman(e) {
    if (!gameStarted) {
        alert('Click start to begin the game!');
        return;
    }

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
        foodLeft--; // Decrease foodLeft
        foodLeftDisplay.textContent = foodLeft; // Update the display
    }

    // Check for game over
    if (squares[pacmanCurrentIndex].classList.contains('ghost')) {
        loseLife();
    }

    // Check for level completion
    if (foodLeft === 0) {
        if (level < layouts.length) {
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
    foodLeft = 0; // Reset foodLeft
    foodLeftDisplay.textContent = foodLeft; // Update the display
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
    // Add ghost dancing logic here
    // Example: animate ghosts in a loop
    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add('dancing');
    });
}

restartButton.addEventListener('click', restartGame);

function restartGame() {
    location.reload(); // Refresh the page
}

// Initial setup
function initialSetup() {
    createBoard();
    squares[pacmanCurrentIndex].classList.add('pacman'); // Ensure Pac-Man is added at the start
    drawGhosts();
    document.addEventListener('keydown', movePacman);
}

// Call initial setup on page load
initialSetup();

function showCongratulations() {
    const congratsMessage = document.createElement('div');
    congratsMessage.id = 'congratulations';
    congratsMessage.textContent = 'CONGRATULATIONS!!!';
    document.body.appendChild(congratsMessage);
    startConfetti();
}

function startConfetti() {
    const duration = 5 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// Initial setup
function initialSetup() {
    createBoard();
    squares[pacmanCurrentIndex].classList.add('pacman'); // Ensure Pac-Man is added at the start
    drawGhosts();
    document.addEventListener('keydown', movePacman);
}

// Start game function
function startGame() {
    startButton.style.display = 'none';
    gameStarted = true; // Set the flag to true when the game starts
    moveGhosts(); // Start moving the ghosts
}

startButton.addEventListener('click', startGame);

restartButton.addEventListener('click', restartGame);

// Touchscreen controls
document.getElementById('up').addEventListener('click', () => movePacman({ key: 'ArrowUp' }));
document.getElementById('down').addEventListener('click', () => movePacman({ key: 'ArrowDown' }));
document.getElementById('left').addEventListener('click', () => movePacman({ key: 'ArrowLeft' }));
document.getElementById('right').addEventListener('click', () => movePacman({ key: 'ArrowRight' }));

let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
}

function handleTouchMove(e) {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
}

function handleTouchEnd() {
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
            movePacman({ key: 'ArrowRight' });
        } else {
            movePacman({ key: 'ArrowLeft' });
        }
    } else {
        if (deltaY > 0) {
            movePacman({ key: 'ArrowDown' });
        } else {
            movePacman({ key: 'ArrowUp' });
        }
    }
}

// Add touch event listeners
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
document.addEventListener('touchend', handleTouchEnd, false);