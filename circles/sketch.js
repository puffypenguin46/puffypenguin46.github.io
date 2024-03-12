// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

 spawnBall(width/2, height/2);

}

function draw() {
  background(220);
  moveBalls();
  displayBalls();

}

function mousePressed() {
  spawnBall(mouseX, mouseY);
}


function moveBalls() {
  for (let ball of ballArray) {
    ball.x += ball.dx;
    ball.y += ball.dy;

    //teleport across screen if needed...
    if (ball.x < 0) {
      ball.x = width;
    }
    else if (ball.y > width) {
      ball.x = 0
    }

    if (ball.y < 0) {
      ball.y = height;
    }
    else if (ball.y > height) {
      ball.y = 0
    }
}

}

function displayBalls() {
  for (let ball of ballArray) {
    fill(ball.color);
    circle(ball.x, ball.y, ball.radius * 2);
}
}

function spawnBall(initalX, initalY) {
  let ball = {
    x: initalX,
    y: initalY,
    radius: random(15, 30),
    color: color(random(255), random(255), randon(255)),
    dx: random(-5, 5),
    dy: random(-5, 5),
  };
  ballArray.push(ball);
}

// let ball = {
//   x: width / 2,
//   y: height / 2,
//   radius: random(15, 30),
//   color: color(random(255), random(255), randon(255)),
//   dx: random(-5, 5),
//   dy: random(-5, 5),
// };
// ballArray.push(ball);