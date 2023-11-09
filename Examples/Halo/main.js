const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const gameArea = document.getElementById("game-container");

const playerWidth = player.offsetWidth; 
const playerHeight = player.offsetHeight;
const gameWidth = gameArea.offsetWidth;
const gameHeight = gameArea.offsetWidth;

let playerX = 0;
let playerY = 75;

let enemyX = Math.random() * (gameWidth - playerWidth);
let enemyY = Math.random() * (gameHeight - playerHeight);

let gameOver = false; 
let keys = []

function gameLoop(){
    if (!gameOver){
        requestAnimationFrame(gameLoop);
    }else{
        endGame();
    }
}
requestAnimationFrame(gameLoop);