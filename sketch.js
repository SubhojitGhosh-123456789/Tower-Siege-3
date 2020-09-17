const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygon;
var slingshot;
var ground;
var stand1, stand2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;
var block11, block12, block13, block14, block15, block16, block17, block18, block19, block20; 
var backgroundImg;
var currentTime;

var score = 0;

function preload() {
    getBackgroundImg();
}

function setup()
{
    createCanvas(1000, 500);

    engine = Engine.create();
   	world = engine.world;

    polygon = new Polygon(100,200,40);
    slingshot = new SlingShot(polygon.body,{x:100, y:200});

    ground = new Ground(500,490,1000,30);

    stand1 = new Ground(580,380,200,20);
    stand2 = new Ground(870,300,200,20);

    //Block Set-1
    //Level-1
    block1 = new Block(600,330);
    block2 = new Block(570,330);
    block3 = new Block(630,330);
    block4 = new Block(540,330);
    //Level-2
    block5 = new Block(585,280);
    block6 = new Block(555,280);
    block7 = new Block(615,280);
    //Level-3
    block8 = new Block(570,230);
    block9 = new Block(600,230);
    //Level-4
    block10 = new Block(586,190);

    //Block Set-2
    //Level-1
    block11 = new Block (890,270);
    block12 = new Block (860,270);
    block13 = new Block (920,270);
    block14 = new Block (830,270);
    //Level-2
    block15 = new Block (875,220);
    block16 = new Block (845,220);
    block17 = new Block (900,220);
    //Level-3
    block18 = new Block (860,170);
    block19 = new Block (890,170);
    //Level-4
    block20 = new Block (876,120);
}
function draw()
{
    if(backgroundImg)
    background(backgroundImg);

    noStroke();
    textSize(35);
    fill("white");
    text("Score: "+score, width-250, 50 );

    noStroke();
    textSize(30);
    fill("white");
    text("Time: "+ currentTime, 50, 50 );

    Engine.update(engine);

    fill(255);
    textSize(20);
    text("Drag the Polygon to destroy the Blocks!!",300,50);

    fill(255);
    textSize(15);
    text("Press Space to get a Second Chance to Play!!",660,450);


    polygon.display();
    slingshot.display();
    ground.display();

    stand1.display();
    stand2.display();

    //Block Set-1
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();


    //Block Set-2

    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();


    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();

    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();

    time();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}
async function getBackgroundImg(){
    var response = await fetch ("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var dateTime  = responseJSON.datetime;
    var hour = dateTime.slice(11,13);
    console.log(hour);

    if(hour>= 06 && hour<=18){
        bg = "bg.png";
    }else {
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
}
async function time(){
    var response = await fetch ("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var dateTime  = responseJSON.datetime;
    var t = dateTime.slice(11,19);

    currentTime = t;

}