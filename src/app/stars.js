
let canvas = document.getElementById('star');
let ctx = canvas.getContext('2d');

export default class Stars{
    constructor(){
        console.log('stars constructor');
        this.width=0;
        this.height=0;
        this.frame=0;
    }

    render(){
        ctx.clearRect(0, 0, 600, 800);
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (0, 0, this.width, this.height);
    }

    update(){
        this.width++;
        this.height++;
    }

    loop(){

        if(this.frame++ % 6 == 0){
        }
        this.update();
        this.render();

        window.requestAnimationFrame(
            this.loop.bind(this)
        )
    }

}