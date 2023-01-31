/* eslint-disable import/extensions */
import Rect from './rect.js';

class Brick extends Rect {
  constructor(x, y, width, height, color = '#f00') {
    super(x, y, width, height, color);
    this.status = 1;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Brick;
