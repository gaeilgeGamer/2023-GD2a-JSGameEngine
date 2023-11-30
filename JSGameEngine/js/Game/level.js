import Game from "../GameEngine/game";
import Player from "./player";
import Enemy from "./enemy";
import PlayerUI from "./playerUI";
import Platform from "./platform";
import Collectible from "./collectible";

class Level extends Game{
    constructor(canvasId){
        super(canvasId);

        const player = new Player(this.canvas.width/2-25,this.canvas.clientHeight/2-25);
        this.addGameObject(player);
        this.addGameObject(new PlayerUI(10,10));

        this.camera.target = player;

        const platformWidth = 200;
        const gap = 100;

        const platforms = [
            new Platform(0, this.canvas.height -20, platformWidth, 20),
            new Platform(platformWidth+gap, this.canvas.height -20, platformWidth, 20),
            new Platform(2*(platformWidth+gap), this.canvas.height -20, platformWidth, 20),
            new Platform(3*(platformWidth+gap), this.canvas.height -20, platformWidth, 20),
            new Platform(4*(platformWidth+gap), this.canvas.height -20, platformWidth, 20),
        ]
        for(const platform of platforms){
            this.addGameObject(platform);
        }

        this.addGameObject(new Enemy(50, this.canvas.height -90));
        this.addGameObject(new Enemy(platformWidth +gap +50, this.canvas.height -90));
        this.addGameObject(new Enemy(2*(platformWidth + gap)+50, this.canvas.height -90));

        this.addGameObject(new Collectible(250, this.canvas.height - 100,20,20));
        this.addGameObject(new Collectible(450, this.canvas.height - 100,20,20));
        this.addGameObject(new Collectible(650, this.canvas.height - 100,20,20));

    }
}
export default Level;