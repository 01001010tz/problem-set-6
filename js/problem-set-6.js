/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
let helloText = document.getElementById("canvas1").getContext('2d');
helloText.font = "48px sans-serif";
helloText.strokeText("Hello, World!", 10, 50);
}


/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

 function drawRectangle() {
 let canvas = document.getElementById("canvas2")
 let ctx = canvas.getContext('2d');
 ctx.clearRect(0, 0, 1024, 128)
 let height;
 let width;
 let xCoor;
 let yCoor;

while (true) {
 height = Number(prompt("Please enter a height for the rectangle."));
   if (height >= 1 && height < 512) {
     break;
   } else if (height < 1){
    alert("That's too short! Please enter a valid input.");
   } else if (height > 512) {
     alert("That's too tall! Please enter a valid input.");
   }
 }

 while (true) {
 width = Number(prompt("Please enter a width for the rectangle."));
   if (width >= 1 && width < 1024) {
     break;
   } else if (width < 1){
    alert("That's too narrow! Please enter a valid input.");
   } else if (width > 1024) {
     alert("That's too wide! Please enter a valid input.");
   }
 }

 while (true) {
 xCoor = Number(prompt("Please enter the x coordinate for the top left point of the rectangle."));
   if (xCoor >= 5 && (xCoor + width <= 1024)) {
     break;
   } else {
    alert("That won't fit on the canvas-- it's too wide with that X! Please enter a valid input.");
   }
 }

 while (true) {
 yCoor = Number(prompt("Please enter the y coordinate for the top left points of the rectangle."));
   if (yCoor >= 5 && (yCoor + height <= 512)) {
     break;
   } else {
    alert("That won't fit on the canvas-- it's too tall with that Y! Please enter a valid input.");
   }
 }

  ctx.strokeRect(xCoor, yCoor, height, width);
 }


/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
let canvas = document.getElementById("canvas3");
let ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, 1024, 128);
let color = prompt("What color would you like for the rectangle?")
  switch(color) {
    case "black":
      ctx.fillStyle = "black";
      break;
    case "blue":
      ctx.fillStyle = "blue";
      break;
    case "green":
      ctx.fillStyle = "green";
      break;
    case "orange":
      ctx.fillStyle = "orange";
      break;
    case "purple":
      ctx.fillStyle = "purple";
      break;
    case "red":
      ctx.fillStyle = "red";
      break;
    case "yellow":
      ctx.fillStyle = "yellow";
      break;
    default:
      alert("That doesn't seem to be a supported color! Make sure it's supported and the first letter is lowercase.");
      break;
  }
  ctx.fillRect(10, 10, 100, 50);
}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */
 function drawTriangle() {
 let canvas = document.getElementById("canvas4");
 let ctx = canvas.getContext('2d');

 let side1;
 let side2;
 let side3;
 ctx.clearRect(0, 0, 1024, 512);

 while (true) {
  side1 = Number(prompt("Enter the dimension for side 1. It should be the shortest."));
  side2 = Number(prompt("Enter the dimension for side 2. It should be longer than side 1."));
  side3 = Number(prompt("Enter the dimension for side 3. It should be longer than both of the previous sides."));
  if (side3**2 == (side1**2) + (side2**2) && side1 < side2 && side1 < 502 && side2 < 1014) {
   break;
      } else if (side1 > side2){
    alert("Please list your sides in order from least to greatest.");
   } else if (side3**2 != side1**2 + side2**2) {
        alert("Those sides don't form a valid right triangle. Please enter a valid combination");
   } else if (side1 > 502 || side2 > 1014) {
        alert("One or more of those sides is too long. Please enter a valid input.");
   } else if (side1 < 3 || side2 < 4) {
        alert("One or more of those sides is too short. Please enter a valid input.");
   }
 }
  ctx.beginPath();
   ctx.moveTo(10, 10);
   ctx.lineTo(10, (10 + side1));
   ctx.lineTo((10 + side2), (10 + side1));
   ctx.lineTo(10, 10);
   ctx.stroke();
   ctx.closePath();
 }


