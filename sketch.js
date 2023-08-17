const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var fruit;
function preload(){
  //add imagens
  backgroundImg = loadImage("background.png");
 fruit=loadImage("melon.png");
 g=loadImage("basket.png")
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  
 

  //criando a bola
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
//Criando a restrição
  slingShot = new Slingshot(this.ball,{x:100,y:100});

}
function draw() {
  background(backgroundImg); 
 
  //Exibir chão
  ground.display();
  g.sacale = 0.25;
  
 
  imageMode(CENTER)
  image(fruit ,ball.position.x,ball.position.y,40,40);
  image(g,450,270)

  slingShot.display();
}
//ao arrastar o mouse a fruta vai junto
function mouseDragged(){//clicar e arrastar o mouse
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
// ao soltar o mause a restrição é excluida
function mouseReleased(){// soltar o botão do mouse
  slingShot.fly();

}
