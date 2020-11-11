var wall,thickness

var bullet,speed,weight

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50, 210, 30, 30);
  wall = createSprite(1200, 200, thickness , height/2);

  speed=random(223, 321);
  //speed=223
  weight = random(30,52);
  //weight = 32
  thickness = random(22,83);
  //thickness = 70;

  bullet.shapeColor = "white";

  bullet.velocityX = speed;

}

function draw() {
  background("black");  
  
  if(wall.x - bullet.x < bullet.width/2 + wall.width/2){
     
     bullet.velocityX = 0;

     var damage = (0.5*weight*speed*speed)/
     (thickness*thickness*thickness);

     if(damage > 10){
      wall.shapeColor = "red";

     }

     if(damage < 10){
      wall.shapeColor = "green";

    }

      console.log(damage);
 }

  drawSprites();
}