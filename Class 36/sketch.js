var dataBase;
var gameState = 0;
var game, form, player;
var playerCount = 0;
var allPlayers = [];
var oneCar, twoCar, threeCar, fourCar;
var cars = [];
var carOne, carTwo, carThree, carFour;
var ground, track;
function preload(){
carOne = loadImage ("images/car1.png")
carTwo = loadImage ("images/car2.png")
carThree = loadImage ("images/car3.png")
carFour = loadImage ("images/car4.png")
ground = loadImage ("images/track.png")
track = loadImage ("images/track.jpg")
}
function setup(){
createCanvas(displayWidth, displayHeight)
dataBase = firebase.database();
game = new Game();
game.getState();
game.start();
}


function draw() {
if (playerCount === 4  && gameState === 0){
game.updateState(1)
}
if (gameState === 1){
    clear();
    game.play();
}
if (gameState === 2){
game.updateState(2)    
} 
    
}