/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  let canvas = document.getElementById("canvas5");
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 1024, 512);
  let radius;
  while (true) {
    radius = Number(prompt("Please enter the face's radius"));
    if (radius >= 10 && radius < 256) {
      break;
    } else if (radius < 10){
    alert("That'll be too small to see! Please enter a valid input.");
   } else if (radius > 256){
    alert("That won't fit on the canvas. Please enter a valid input.");
   }
  }
let eyeRadius = radius/10
ctx.beginPath();
ctx.arc(512, 256, radius, 0, 2*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc((512 - .2*radius), (256 - .1*radius), eyeRadius, 0, 2*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc((512 + .2*radius), (256 - .1*radius), eyeRadius, 0, 2*Math.PI);
ctx.stroke();
ctx.closePath();

let mouthRadius= radius * 0.7;
ctx.beginPath();
ctx.arc(512, (256 + .2*radius), mouthRadius, 0, Math.PI);
ctx.stroke();
ctx.closePath();

}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
  let canvas = document.getElementById("canvas6");
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 1024, 256);
  let innerRadius;
  let outerRadius;
while(true) {
 innerRadius = Number(prompt("Please enter an inner radius for your circle"));
 outerRadius = Number(prompt("Please enter an outer radius for your circle"));
if (outerRadius <= 125 && outerRadius >= 10) {
  break;
} else if (innerRadius > 125 || outerRadius > 125) {
  alert("One or both of your dimensions are too large.");
 } else if (innerRadius > outerRadius) {
  alert("The inner radius should not be greater than the outer.");
 } else if (innerRadius < 10 || outerRadius < 10) {
  alert("One or both of your dimensions are too small.");
 }
}
 //Asks for and declares input variables

 ctx.beginPath();
 ctx.moveTo(128, (128 - outerRadius));
 let rotation = 0;
 //Begins at center of canvas

 for (i = 0; i <= 5; i++) {
  ctx.lineTo(125 + Math.round((Math.cos(rotation - (Math.PI/2))*outerRadius)), 125 + Math.round((Math.sin(rotation - (Math.PI/2))*outerRadius)));
  rotation += Math.PI*0.2;
  //Draws lines to outer radius points before offsetting rotation to prevent overlap
  ctx.lineTo(125 + Math.round((Math.cos(rotation - (Math.PI/2))*innerRadius)), 125 + Math.round((Math.sin(rotation - (Math.PI/2))*innerRadius)));
  rotation += Math.PI*0.2;
  //Draws lines to inner radius points before offsetting rotation to prevent overlap
 }
 //Loops to create each arm
 ctx.stroke();
 ctx.closePath();
 //Fills whole thing after loop
}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
  let canvas = document.getElementById("canvas7");
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 1024, 256);
  let diagonal = Math.round(Math.sqrt(3200));
  let xCoor = 10 + diagonal;
  let yCoor = 10;

  ctx.beginPath();
  ctx.moveTo(xCoor, yCoor);
  ctx.lineTo((xCoor - diagonal), (yCoor + diagonal));
  ctx.lineTo((xCoor - diagonal), (yCoor + diagonal + 80));
  ctx.lineTo(xCoor, yCoor + 80 + 2*diagonal);
  ctx.lineTo((xCoor + 80), (yCoor + 80 + 2*diagonal));
  ctx.lineTo((xCoor + diagonal + 80), (yCoor + 80 + diagonal));
  ctx.lineTo((xCoor + diagonal + 80), (yCoor + diagonal));
  ctx.lineTo((xCoor + 80), yCoor);
  ctx.lineTo(xCoor, yCoor);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.moveTo(xCoor, yCoor);
  ctx.font = "65px sans-serif";
  ctx.fillStyle = "white";
  ctx.textBaseline = "middle";
  ctx.fillText("STOP", xCoor - diagonal + 8, yCoor + diagonal + 40);
  ctx.closePath();
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
  let canvas = document.getElementById("canvas8");
  let ctx = canvas.getContext('2d');
  let dimension;
  let i = 0;
  ctx.clearRect(0, 0, 1024, 512);

 while (true) {
  dimension = Number(prompt("Please input a dimension for the squares of the pyramid."));
  if (dimension >= 2 && dimension <= 100) {
   break;
 } else if (dimension < 2){
    alert("That dimension is too small. The pyramid won't be visible. Please use a larger value.");
  } else if (dimension > 100) {
    alert("That dimension is too large. The pyramid won't fit on the canvas. Please use a smaller value.");
  }
 }

  let xCoor = 10;
  let yCoor = 502 - dimension;

 /*ctx.beginPath();
 for (i = 0; i <= 4; i++) {
  ctx.moveTo(xCoor, yCoor);
  ctx.strokeRectangle(xCoor, yCoor, dimension, dimension);
  xCoor += dimension;
 }

 xCoor = 10 + (dimension*.5);
 yCoor -= dimension;

 for (i = 0; i <= 3; i++) {
  ctx.moveTo(xCoor, yCoor);
  ctx.strokeRectangle(xCoor, yCoor, dimension, dimension);
  xCoor += dimension;
 }

 xCoor = 10 + dimension;
 yCoor -= dimension;

 for (i = 0; i <= 2; i++) {
  ctx.moveTo(xCoor, yCoor);
  ctx.strokeRectangle(xCoor, yCoor, dimension, dimension);
  xCoor += dimension;
 }

 xCoor = 10 + (dimension*1.5)
 yCoor -= dimension;

 for (i = 0; i <= 1; i++) {
  ctx.moveTo(xCoor, yCoor);
  ctx.strokeRectangle(xCoor, yCoor, dimension, dimension);
  xCoor += dimension;
 }

 xCoor = 10 + (dimension*2);
 yCoor -= dimension;

 ctx.moveTo(xCoor, yCoor);
 ctx.strokeRectangle(xCoor, yCoor, dimension, dimension);
 */
 let j;
 let k = 4;

 for (j = 0; j<= 4; j++) {
  for (i = 0; i <= k; i++) {
  ctx.moveTo(xCoor, yCoor);
  ctx.strokeRect(xCoor, yCoor, dimension, dimension);
  xCoor += dimension;
  }
  xCoor = 10 + (((5 - k)/2)*dimension);
  yCoor -= dimension;
  k--;
 }

}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
  let canvas = document.getElementById("canvas9");
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 1024, 760);
 let doorColor;
 let houseColor;

 doorColor = prompt("Please give a color for the door of the house. Make sure the first letter is lowercase.");
 houseColor = prompt("Please give a color for the walls of the house. Make sure the first letter is lowercase.");

