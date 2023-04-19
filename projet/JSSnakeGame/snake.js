let canvas;
let ctx;

let head;
let apple;
let ball;

let dots;
let apple_x;
let apple_y;

let leftDirection = false;
let rightDirection = true;
let upDirection = false;
let downDirection = false;
let inGame = true;

const DOT_SIZE = 10;
const ALL_DOTS = 900;
const MAX_RAND = 29;
const DELAY = 140;
const C_HEIGHT = 300;
const C_WIDTH = 300;

const LEFT_KEY = 37;
const RIGHT_KEY = 39;
const UP_KEY = 38;
const DOWN_KEY = 40;

let x = new Array(ALL_DOTS);
let y = new Array(ALL_DOTS);

function init() {
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');

    loadImages();
    createSnake();
    locateApple();
    setTimeout('gameCycle()', DELAY);
}

function loadImages() {
    head = new Image();
    head.src = 'head.png';

    ball = new Image();
    ball.src = 'dot.png';

    apple = new Image();
    apple.src = 'apple.png';
}

function createSnake() {
    dots = 3;

    for(let z = 0; z < dots; z++) {
        x[z] = 50 - z * 10;
        y[z] = 50;
    }
}

function locateApple() {
    let r = Math.floor(Math.random() * MAX_RAND)
    apple_x = r * DOT_SIZE;

    r = Math.floor(Math.random() * MAX_RAND)
    apple_y = r * DOT_SIZE;
}

function gameCycle() {
    if(inGame) {
        checkApple();
        checkCollision();
        move();
        doDrawing();
        setTimeout('gameCycle()', DELAY);
    }
}

function checkApple() {
    let score = 0;
    if((x[0] == apple_x) && (y[0] == apple_y)) {
        dots++;
        locateApple();
        score++;
        document.getElementById('score').textContent = score;
        console.log('Score:', score);
    }
}

function checkCollision() {
    for(let z = dots; z > 0; z--) {

        if((z > 4) && (x[0] == x[z]) && (y[0] == y[z])) {
            inGame = false;
        }

    }

    if(y[0] >= C_HEIGHT) {
        inGame = false;
    }

    if(y[0] < 0) {
        inGame = false;
    }

    if(x[0] >= C_WIDTH) {
        inGame = false;
    }

    if(x[0] < 0) {
        inGame = false;
    }

}

let canMove = false;

function move() {
  if (!canMove) {
    return; // Quitte la fonction si le joueur n'a pas encore cliqué sur le bouton "start"
  }

  for (let z = dots; z > 0; z--) {
    x[z] = x[(z - 1)];
    y[z] = y[(z - 1)];
  }

  if (leftDirection) {
    x[0] -= DOT_SIZE;
  }

  if (rightDirection) {
    x[0] += DOT_SIZE;
  }

  if (upDirection) {
    y[0] -= DOT_SIZE;
  }

  if (downDirection) {
    y[0] += DOT_SIZE;
  }
}

function doDrawing() {

    ctx.clearRect(0,0, C_WIDTH, C_HEIGHT);

    if(inGame) {
        ctx.drawImage(apple, apple_x, apple_y);

        for(let z = 0; z < dots; z++) {
            if(z == 0) {
                ctx.drawImage(head, x[z], y[z]);
            } else {
                ctx.drawImage(ball, x[z], y[z]);
            }
        }
    } else {
        gameOver();
    }
}

function gameOver() {
    ctx.fillStyle = 'white';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.font = 'normal bold 18px serif';

    ctx.fillText('Game Over', C_WIDTH/2, C_HEIGHT/2);
}

onkeydown = function(e) {
    let key = e.keyCode;

    if((key == LEFT_KEY) && (!rightDirection)) {
        leftDirection = true;
        upDirection = false;
        downDirection = false;

    }

    if((key == RIGHT_KEY) && (!leftDirection)) {
        rightDirection = true;
        upDirection = false;
        downDirection = false;

    }

    if((key == UP_KEY) && (!downDirection)) {
        upDirection = true;
        leftDirection = false;
        rightDirection = false;

    }

    if((key == DOWN_KEY) && (!upDirection)) {
        downDirection = true;
        leftDirection = false;
        rightDirection = false;

    }
}

const startButton = document.getElementById("startButton");
const hiddenElements = document.getElementById("hidden").children;


for (let element of hiddenElements) {
  element.style.display = "none";
}


startButton.addEventListener("click", () => {

    canMove = true;

  startButton.style.display = "none";

  for (let element of hiddenElements) {
    element.style.display = "block";
  }

});

init();