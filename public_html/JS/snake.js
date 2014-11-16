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
var gameState;
var gameOvermenu;
var restartButton;

/*----------------------------------------------------------------------------
 * Executing Game code
 * ---------------------------------------------------------------------------
 */
gameInitialize();
snakeInitialize();
foodInitialize();
setInterval(gameLoop, 1000/20);

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
    
    gameOverMenu = document.getElementById("gameOver");
    centerMenuPosition(gameOverMenu);
    
    restartButton = document.getElementById("restartButton");
    restartButton.addEventListener("click", gameRestart);
      
    setState("PLAY");
}

function gameLoop () {
    gameDraw();
    if(gameState == "PLAY"){
       snakeUpdate();
       snakeDraw();
       foodDraw();
    }
}

function gameDraw() {
    context.fillStyle = "rgb(250,205,2)";
    context.fillRect(0, 0, screenWidth, screenHeight);
    
   }

function gameRestart() {
    snakeInitialize();
    foodInitialize();
    hideMenu(gameOverMenu);
    setState("PLAY");
}
   
   /*-------------------------------------------------------------------------
    * Snake Functions
    * ------------------------------------------------------------------------
    */
   
function snakeInitialize(){
    snake = [];
    snakeLength = 10;
    snakeSize = 20;
    snakeDirection = "right";
    
    for(var index = 0; index < snakeLength; index++){
        snake.push({
            x: index,
            y: 0
        });
 
    }
}

function snakeDraw(){
    for(var index = 0; index < snake.length; index++){
       context.fillStyle = "gold";
       context.fillRect(snake[index].x * snakeSize, snake[index].y * snakeSize,snakeSize,snakeSize);
       context.strokeStyle = "black";
       context.strokeRect(snake[index].x * snakeSize, snake[index].y * snakeSize,snakeSize,snakeSize);
      
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
       checkFoodCollision (snakeHeadX, snakeHeadY);
       checkWallCollision (snakeHeadX, snakeHeadY);
       
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
       context.fillStyle = "black";
       context.fillRect(food.x * snakeSize, food.y * snakeSize, snakeSize, snakeSize);
       context.strokeStyle = "darkturqoise";
       context.srokeRect(food.x * snakeSize,food.y * snakeSize,snakeSize,snakeSize)
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
       
    if(event.keyCode == "39" && snakeDirection!="left") {
        snakeDirection = "right";
    }  
    else if(event.keyCode == "40" && snakeDirection!="up") {
        snakeDirection = "down";
    }  
    else if(event.keyCode == "37" && snakeDirection!="right") {
        snakeDirection = "left";
    }  
    else if(event.keyCode == "38" && snakeDirection!="down") {
        snakeDirection = "up";
    }
 }
 
 /*----------------------------------------------------------------------------
  * Collision Handeling
  * ---------------------------------------------------------------------------
  */
 
 function checkFoodCollision(snakeHeadX, snakeHeadY){
     if(snakeHeadX == food.x && snakeHeadY == food.y){
       snake.push({
           x: 0,
           y: 0
       });
       snakeLength++;
       setFoodPosition();
     }
 }
 
function checkWallCollision (snakeHeadX, snakeHeadY){
    if(snakeHeadX *  snakeSize >= screenWidth || snakeHeadX < 0 * snakeSize) {
        setState("GAME OVER");
    }
     if(snakeHeadY *  snakeSize >= screenHeight || snakeHeadY < 0 * snakeSize) {
        setState("GAME OVER");
    }
} 

//function checkSnakeCollisions(snakeheadX, snakeHeadY) {
//    for(var index = 1;) {
//        
//    }
//}

/*-----------------------------------------------------------------------------
 * Game State Handeling
 * ----------------------------------------------------------------------------
 */

function setState(state) {
    gameState = state;
    showMenu(state);
}
  
 /*----------------------------------------------------------------------------
  * Menu Functtions
  * ---------------------------------------------------------------------------
  */

function displayMenu (menu) {
    menu.style.visibility = "visible";
}

function hideMenu(menu) {
    menu.style.visibility = "hidden";
}

function showMenu(state) {
    if(state == "GAME OVER") {
        displayMenu(gameOverMenu);
    }
}

function centerMenuPosition(menu) {
    menu.style.top = (screenHeight / 2) - (menu.offsetHeight / 2) +"px";
    menu.style.left = (screenWidth / 2)- (menu.offsetWidth / 2) +"px";
}