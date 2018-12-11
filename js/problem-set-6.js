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
 while (true) {
 let height = prompt("Please enter a height for the rectangle.");
   if (height >= 1 && height < 512) {
     break;
   } else {
    alert("That doesn't seem to be correct! Please enter a valid input.")
   }
 }

 while (true) {
 let width = prompt("Please enter a width for the rectangle.");
   if (width >= 1 && width < 1024) {
     break;
   } else {
    alert("That doesn't seem to be correct! Please enter a valid input.")
   }
 }

 while (true) {
 let xCoor = prompt("Please enter the x coordinate for the top left point of the rectangle.");
   if (xCoor >= 5 && (xCoor + width < 1024)) {
     break;
   } else {
    alert("That doesn't seem to be correct! Please enter a valid input.")
   }
 }

 while (true) {
 let yCoor = prompt("Please enter the y coordinate for the top left points of the rectangle.");
   if (yCoor >= 5 && (yCoor + height < 512)) {
     break;
   } else {
    alert("That doesn't seem to be correct! Please enter a valid input.")
   }
 }

 let canvas = document.getElementById("canvas2")
 let ctx = canvas.getContext('2d');
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
let canvas = document.getElementById("canvas3;");
let rectFormat = canvas.getContext('2d');
let color = prompt("What color would you like for the rectangle?")
  switch(color) {
    case "black":
      rectFormat.fillStyle = "black";
      break;
    case "blue":
      rectFormat.fillStyle = "blue";
      break;
    case "green":
      rectFormat.fillStyle = "green";
      break;
    case "orange":
      rectFormat.fillStyle = "orange";
      break;
    case "purple":
      rectFormat.fillStyle = "purple";
      break;
    case "red":
      rectFormat.fillStyle = "red";
      break;
    case "yellow":
      rectFormat.fillStyle = "yellow";
      break;
  }
  rectFormat.fillRect(10, 10, 100, 50);
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

 while (true) {
  let side1 = Number(prompt("Enter the dimension for side 1. It should be the shortest."));
  let side2 = Number(prompt("Enter the dimension for side 2. It should be longer than side 1."));
  let side3 = Number(prompt("Enter the dimension for side 3. It should be longer than both of the previous sides."));
  if (side3**2 == (side1**2) + (side2**2) || side1 > side2 || side1 >= 502 || side2 >= 1014) {
   break;
      } else {
    alert("That doesn't seem to be correct! Please enter a valid input.")
   }
 }

   ctx.moveTo(10, 10);
   ctx.lineTo(10, (10 + side1));
   ctx.lineTo((10 + side2), (10 + side1));
   ctx.lineTo(10, 10);
   ctx.stroke();
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

  while (true) {
    let radius = Number(prompt("Please enter the face's radius"));
    if (radius >= 50 && radius < 256) {
      break;
    } else {
    alert("That doesn't seem to be correct! Please enter a valid input.")
   }
  }
let eyeRadius = radius/10
ctx.beginPath();
ctx.arc(512, 256, radius, 0, 2*Math.PI);
ctx.stroke();
ctx.closePath();

ctz.beinPath();
ctx.arc(522,246, eyeRadius, 0, 2*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(502, 246, eyeRadius, 0, 2*Math.PI);
ctx.stroke();
ctx.closePath();

let mouthRadius= radius * 0.7;
ctx.beginPath();
ctx.arc(512, 266, mouthRadius, 0, Math.PI);
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
  let diagonal = Math.sqrt(3200);
  let xCoor;
  let yCoor;
 //Assign values to these coordinates
 
  ctx.beginPath();
  ctx.moveTo();
  ctx.lineTo((xCoor - diagonal), (yCoor + diagonal));
  ctx.lineTo((xCoor - diagonal), (yCoor + diagonal + 80));
  ctx.lineTo(xCoor, yCoor + 80 + 2*diagonal);
  ctx.lineTo((xCoor + 80), (yCoor + 80 + 2*diagonal));
  ctx.lineTo((xCoor + diagonal + 80), (yCoor + 80 + diagonal));
  ctx.lineTo((xCoor + diagonal + 80), (yCoor + diagonal));
  ctx.lineTo((xCoor + 80), yCoor);
  ctx.lineTo(xCoor, yCoor);
  ctx.stroke();
  ctx.fillStyle("red");
  ctx.fill();
  ctx.closePath();
 
  ctx.beginPath();
  ctx.moveTo(xCoor, yCoor);
  ctx.strokeText("STOP", xCoor, yCoor);
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
}
