import { getInputDirection } from "./input.js";

 export const SnakeSPEED = 5 ;
 const SnakeBODY =[
     {x:11,y:11}
]
let newSegment = 0;

export function update(){
    adSegments();
   const inputDirection = getInputDirection();
for(let i =SnakeBODY.length-2;i>=0;i--){
    SnakeBODY[i+1]= {...SnakeBODY[i]}
}
SnakeBODY[0].x += inputDirection.x;
SnakeBODY[0].y += inputDirection.y;
}
export function draw(gameBoard){
    SnakeBODY.forEach(segment=>{const snakeElment = document.createElement("div");
    snakeElment.style.gridRowStart = segment.y;
    snakeElment.style.gridColumnStart = segment.x;
    snakeElment.classList.add("snake");
    gameBoard.appendChild(snakeElment);
    });
}

export function snakeHeadPosition(){
    return SnakeBODY[0];
}

export function snakeIntersection(){
    return onSnake(SnakeBODY[0], {ignoreHead:true});
}

export function expandSnake(amount){
    newSegment +=amount;
}
export function onSnake(position,{ignoreHead=false}={}){
    return SnakeBODY.some((segment,index)=>{
        if(ignoreHead && index===0)return false;
        return equalPositions(segment,position);
    })
}

function equalPositions(pos1,pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y;
}
function adSegments(){
    for(let i=0;i<newSegment;i++){
        SnakeBODY.push({...SnakeBODY[SnakeBODY.length-1]}); 
    }
    newSegment = 0
}