/* eslint-disable import/extensions */
import Rect from './rect.js';

class Paddle extends Rect {
  drawPaddle(context) {
    context.beginPath();
    context.rect(this.x, this.width - this.x, this.width, this.height);
    context.fillStyle = '#0095DD';
    context.fill();
    context.closePath();
  }

  updatePaddle() {
    this.x = (this.canvas.width - this.width) / 2;
    this.drawPaddle();
  }
}

export default Paddle;
