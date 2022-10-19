//VARIABLES---------------------------------
const grid = document.querySelectorAll('.grid');
let paintPanel = document.getElementById("paint-panel");
let blackBtn = document.getElementById('blackBtn');
let rainbowBtn = document.getElementById('rainbowBtn');
let eraseBtn = document.getElementById('eraseBtn');
let clearBtn = document.getElementById('clearBtn');


let sizeButtons = document.querySelectorAll('.size-buttons')

let eight = document.getElementById('8')
let sixteenBySixteen;

let value = prompt("number", "8");

let current = defaultColor;

//FUNCTIONS---------------------------------

function createGrid(value){
    paintPanel.style.gridTemplateColumns = `repeat(${value},1fr)`
    for(i = 0; i < value * value; i++)
    {
          const gridBox = document.createElement('div');
          gridBox.classList.add('grid');
          paintPanel.appendChild(gridBox);
          gridBox.addEventListener('mouseover', current)
    }
  }
  
createGrid(value);

function defaultColor(){
  this.style.backgroundColor = 'black';
}

function colorBlack(){
  this.style.backgroundColor= 'black';
}

function colorRainbow(){

}

function resetGrid(){

}

function erase(){
  this.style.backgroundColor= 'white';
  current = erase;
}

//EVENT LISTENERS----------------------------------

eraseBtn.addEventListener('click', erase);


//click 8x8 to make grid 8x8


//click 16x16 to make grid 8x8


//click 32x32 to make grid 8x8

//enter number make grid XxX

//click make color black

//click make color rainbow

//click erase color

//click reset to empty