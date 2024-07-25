//your parameter variables go here!
let triangleSidesX = 20;
let triangleSidesY = 100;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 150;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  DrawWing();
scale(-1,1);
translate(-200,0);
  DrawWing();


translate(100,20);
triangle(0, 50, triangleSidesX, triangleSidesY, -triangleSidesX, triangleSidesY);
scale(1,-1);

translate(0,-90);
triangle(0, 50, triangleSidesX, triangleSidesY, -triangleSidesX, triangleSidesY);
}

 function DrawWing(){
  strokeWeight(1);
  stroke(0);
  fill(0)
  
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
