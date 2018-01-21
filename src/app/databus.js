import Star from "../component/star";

let instance

let screen_width = Symbol('screen_width');
let screen_height = Symbol('screen_height');

export default class DataBus{

    constructor(){
        if(instance)
            return instance;
        instance = this;
        this.reset();
        this[screen_height] = 800;
        this[screen_width] = 600;
    }

    reset(){
        this.stars = [];
    }

    generateStar(){
        let pos_x = Math.random() * this[screen_width];
        let pos_y = Math.random() * this[screen_height];
        this.stars.push(new Star(pos_x, pos_y, 2, true));
        console.log('generate star');
    }

}