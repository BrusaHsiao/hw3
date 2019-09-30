# hw3
1. What code draws the blades of grass?
The following code draws the blades of grass:
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  
2. What code makes the "lawnmower" come by? How often does it come by?
the following code makes the "lawnmover" come by:
if (random(100) > 99.9) {
    fill(255);
    rect(0, 0, width, height-10);
    h = 10;
  }
  the "random(100)>99.9" can be interpreted as "random(0,100)>99.9", hence whenever the y value is bigger than 99.9, the lawnmower comes by.
  
3. What's the point of the h variable?
The h variable controls the height of the grass blade, since "height-10-random(h)" controls the y-coordinates of the end of grass blades, as h gets bigger, the grass grows taller.

4. What does the -10 do in the second and fourth arguments of the line function, height-10-random(h) ? Why is it there?
The -10 represents the height of the "soil", "height-10" assures that the grass grows above the ground.
