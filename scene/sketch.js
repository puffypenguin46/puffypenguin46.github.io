// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



// universal variables 

// up and down arrows


let x = 0

let y = 0

let r = 0;

let g = 0;

let b = 0;


function setup() {
  createCanvas(400, 400);
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    if (r <= 255) {
      r += 10
    }
    else 
      r = r
  } else if (keyCode === LEFT_ARROW) {
    if (b <= 255) {
      b += 10
    } 
    else 
      b = b
  } else if (keyCode === RIGHT_ARROW) {
    if (g <= 255) {
      g += 10
    } 
    else 
      g = g
  }
}

function draw() {
  background(150, 230, 240);
  x += (mouseX - x) * 0.03; 
  y += (mouseY - y) * 0.03; 
  keyPressed(); {
    if (keyCode === UP_ARROW) {
      if (r <= 255) {
        r += 10
    }
      else 
      r = r
  } else if (keyCode === LEFT_ARROW) {
    if (b <= 255) {
      b += 10
    } 
    else 
      b = b
  } else if (keyCode === RIGHT_ARROW) {
    if (g <= 255) {
      g += 10
    } 
    else 
      g = g
  }
  }
  fill(r, g, b)
  quad(x, y, 70, 230, 220, 70, 230, 60);
}






