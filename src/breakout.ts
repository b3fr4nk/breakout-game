/* eslint-disable import/extensions */
import Lives from './lives';
import Paddle from './paddle';
import Ball from './ball';
import Background from './background';
import Brick from './brick';
import Score from './score';

let rightPressed = false;
let leftPressed = false;

const canvas:any = document.getElementById('myCanvas');
const ctx:any = canvas.getContext('2d');

const paddleWidth:number = 75;
const paddleHeight:number = 10;
const paddle:Paddle = new Paddle((canvas.width) / 2, (canvas.height - paddleHeight), paddleWidth, paddleHeight, '#0095DD');

const ball:Ball = new Ball(canvas.width / 2, canvas.height / 2, 10, '#0095DD');

const bg:Background = new Background('#fefefe', canvas);

const score:Score = new Score(8, 20, '#0095DD', '16px Arial');
const lives:Lives = new Lives(canvas.width - 65, 20, '#0095DD', '16px Arial', canvas);

const brickRowCount:number = 3;
const brickColumnCount:number = 5;
const brickWidth:number = 75;
const brickHeight:number = 20;
const brickPadding:number = 10;
const brickOffsetTop:number = 30;
const brickOffsetLeft:number = 30;
const bricks:Brick[][] = [];
for (let c = 0; c < brickColumnCount; c += 1) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r += 1) {
    const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
    const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
    bricks[c][r] = new Brick(brickX, brickY, brickWidth, brickHeight, '#0095DD');
  }
}

function keyUpHandler(e:any) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = false;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = false;
  }
}

function keyDownHandler(e:any) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  }
}

function mouseMoveHandler(e:any) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddle.x = relativeX - paddleWidth / 2;
  }
}

function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c += 1) {
    for (let r = 0; r < brickRowCount; r += 1) {
      const b = bricks[c][r];
      if (b.status === 1) {
        if (
          ball.x > b.x && ball.x < b.x + brickWidth && ball.y > b.y && ball.y < b.y + brickHeight) {
          ball.dy = -ball.dy;
          b.status = 0;
          score.update();
          if (score.score === brickRowCount * brickColumnCount) {
            // eslint-disable-next-line no-alert
            alert('YOU WIN, CONGRATULATIONS!');
            document.location.reload();
          }
        }
      }
    }
  }
}

function drawBricks(ctx:any) {
  for (let c = 0; c < brickColumnCount; c += 1) {
    for (let r = 0; r < brickRowCount; r += 1) {
      if (bricks[c][r].status === 1) {
        bricks[c][r].render(ctx);
      }
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bg.render(ctx);
  drawBricks(ctx);
  paddle.render(ctx);
  ball.render(ctx);
  lives.render(ctx);
  score.render(ctx);

  if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
    ball.dx = -ball.dx;
  }
  if (ball.y + ball.dy < ball.radius) {
    ball.dy = -ball.dy;
  } else if (ball.y + ball.dy > canvas.height - ball.radius) {
    if (ball.x > paddle.x && ball.x < paddle.x + paddleWidth) {
      ball.dy = -ball.dy;
    } else {
      lives.loseLife();
      if (lives.lives <= 0) {
        // eslint-disable-next-line no-alert
        alert('GAME OVER');
        document.location.reload();
      } else {
        ball.x = canvas.width / 2;
        ball.y = canvas.height - 30;
        ball.dx = 2;
        ball.dy = -2;
        paddle.x = (canvas.width - paddleWidth) / 2;
      }
    }
  }

  if (rightPressed && paddle.x < canvas.width - paddleWidth) {
    paddle.x += 7;
  } else if (leftPressed && paddle.x > 0) {
    paddle.x -= 7;
  }

  ball.x += ball.dx;
  ball.y += ball.dy;

  collisionDetection();

  requestAnimationFrame(draw);
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('mousemove', mouseMoveHandler, false);

draw();
