import DataBus from './databus';
import Background from '../component/background';

let canvas = document.getElementById('star');
let ctx = canvas.getContext('2d');
let databus = new DataBus();
let background = new Background(ctx);

let change_flag = false;

export default class Game{

    constructor(){
        canvas.addEventListener("mousedown",(ev)=>{
            console.log('mousedown');
            while(change_flag){
                if(change_flag)
                    background.speedUp();
                else
                    break;
            }
        });
        canvas.addEventListener("mouseup",(ev)=>{
            console.log('mouseup');
            while(change_flag){
                if(!change_flag)
                    background.speedDown();
                else
                    break;
            }
        });
    };

    render(){
        ctx.clearRect(0, 0, 600, 800);
        // ctx.fillStyle = "#24292e";
        // ctx.fillRect (0, 0, 600, 800);
        background.render();
        databus.stars.map(star => {
            this.ctx.fillStyle = "rgb(200, 0, 0)";
            this.ctx.fillRect(star.pos_x,star.pos_y, star.radius, star.radius);
        })
    }

    update(){
        // databus.generateStar();
        background.update();
    }

    loop(){

        this.update();

        this.render();

        window.requestAnimationFrame(
            this.loop.bind(this)
        )
    }

}