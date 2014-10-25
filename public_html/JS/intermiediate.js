/*----------------------------------------------------------------------------
 * Variabes
 * ---------------------------------------------------------------------------
 * 
 */

var snake;
var snakeLength;
var snakeSize;
var snakeDirection;
var food;

var context;
var screenWidth;
var screenHeight;

/*----------------------------------------------------------------------------
 * Executing Game code
 * ---------------------------------------------------------------------------
 */

gameInitialize();
snakeInitialize();
foodInitialize();
setInterval(gameLoop, 1000/50);

/* ---------------------------------------------------------------------------
 * Game funnctions
 * ---------------------------------------------------------------------------
 */

function gameInitialize() {
    var canvas = document.getElementById("game-screen"); 
    context = canvas.getContext("2d");
    
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    
    canvas.width = screenWidth;
    canvas.height = screenHeight;
    document.addEventListener("keydown", keyboardHandler);
}

function gameLoop () {
    gameDraw();
    snakeUpdate();
    snakeDraw();
    foodDraw();
}

function gameDraw() {
    context.fillStyle = "rgb(5,5,5)";
    context.fillRect(0, 0, screenWidth, screenHeight);
    
   }
   
   /*-------------------------------------------------------------------------
    * Snake Functions
    * ------------------------------------------------------------------------
    */
   
function snakeInitialize(){
    snake = [];
    snakeLength = 5;
    snakeSize = 20;
    snakeDirection = "down";
    
    for(var index = 0; index < snakeLength; index++){
        snake.push({
            x: index,
            y: 0
        });
 
    }
}

function snakeDraw(){
    for(var index = 0; index < snake.length; index++){
       context.fillStyle = " darkturquoise";
       context.fillRect(snake[index].x * snakeSize, snake[index].y * snakeSize,snakeSize,snakeSize);
      
   }
    }


function snakeUpdate(){
    var snakeHeadX = snake[0].x;
    var snakeHeadY = snake[0].y;
    
    if(snakeDirection == "down"){
        snakeHeadY++;
    }
    
    else if(snakeDirection == "right"){
        snakeHeadX++;
    }
    else if(snakeDirection == "left"){
        snakeHeadX--;
    }
    else if(snakeDirection == "up"){
        snakeHeadY--;
    }
       
    var snakeTail = snake.pop();
    snakeTail.x = snakeHeadX;
    snakeTail.y = snakeHeadY;
    snake.unshift(snakeTail);
   }
   
   /*-------------------------------------------------------------------------
    * Input Functions 
    * ------------------------------------------------------------------------
    */
   
   function foodInitialize(){
       food = {
           x: 0,
           y:0
       };
       setFoodPosition();
   }
   
   function foodDraw(){
       context.fillStyle = "darkturqoise";
       context.fillRect(food.x, food.y , snakeSize, snakeSize);
 }  
 
 function setFoodPosition(){
     var randomX = Math.floor(Math.random() * screenWidth);
     var randomY = Math.floor(Math.random() * screenHeight);
     
     food.x = Math.floor(randomX / snakeSize);
     food.y = Math.floor(randomY / snakeSize);
 }
   
 function keyboardHandler(event){
     console.log("Hi");
       console.log(event);
       
    if(event.keyCode == "39") {
        snakeDirection = "right";
    }  
    else if(event.keyCode == "40") {
        snakeDirection = "down";
    }  
    else if(event.keyCode == "37") {
        snakeDirection = "left";
    }  
    else if(event.keyCode == "38") {
        snakeDirection = "up";
    }
 }
 
 /*----------------------------------------------------------------------------
  * Collision Handeling
  * ---------------------------------------------------------------------------
  */

