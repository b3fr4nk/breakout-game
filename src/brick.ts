/* eslint-disable import/extensions */
import Rect from './rect';

class Brick extends Rect {

    status:number

  constructor(x:number, y:number, width:number, height:number, color:string = '#f00') {
    super(x, y, width, height, color);
    this.status = 1;
  }

  render(ctx:any) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Brick;
