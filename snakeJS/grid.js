const gridSIZE = 21;
export function randomGridPosition(){
    return{
        x:Math.floor(Math.random()*gridSIZE)+1,
        y:Math.floor(Math.random()*gridSIZE)+1
    }
}

export function outsideGrid(position){
    return(    position.x<1 || position.x>gridSIZE||
    position.y<1 || position.y>gridSIZE)
;
}