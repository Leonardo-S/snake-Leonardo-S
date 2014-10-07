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
    snakeLength = 5;
    snakeSize = 20;
    for(var index = 0; index < sankeLength; ++){
        snake.push({
            x: index,
            y: 0
        });

    }
}

function snakeDraw(){
    for(var index = 0; snake.length; index++) {
        context. fillStyle = "white";
        context.fillStyle(snake[index]);
    }
}

function snakeUpdate(){
    
}