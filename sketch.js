const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object1;
var ground ;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var option ={
    isStatic: true
  }

  var b_option = {
    restitution: 0.5
  }
  object1 = Bodies.circle(200,200,30,b_option);
  World.add(world,object1);

  ground = Bodies.rectangle(200,350,400,20,option);
  World.add(world,ground);

 // console.log(object1.position.x);

}

function draw() {
  background("lightblue");  

  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(object1.position.x,object1.position.y,30,30);

}