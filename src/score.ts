class Score {
  x:number
  y:number
  color:string
  font:string
  score:number

  constructor(x:number, y:number, color:string, font:string) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.font = font;
    this.score = 0;
  }

  update() {
    this.score += 1;
  }

  reset() {
    this.score = 0;
  }

  render(ctx:any) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`${this.score}`, 8, 20);
  }
}

export default Score;
