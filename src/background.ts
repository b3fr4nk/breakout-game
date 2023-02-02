/* eslint-disable import/extensions */
import Rect from './rect';

class Background extends Rect {
  constructor(color:string, canvas:any) {
    super(0, 0, canvas.width, canvas.height, color);
  }
}

export default Background;
