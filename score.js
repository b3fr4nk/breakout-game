class Score {
  constructor(x, y, color, font) {
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
    this.points = 0;
  }

  render(ctx) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`${this.score}`, 8, 20);
  }
}

export default Score;
