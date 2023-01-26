class Lives {
  constructor(x, y, font, color, canvas) {
    this.x = x;
    this.y = y;
    this.lives = 3;
    this.font = font;
    this.color = color;
    this.canvas = canvas;
  }

  render(ctx) {
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
