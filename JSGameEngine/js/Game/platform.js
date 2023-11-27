import GameObject from "gameobject.js";
import Renderer from "renderer.js";
import Physics from "physics.js";

class Platform extends GameObject{
    constructor(x,y,width,height,color = "gray"){
        super(x,y);
        this.addComponent(new Renderer(color, width, height));
        this.addComponent(new Physics({x:0,y:0}, {x:0, y:0}, {x:0, y:0}));

        this.tag = "platform"
    }
}
export default Platform;