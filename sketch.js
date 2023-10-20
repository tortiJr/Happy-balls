const World=Matter.World


const Engine=Matter.Engine


const Bodies=Matter.Bodies
//

var ball, ball3, ball6, ball9, ball10
var ground
var engine
var world




function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  //to create engine^^^
  world=engine.world
  var ground_options={
    isStatic: true
  }

  var ball_options={
    restitution: 1
  }

  ball=Bodies.circle(500, 50, 25, ball_options)
  World.add(world,ball)

///////

  var ball3_options={
    restitution: 0.80
  }

  ball3=Bodies.circle(250, 50, 25, ball3_options)
  World.add(world,ball3)

///////
  ground=Bodies.rectangle(400, 380, 800, 34, ground_options )
  World.add(world,ground)

  ////////

  

}

function draw() {
  background("#5422F6"); 

  Engine.update(engine)

  ellipseMode(RADIUS)

  ellipse(ball.position.x, ball.position.y, 25, 25)
  ellipse(ball3.position.x, ball3.position.y, 25, 25)

  rectMode(CENTER)

  rect(ground.position.x, ground.position.y, 800,34)

  drawSprites();
  


}