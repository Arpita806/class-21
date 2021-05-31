var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
 surface1=createSprite(80,580,150,20)
surface1.shapeColor="red"
surface2=createSprite(260,580,150,20)
surface2.shapeColor="blue"
surface3=createSprite(450,580,150,20)
surface3.shapeColor="pink"
surface4=createSprite(650,580,150,20)
surface4.shapeColor="black"

box=createSprite(10,10,40,40)
box.shapeColor="white"
box.velocityX=2
box.velocityY=3
edges=createEdgeSprites()

    //create box sprite and give velocity

}

function draw() {
    background("yellow");
    box.bounceOff(edges)
    if(box.isTouching(surface1)){
        box.shapeColor="red"
    }
    if(box.isTouching(surface2)){
        box.shapeColor="blue"
    }
    if(box.isTouching(surface3)){
        box.shapeColor="pink"
    }
    if(box.isTouching(surface4)){
        box.shapeColor="black"
    }

    //create edgeSprite


  drawSprites()
    //add condition to check if box touching surface and make it box
}
