import DataBus from './databus';

let canvas = document.getElementById('star');
let ctx = canvas.getContext('2d');
let databus = new DataBus();

export default class Stars{
    constructor(){
        this.frame = 0;
    };

    render(){
        ctx.clearRect(0, 0, 600, 800);
        ctx.fillStyle = "#24292e";
        ctx.fillRect (0, 0, 600, 800);
        databus.stars.map(star => {
            ctx.fillStyle = "rgb(200, 0, 0)";
            ctx.fillRect(star.pos_x,star.pos_y, star.radius, star.radius);
        })
    }

    update(){
        databus.generateStar();
    }

    loop(){

        if(this.frame++ % 60 == 0){
            this.update();
        }

        this.render();

        window.requestAnimationFrame(
            this.loop.bind(this)
        )
    }

}