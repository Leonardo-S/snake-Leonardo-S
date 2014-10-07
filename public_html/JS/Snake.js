var snake;
var snakelength;
var snakesize;

var context;
var screenwidth;
var screenheight;
gameInitialize();
gameDraw();

function gameInitialize() {
    var canvas = document.getElementById("game-screen"); 
    context = canvas.getContext("2d");
    
    screenwidth = window.innerWidth;
    screenheight = window.innerHeight;
    
    canvas.width = screenwidth;
    canvas.height = screenheight;
}

function gameLoop () {
    
}

function gameDraw() {
    context.fillStyle ="rgb(47,142,222)";
    context.fillRect(0,0,screenwidth,screenheight);
}

function snakeInitialize(){
    snake = [];
    snakelength = 5;
    snakesize = 20;
    for(var index = 0; index < sankeLength; ++){
        snake.push();
        
    }
  
}

function sankeDraw(){
    
}

function snakeUpdate(){
    
}