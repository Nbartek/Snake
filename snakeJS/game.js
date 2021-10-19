import{update as updateSnake, draw as drawSnake,SnakeSPEED,snakeHeadPosition, snakeIntersection} from "../snakeJS/snake.js"
import{update as updateFood, draw as drawFood} from "./food.js";
import{outsideGrid} from "./grid.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.querySelector("#game-board")

function main(currenttime){
if(gameOver){
    if(confirm("Przegrałes. Kliknij OK by zagrać ponownie")){
        window.location = "./index.html";
    }return;
}

        window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currenttime - lastRenderTime)/1000;
    if(secondsSinceLastRender< 1/SnakeSPEED) return;




    console.log("Render");
    lastRenderTime = currenttime;


    update();
    draw();
}
window.requestAnimationFrame(main);

function update(){
updateSnake();
updateFood();
checkForDeath();
}
function draw(){
gameBoard.innerHTML='';
drawSnake(gameBoard);
drawFood(gameBoard);
}

function checkForDeath(){
    gameOver = outsideGrid(snakeHeadPosition())|| snakeIntersection();
}