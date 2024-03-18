// terrian generation
// maram hani
// march 18
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let terrian = [];
let numberOfRects;
let rectWidth;


function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRects = 10000;
  rectWidth = width / numberOfRects;
  generateTerrain();
}

function draw() {
  background(220);

  for (let someRect of terrian) {
    rect(someRect.x, someRect.y, someRect.w, someRect.h);
  }
}

function generateTerrain() {
  let time = 0;
  let deltaTime = 1.01;

  for (let x = 0; x < width; x += rectWidth) {
    let theHeight = noise(time) * height;
    spawnRectangle(x, theHeight);
    time += deltaTime;
  }
}
function spawnRectangle(leftSide, rectHeight) {
  let thisRect = {
    x: leftSide,
    y: height - rectHeight,
    w: rectWidth,
    h: rectHeight,
  }
  terrian.push(thisRect);
}