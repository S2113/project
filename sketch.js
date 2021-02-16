var canvas;
var music;
var plate1, plate2, plate3, plate4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
        canvas = createCanvas(800,600);


    //create 4 different surfaces
        plate1=createSprite(400,15,800,35);
        plate3=createSprite(400,585,800,35);
        plate4=createSprite(15,300,35,600);
        plate2=createSprite(785,300,35,600);

        ball=createSprite(random(50,750),random(50,550), 35,35);
        ball.shapeColor="white";

        ball.velocityX=random(-5,5);
        ball.velocityY=random(-5,5);

        plate1.shapeColor="red";
        plate2.shapeColor="yellow";
        plate3.shapeColor="blue";
        plate4.shapeColor="green";

        
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    bounceOff(plate1,plate2,plate3,plate4);

    drawSprites();

    //add condition to check if box touching surface and make it box
}

function bounceOff(p1,p2,p3,p4)
{

if(ball.y-p1.y<ball.height/2+p1.height/2)
{
 ball.velocityY=ball.velocityY*(-1);
 ball.shapeColor=p1.shapeColor;
}

if(p3.y-ball.y<ball.height/2+p3.height/2)
{
ball.velocityY=ball.velocityY*(-1);
ball.shapeColor=p3.shapeColor;
}
if(ball.x-p4.x<ball.width/2+p4.width/2)
{
 ball.velocityX=ball.velocityX*(-1);
 ball.shapeColor=p4.shapeColor;
 music.play();
}

if(p2.x-ball.x<ball.width/2+p2.width/2 )
{
ball.velocityX=0;
ball.velocityY=0;
ball.shapeColor=p2.shapeColor;
music.stop();
}

}