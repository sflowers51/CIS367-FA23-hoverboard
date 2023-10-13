const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const NUM_SQUARES = 1000;
const WIDTH = 20;
const HEIGHT = NUM_SQUARES / WIDTH;

const container = document.getElementById('container');

for( let i=0; i < NUM_SQUARES; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.backgroundColor = getRandomColor();
    square.addEventListener('mouseover', () => (square.style.backgroundColor = getRandomColor(), square.style.boxShadow = `0 0 10px ${randomColor}`));

    square.addEventListener('mouseout', () => (square.style.backgroundColor = '#444', square.style.boxShadow =""));


    container.appendChild(square);
    //square is a node object
} 

function getRandomColor(){
    
    return colors[Math.floor(Math.random() * colors.length)];
}

function setColor(square){
        const randomColor = getRandomColor();
        square.style.backgroundColor = randomColor;
        square.style.boxShadow = `0 0 2px ' + ${randomColor}`; `0 0 10px ${randomColor}`;
    
}

function removeColor(square){
    square.style.backgroundColor = '#444';
    square.style.boxShadow = '';
}

function blinkGrid(){
    const squares = document.getElementsByClassName('square');
    for (const square of squares){
        setColor(square);
        //2000 is milliseconds
        setTimeout(() => removeColor(square), 2000 );
    }
}

function clearGrid(){
    const squares = document.getElementsByClassName('square');
    for (const square of squares){
        removeColor(square);
    }
}

let activeSquare = document.querySelector('square');

document.addEventListener('keypress', (event)=>{
    console.log(event);

    if(event.key === 'Space'){
        clearGrid();
    }

    if (event.key === 'Enter'){
        blinkGrid();
    }

    if(event.key == 'w'){
        activeSquare++;
        setColor(activeSquare);
    }

    if(event.key == 'd'){
        
    }

    if(event.key == 's'){
        
    }

    if(event.key == 'a'){
        
    }
});