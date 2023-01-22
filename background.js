/* eslint-disable import/extensions */
import Rect from './rect.js';

class Background extends Rect {
  constructor(color, canvas) {
    super(0, 0, canvas.width, canvas.height, color);
  }
}

export default Background;
