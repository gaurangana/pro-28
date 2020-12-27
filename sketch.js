
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint = Matter.Constraint ;
var treeObj , stoneObj , groundObj ,launcherObj ;
var mango1 , mango2 , mango3 , mango4 , mango5 , mango6 , mango7 , mango8 , mango9 , mango10 , mango11 , mango12;
var world , boy ;
var launchingForce = 100 ;
function preload(){
	boy = loadImage("sprites/boy.png")
}


function setup() {
createCanvas(1300, 600);
engine = Engine.create();
world = engine.world;

stoneObj = new stone() ;

mango1 = new Mango() ;
mango2 = new Mango() ;
mango3 = new Mango() ;
mango4 = new Mango() ;
mango5 = new Mango() ;
mango6 = new Mango() ;
mango7 = new Mango() ;
mango8 = new Mango() ;
mango9 = new Mango() ;
mango10 = new Mango() ;
mango11 = new Mango() ;
mango12= new Mango() ;

treeObj= new Tree ();
groundObj = new Ground();
launchingObject = new launcher(stoneObj.body, {x:235, y:420 }) ;

var render = Render.create({ element: document.body, 
	engine: engine,
    options: {
	 width: 1000,
	 height: 700,
	 wireframes: false
	 } 
	 });

 Render.run(render);
Engine.run(engine);
	}

function draw() {

	background(230);


 textSize(25)
 text("press space to get a second chance to play!!",50,50) ;
 image(boy, 200,340,200,300);



treeObj.display();
stoneObj.display() ;
mango1.display() ;
mango2.display() ; 
mango3.display() ;
mango4.display() ;  
mango5.display() ;  
mango6.display() ;  
mango7.display() ;  
mango8.display() ; 
mango9.display() ; 
mango10.display() ;  
mango11.display() ;  
mango12.display() ;
stoneObj.display() ;

groundObj.display()
launcherObject.display()
dectectollision(stoneObj,mango1);
dectectollision(stoneObj,mango2);
dectectollision(stoneObj,mango3);
dectectollision(stoneObj,mango4);
dectectollision(stoneObj,mango5);
dectectollision(stoneObj,mango6);
dectectollision(stoneObj,mango7);
dectectollision(stoneObj,mango8);
dectectollision(stoneObj,mango9);
dectectollision(stoneObj,mango10);
dectectollision(stoneObj,mango11);
dectectollision(stoneObj,mango12);

drawSprites();
 
}

function mouseDrageed(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
	launchObject.fly();
}
function keyPressed(){
if(keyCode === 32){
	Matter.Body.setPosition(stoneObj.body, {x:235 , y:420 })
	launchingObject.attach(stoneObj.body)
}
}

function dectectollision(lstone, lmango){
	mangoBodyPosition= lmango.body.Position
	stoneBodyPosition= lmango.body.Position

	var distance = dist(stoneBodyPosition.x , stoneBodyPosition,y ,mangoBodyPosition.x , mangoBodyPosition.y)
	if(distance= lmango.r+ lstone.r){
		Matter.Body.setStatic(lmango.body, false)
	}
}