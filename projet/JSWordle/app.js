import {wordlist} from './words.js';

let gameState = {
    gameGrid: Array(6).fill().map(()=> Array(5).fill('')),
    currentRow: 0,
    currentCol: 0,
    hiddenWord: wordlist[Math.floor(Math.random()* wordlist.length)],
}

function init() {
    const gameContainer = document.getElementById('gameContainer');
    makeGameGrid(gameContainer);
    console.log(gameState.hiddenWord);
    keyboardpresses();
}

function makeGameGrid(gameContainer) {
    const gameGrid = document.createElement('div');
    gameGrid.className = 'gameGrid';

    for(let r=0; r< 6; r++) {
        for(let c = 0; c < 5; c++) {
            makeBox(gameGrid, r, c);
        }
    }
    gameContainer.appendChild(gameGrid)
}

function makeBox(gameGrid, row, col, letter = '') {
    const charBox = document.createElement('div');
    charBox.className = 'charBox';
    charBox.id = 'charBox.' + row + ' ' + col;
    charBox.textContent = letter;
    gameGrid.appendChild(charBox);
    return charBox;
}

function keyboardpresses() {
    document.body.onkeydown = (e) => {
        let key = e.key;
        // console.log(key);
        if(key === 'Enter') {
            let word = getEnteredWord();
            if(isWordValide(word)) {
                checkLetters();
                checkTurn(word);
                gameState.currentRow++;
                gameState.currentCol = 0;
            } else {
                alert('Le mot n\'est pas valide!');
            }
        }

        if(key === 'Backspace') {
            deleteLetter();
        }

        if(isAlpha(key)) {
            addLetter(key)
        }

        updateGameGrid();
    }
}

function updateGameGrid() {
    for(let r = 0; r < gameState.gameGrid.length; r++) {
        for(let c = 0; c < gameState.gameGrid[r].length; c++) {
            let charBox = document.getElementById('charBox.' + r + ' ' + c);
            charBox.textContent = gameState.gameGrid[r][c];
        }
    }
}

function isAlpha(key) {
    return key.length === 1 && key.match(/[a-z]/i);
}

function addLetter(key) {
    if(gameState.currentCol === 5) return;
    gameState.gameGrid[gameState.currentRow][gameState.currentCol] = key;
    gameState.currentCol++;
}

function deleteLetter() {
    if(gameState.currentCol === 0)  return;
    gameState.gameGrid[gameState.currentRow][gameState.currentCol-1] = '';
    gameState.currentCol--;
}

function isWordValide(enteredWord) {
    return wordlist.includes(enteredWord);
}

function checkLetters() {
    for(let i = 0; i< 5; i++) {
        let charBox = document.getElementById('charBox.' + gameState.currentRow + ' ' + i);
        let letter = charBox.textContent;

        if(letter === gameState.hiddenWord[i]) {
            charBox.classList.add('correct');
        } else if(gameState.hiddenWord.includes(letter)) {
            charBox.classList.add('contains');
        } else {
            charBox.classList.add('empty');
        }
    }
}

function checkTurn(enteredWord) {
    let won = gameState.hiddenWord === enteredWord;
    let gameOver = gameState.currentRow === 5;

    if(won) {
        alert('yeah');
        const gameContainer = document.getElementById('gameContainer');
        location.reload(); // reload the page
    } else if(gameOver) {
        alert('Tu n\'as pas trouver le bon mot. Le bon mot étais: '+ gameState.hiddenWord);
        location.reload(); // reload the page
    }
}

function getEnteredWord() {
    return gameState.gameGrid[gameState.currentRow].reduce((accumulator, current) => accumulator+current);
}
 
init();