if (((houseColor == "blue") || (houseColor == "brown") || (houseColor == "green") || (houseColor == "orange") || (houseColor == "purple") || (houseColor == "red") || (houseColor == "yellow")) &&((doorColor == "blue") || (doorColor == "brown") || (doorColor == "green") || (doorColor == "orange") || (doorColor == "purple") || (doorColor == "red") || (doorColor == "yellow"))) {
 ctx.beginPath();
 ctx.moveTo(512, 310);
 ctx.lineTo(150, 310);
 ctx.lineTo(512, 10);
 ctx.lineTo(874, 310);
 ctx.lineTo(512, 310);
 ctx.fillStyle = "gray";
 ctx.fill();
 ctx.closePath();


 ctx.beginPath();
 ctx.moveTo(200, 310);
 ctx.fillStyle = houseColor;
 ctx.fillRect(200, 310, 624, 440);
 ctx.closePath();


 ctx.beginPath();
 ctx.fillStyle = "#add8e6";
 ctx.fillRect(300, 410, 20, 20);
 ctx.closePath();


 ctx.beginPath();
 ctx.fillStyle = "#add8e6";
 ctx.fillRect(724, 410, 20, 20);
 ctx.closePath();


 ctx.beginPath();
 ctx.fillStyle = "#add8e6";
 ctx.fillRect(300, 630, 20, 20);
 ctx.closePath();


 ctx.beginPath();
 ctx.fillStyle = "#add8e6";
 ctx.fillRect(724, 630, 20, 20);
 ctx.closePath();

 ctx.beginPath();
 ctx.fillStyle = doorColor;
 ctx.fillRect(500, 630, 24, 120);
 ctx.closePath();

  } else {
    alert("One or both of your colors hasn't been accepted. Please make sure it's a supported color, and that the first letter is lowercase.");
    //let loss = document.getElementById("output9");
    //loss.innerHTML = "|  ||" + "<br/>||  |_";
  }
}
