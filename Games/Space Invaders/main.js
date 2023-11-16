const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Player{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width; 
        this.height = height;
        this.speed = 5; 
    }

    draw(){
        ctx.fillStyle = "white";
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
    moveLeft(){
        this.x -= this.speed; 
        if(this.x<0){
            this.x = 0;
        }
    }
    moveRight(){
        this.x += this.speed; 
        if(this.x + this.width>canvas.width){
            this.x=canvas.width - this.width;
        }
    }
    fire(){
        const bullet  = new Bullet(this.x + this.width/2-2.5, this.y, 5,10,7);
        bullets.push(bullet);
    }
}

class Bullet {
    constructor(x,y,width,height, speed){
        this.x = x; 
        this.y = y; 
        this.width = width; 
        this.height = height; 
        this.speed = speed; 
    }
    draw(){
        ctx.fillStyle = "white";
        ctx.fillRect(this.x,this.y, this.width, this.height);
    }
    update(){
        this.y -= this.speed; 
    }
}

class Alien{
    constructor(x,y,width, height){
        this.x = x;
        this.y = y;
        this.width = width; 
        this.height = height;
    }
    draw(){
        ctx.fillStyle = "green";
        ctx.fillRect(this.x,this.y,this.width, this.height);
    }
}

const alienRows =4; 
const alienColumns = 10; 
const alienWidth = 40; 
const alienHeight = 30;
const alienPadding = 10; 
let alienDirection = 1; 
let alienMoveDown = false; 

const keyStates = {
    ArrowLeft: false, 
    ArrowRight: false,
    Space: false,
};

const player = new Player(canvas.width/2 -25, canvas.height -50, 50,20);
let bullets = []; 
const aliens = createAliens();

function createAliens(){
    let aliensArray = [];
    for(let row = 0; row<alienRows; row++){
        for(let col = 0; col<alienColumns; col++){
            const x = col*(alienWidth + alienPadding);
            const y = row*(alienHeight + alienPadding);
            aliensArray.push(new Alien(x,y,alienWidth, alienHeight));
        }
    }
    return aliensArray;
}



function update(){

};
function draw(){

};

function gameLoop(){
    if(isGameOver()){
        alert("Game Over");
        return;
    }
    update();
    draw();
requestAnimationFrame(gameLoop);
}

function handleKeyDown(e){
    if(e.code in keyStates){
        keyStates[e.code] = true;
    }
}
function handleKeyUp(e){
    if(e.code in keyStates){
        keyStates[e.code] = false;
    }
}

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

gameLoop();