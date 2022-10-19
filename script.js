//VARIABLES---------------------------------
const grid = document.querySelectorAll('.grid');
let paintPanel = document.getElementById("paint-panel");
let blackBtn = document.getElementById('blackBtn');
let rainbowBtn = document.getElementById('rainbowBtn');
let eraseBtn = document.getElementById('eraseBtn');
let clearBtn = document.getElementById('clearBtn');
let toggleBtn = document.getElementById('grid-lines');

let sizeButtons = document.querySelectorAll('.size-buttons')

let eightBtn = document.getElementById('8')
let sixteenBySixteen;

let value = prompt("number", "8");

//color button event listeners
rainbowBtn.addEventListener('click', rainbow);
blackBtn.addEventListener('click', black);
eraseBtn.addEventListener('click', erase);
clearBtn.addEventListener('click', clear);
toggleBtn.addEventListener('click', toggle);

//size button event listeners
// eightBtn.addEventListener('click', eight);


let current = defaultColor;

//FUNCTIONS---------------------------------

//CREATE DIV--------------------------------
function createGrid(value){
    paintPanel.style.gridTemplateColumns = `repeat(${value},1fr)`
    for(i = 0; i < value * value; i++)
    {
          const gridBox = document.createElement('div');
          gridBox.classList.add('grid');
          gridBox.classList.add('boxes');
          paintPanel.appendChild(gridBox);
          gridBox.addEventListener('mouseover', current)
    }
  }
  
createGrid(value);

//BUTTON FUNCTIONS---------------------------

function rainbow() {
  let gridDivs = document.querySelectorAll('.grid');
  for(let i = 0; i < gridDivs.length; i++)
  {
    gridDivs[i].removeEventListener('mouseover', current);
    gridDivs[i].addEventListener('mouseover', getRainbow);
  }
  current = getRainbow;
}

function black(){
  let gridDivs = document.querySelectorAll('.grid');
  for(let i = 0; i < gridDivs.length; i++)
  {
    gridDivs[i].removeEventListener('mouseover', current);
    gridDivs[i].addEventListener('mouseover', defaultColor);
  }
  current = defaultColor;
}

function erase(){
  let gridDivs = document.querySelectorAll('.grid');
  for(let i = 0; i < gridDivs.length; i++)
  {
    gridDivs[i].removeEventListener('mouseover', current);
    gridDivs[i].addEventListener('mouseover', eraseGrid);
  }
  current = eraseGrid;
}

function clear(){
  let gridDivs = document.querySelectorAll('.grid');
  for(let i = 0; i < gridDivs.length; i++)
  {
    gridDivs[i].style.backgroundColor = 'white';
  }
}

function toggle(){
  let gridDivs = document.querySelectorAll('.grid');
  gridDivs.forEach(div=>div.classList.toggle('boxes'));
}

//COLOR FUNCTIONS---------------------------
function defaultColor(){
  this.style.backgroundColor = 'black';
}

function getRainbow(){
  let letters ='0123456789ABCDEF';
  let color ='#';
  for(let i = 0; i < 6; i++){
      color+= letters[Math.floor(Math.random()*16)];
    }
  this.style.backgroundColor = color;
  return color;
}

function eraseGrid(){
  this.style.backgroundColor= 'white';
}
