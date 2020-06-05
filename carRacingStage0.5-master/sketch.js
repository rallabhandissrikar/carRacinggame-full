var canvas, backgroundImage;
var track;
var gameState = 0;
var playerCount;
var cr1, cr2, cr3, cr4;
var database;
var rank1;
var form, player, game;

var allPlayers;
var car1,car2,car3,car4,cars;

var dist1;
var dist2;
var dist3;
var dist4;

var noDist;

function preload() {
  cr1 = loadImage("images/car1.png");
  cr2 = loadImage("images/car2.png");
  cr3 = loadImage("images/car3.png");
  cr4 = loadImage("images/car4.png");
  track = loadImage("images/track.jpg");
}

function setup(){
  canvas = createCanvas(windowWidth-0,windowHeight-30);
  database = firebase.database();
  rank1 = createElement("h2");
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }
  if (gameState === 2) {
    game.end();
  }
}
