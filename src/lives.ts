class Lives {

  x:number
  y:number
  lives:number
  font:string
  color:string
  canvas:any

  constructor(x:number, y:number, font:string, color:string, canvas:any) {
    this.x = x;
    this.y = y;
    this.lives = 3;
    this.font = font;
    this.color = color;
    this.canvas = canvas;
  }

  render(ctx:any) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`${this.lives}`, this.canvas.width - 65, 20);
  }

  loseLife() {
    this.lives -= 1;
  }

  reset() {
    this.lives = 3;
  }
}

export default Lives;
