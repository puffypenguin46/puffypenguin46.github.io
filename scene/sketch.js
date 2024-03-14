// Butterfly flapping
// Maram Hani
// Date March 14 2024
//
// Extra for Experts:
// - I only did the basic premise, I know it's not my best work but
//   since i missed a couple of important dates I desided to focus on 
//   catching up with the lessons and aiming for an 80-90% with this project.



// global variables 

let x = 0


let y = 0


let r = 0;


let g = 0;


let b = 0;

state = "text"



// canvas

function setup() {
  createCanvas(400, 400);
}

  
// text 

  function showText() {
  fill("black");
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Flap the butterfly!", 200, 100);
  text("Click to start", 200, 200);
  text("Use the arrow keys to change color", 200, 250);
}

// background and clouds

function sky() {
  background(150, 230, 240);
  noStroke();
  fill("white");
  ellipse(255, 275, 220, 95);
  ellipse(205, 250, 80, 80);
  ellipse(275, 230, 90, 90);
  ellipse(330, 260, 90, 90);
  
  ellipse(20, 20, 220, 95);
  
  
}

// wing color changes

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
  } else if (keyCode === DOWN_ARROW) {
    if (g >= 0 && r >=0 && b >= 0) {
      r -= 5;
      g -= 5;
      b -= 5;
    }  
  }
}


// butterfly and drawing the whole thing

function draw() {
  if (state === "text") {
    background("white");
    showText();
  }
  else if (state === "start") {
    sky();
    keyPressed();
    x += (mouseX - x) * 0.03;
    y += (mouseY - y) * 0.03;
    stroke("black");
    line(230, 60, 235, 40);
    fill(r, g, b);
    quad(x, y, 70, 230, 220, 70, 230, 60);
    
}
  }
  
// switching from the start screen to the game

function mousePressed() {
  if (state === "text") {
    state = "start";
  }
}



