/* eslint-disable import/extensions */
import Rect from './rect';

class Paddle extends Rect {

  canvas:any

  constructor(x:number, y:number, width:number, height:number, canvas:any){
    super(x, y, width, height)
    this.canvas = canvas
  }

  drawPaddle(context:any) {
    context.beginPath();
    context.rect(this.x, this.width - this.x, this.width, this.height);
    context.fillStyle = '#0095DD';
    context.fill();
    context.closePath();
  }

  updatePaddle(context:any) {
    this.x = (this.canvas.width - this.width) / 2;
    this.drawPaddle(context);
  }
}

export default Paddle;
