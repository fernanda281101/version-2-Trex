var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage,cloud,cloudImage;
var gameOver,restart,gameOverImage,restartImage;
var obstaculo,obstaculoImage;
var jumpSound,dieSound,checkpoint;
// game over,todas las imagenes  y todas van a ser un load image 


function preload(){
//Creacion de objetos 

      //Trex
     trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
     trex_collided = loadImage("trex_collided.png");
    /*
    //Ground
    groundImage = loadImage("ground2.png");
    cloudImage = loadImage("cloud.png");

    //obstaculos
    //obstaculoImage = loadImage("obstacle1.png,obstacle2.png,obstacle3.png,obstacle4.png,obstacle5.png,obstacle6.png");
    //estado
    gameOverImage = loadImage("gameOver.png");
    restartImage = loadImage("restart.png");

    //carga sonidos
    jumpSound = loadSound("jump.mp3");
    dieSound = loadSound("die.mp3");
    checkpoint =loadSound("checkpoint.mp3");
*/
}
  
  
function setup() {
  //Creacion de Cnvas 

  createCanvas(1000,1000);
  
  //crear sprite de trex 
  trex = createSprite(50,160,20,50);
  trex.addImage("collided",trex_collided);
  //trex.addAnimation("trex_running",trex_running);
  trex.scale = 0.5;
  
  //crear sprite de suelo
  ground = createSprite(0,400,20,400);
  ground.addImage("ground2",groundImage);
  //cloud.addImage("cloud",cloudImage);

  //sprite obstaculosg
  //obstaculo.addImage("obstacule1","obstacule2","obstacule3","obstacule4","obstacule5","obstacule6",obstaculoImage);

  //estado
  /*
  gameOver.addImage("gameOver",gameOverImage);
  restart.addImage("restart",restartImage);
  //mover  piso   coordenada X - izquierda 
  ground.x = ground.x - 3;
  */
  //coordenada x de ground  hacer que se duplique

  
  //crear sprite de suelo invisible 
  
  
}

function draw() {
  //establecer el color de fondo
  background(220);
  
  
  //hacer que el trex salte al presionar la barra espaciadora

  //agregar gravedad


  //hacer que el piso se repita 

  
  //evitar que el trex caiga

  
  //visualiza Sprites
  drawSprites();
}
