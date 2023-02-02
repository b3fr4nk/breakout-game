class Ball {

  radius:number
  color:string
  x:number
  y:number
  dx:number
  dy:number

  constructor(x:number, y:number, radius:number, color:string) {
    this.radius = radius;
    this.color = color;
    this.x = x;
    this.y = y;
    this.dx = 2;
    this.dy = -2;
  }

  render(context:any) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = this.color;
    context.fill();
    context.closePath();
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }
}

export default Ball;
