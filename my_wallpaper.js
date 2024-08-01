//your parameter variables go here!
let triangleSidesX = 20; 
let triangleSidesY = 89; // 100 or 90
let triangleColour = 1;
let EllipseBG = true
let eyeHeight = 30 // closes and opens eye
let eyeX = 15
let drawIrisEye = 2

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
background(235, 215, 199)

}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

//drawEye();

//drawIris();
if (drawIrisEye > 1){
  fill(214, 84, 58)
  strokeWeight(1)
  stroke(161, 25, 22)
  ellipse(100,45,50,eyeHeight)
 
  fill(235, 102, 45)
  strokeWeight(1)
  ellipse(100,45,20,eyeHeight)

}

if(triangleSidesY == 90){
  EllipseBG = true
}
else
{EllipseBG = false}

if(EllipseBG == true){
 strokeWeight(2)
 noStroke()
  fill(235, 102, 45)
  ellipse(100, 115, 100, 100);

}



push();
translate(0, 45);

  DrawWing();  // this creates the wing on the left
scale(-1,1); // mirrors the wing
translate(-200,0); // translates it
  DrawWing(); // this creates the wing on the right

if(triangleColour == 1){
  fill(214, 84, 58)
}
else if(triangleColour == 2){
  //fill 2
}
else{
  fill(255, 0, 0);
}

translate(100,20);
triangle(0, 50, triangleSidesX, triangleSidesY, -triangleSidesX, triangleSidesY);
scale(1,-1);

translate(0,-90);
triangle(0, 50, triangleSidesX, triangleSidesY, -triangleSidesX, triangleSidesY);
pop();

}

 function DrawWing(){ // this is the function for a wing
  strokeWeight(1);
  stroke(77, 15, 10);
  fill(201, 22, 22)
  
  beginShape();
  vertex(5, 20,);
  vertex(10, 45);
  vertex(68, 45);
  vertex(66, 35)

 endShape(CLOSE);

 beginShape();
 vertex(13, 62,);
 vertex(23, 88,);
 vertex(73, 65,);
 vertex(70, 55,)

endShape(CLOSE);

beginShape();
vertex(35, 105,);
vertex(65, 120,);
vertex(82, 85);
vertex(77, 77,)

endShape(CLOSE);

beginShape();
vertex(66, 35,);
vertex(80, 39,);
vertex(90, 73);
vertex(80, 90,)
endShape(CLOSE);
 }

//function drawIris (x,y){
  //fill(235, 102, 45)
  //strokeWeight(1)
  //ellipse(100,45,20,eyeHeight)
//}

//function drawEye (x,y){ // this is the function for the eye
  //fill(214, 84, 58)
//strokeWeight(1)
//stroke(161, 25, 22)
//ellipse(100,45,50,eyeHeight)

//}
