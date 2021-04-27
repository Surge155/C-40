var database;
var canvas,backgroundI;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var distance = 0;
var form,player,game;
var car1,car2,car3,car4,cars;
var car1I,car2I,car3I,car4I;
var ground,groundI;
var trackI;

function preload(){
    car1I = loadImage("images/car1.png");
    car2I = loadImage("images/car2.png");
    car3I = loadImage("images/car3.png");
    car4I = loadImage("images/car4.png");
    groundI = loadImage("images/ground.png");
    trackI = loadImage("images/trackStart.png");
    backgroundI = loadImage("images/background.jpg");
}

function setup(){
    database = firebase.database();
    canvas =  createCanvas(displayWidth-20,displayHeight-30);
    game = new Game();
    game.getState();
    game.start();
}


function draw(){
    if(playerCount === 4){
        console.log(playerCount);
        game.update(1);
    }
    if(gameState === 1){
        clear();
        game.play();
    }
    if(gameState === 2){
        game.end();
    }
    console.log(gameState);
   
    //drawSprites();
}

