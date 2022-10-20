//VARIABLES---------------------------------
const grid = document.querySelectorAll('.grid');
let paintPanel = document.getElementById("paint-panel");
let blackBtn = document.getElementById('blackBtn');
let rainbowBtn = document.getElementById('rainbowBtn');
let eraseBtn = document.getElementById('eraseBtn');
let clearBtn = document.getElementById('clearBtn');
let toggleBtn = document.getElementById('grid-lines');
let number;

let sizeButtons = document.querySelectorAll('.size-buttons')

let slider = document.getElementById("slider");
let output = document.getElementById("output");

//color button event listeners
rainbowBtn.addEventListener('click', rainbow);
blackBtn.addEventListener('click', black);
eraseBtn.addEventListener('click', erase);
clearBtn.addEventListener('click', clear);
toggleBtn.addEventListener('click', toggle);
slider.addEventListener('input', function(){
  removeGrid(paintPanel);
  createGrid(slider.value);
});

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

let defaultSlider = 16;
createGrid(defaultSlider);
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

function removeGrid(parent){
  while(parent.firstChild){
    parent.removeChild(parent.firstChild);
  }
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


//SLIDER OUTPUT------------------------------
output.textContent = "Grid Size: " + slider.value + " x " + slider.value;
slider.oninput = function(){
  output.textContent = "Grid-Size: " + slider.value + " x " + slider.value;
  number = slider.value
}
 console.log(slider.value);

 