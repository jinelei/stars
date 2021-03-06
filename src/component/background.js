import ConstPool from '../const_pool';

export default class Background{

    constructor(ctx){
        this.ctx = ctx;
        this.img = new Image();
        let img_src = require('../images/bg.jpg')
        this.img.src = img_src;
        this.offset = 0;
        this.speed = 1;
    }

    speedUp(){
        this.speed++;
    }

    speedDown(){
        this.speed = this.speed > 1 ? this.speed - 1 : 0;
    }

    update(){
        this.offset = (this.offset + this.speed) %ConstPool.getInstance().screen_height;
    }

    render(){
        // 绘制上半张
        this.ctx.drawImage(this.img,
            0,ConstPool.getInstance().screen_height-this.offset, 
            ConstPool.getInstance().screen_width,this.offset,
            0,0, 
            ConstPool.getInstance().screen_width,this.offset);
        // 绘制下半张
        this.ctx.drawImage(this.img,
            0,0,
            ConstPool.getInstance().screen_width,ConstPool.getInstance().screen_height-this.offset,
            0,this.offset,
            ConstPool.getInstance().screen_width,ConstPool.getInstance().screen_height-this.offset);
    }

}