let sp = 10;
let x = 0;
let y = 0;
let num;
let output;
let cnvs;



function setup() {
  strokeWeight(2);
  output = select('#output');
  cnvs = select('#canvasHolder');
  cnvs = createCanvas(400, 400);
  cnvs.background(93, 0, 172);
  cnvs.parent('canvasHolder');  // sticks the canvas into this html div set in index
  stroke(124, 113, 218);
  strokeWeight(3);
  fill(124, 113, 218);

}

function draw() {
  translate(x, y);
  x += sp;

  if (is_prime(frameCount)) {
    //stroke(255, 0, 0);
    line(0, 0, sp, sp); //  this slash \ for prime
    let gtext = str(frameCount)+" ";
    output.html(gtext ," ");  // this appends the text instead of clearing the text area and writing new ones 
  } else {

    stroke(124, 113, 218);
    line(sp, 0, 0, sp); // slash / for composite
    //print(frameCount);  frameCount Begins at 1 so no worry about zero
  }
  if (x > width) {
    x = 0;
    y += sp;
  }
  if (y > height) {
    background(93, 0, 172);
    x = 0;
    y = 0;
    //sp=sp%100+10;
  }
}


function is_prime(n) {


  if (n === 1) {
    return false;

  } else if (n === 2) {
    return true;

  } else {

    for (var x = 2; x < n; x++) {
      if (n % x === 0) {

        return false;
      }
    }
    return true;
  }
}