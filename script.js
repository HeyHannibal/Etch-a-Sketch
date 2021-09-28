
const container = document.querySelector('#container');

const paintItBlack = document.querySelector('#paintItBlack')
paintItBlack.addEventListener('click', function(e) {
    return colorValue = 1
});

const clear = document.querySelector('#clear') 
clear.addEventListener('click', function(e) {
  document.querySelectorAll('.pixels').forEach(e => e.style.background = "rgb(255, 255, 255)")
  colorValue = 0;
  document.querySelectorAll('.pixels').forEach(e => e.style.opacity = "1")
})

const random = document.querySelector('#randomColor');
random.addEventListener('click', function(e) {
return colorValue = 4;
})

const grayScale = document.querySelector('#grayScale')
grayScale.addEventListener('click', function(e) { 
    if (greyModeOn == false) {
      greyModeOn = true;
      grayScale.style.background = "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,212,255,0.4312354312354313) 48%, rgba(0,212,255,0.8904428904428905) 58%, rgba(0,212,255,1) 100%)"
    }
    else {
      greyModeOn = false
      grayScale.style.background = "#eefeff"
    }
    
})
let greyModeOn = false;

colorPick.onchange = function() {
    colorValue = 3
    return userColor = this.value; 

  }

let colorValue = 0;
function ChooseColor() {
  if (colorValue === 1) {
    return "black"; 
  }
  else if (colorValue === 3) {
   return userColor; 
  }
  else if (colorValue === 4) {
    return "rgb("+randomColor()+"," +randomColor()+","+ randomColor()+")";
  }
  else {
    return "grey";
  }
}

let userColor; 

function add(n) {
    for (let i = 1; i <= n; i++) {
        const div = document.createElement('div');
            container.style.gridTemplateRows =  "repeat("+resolution+", 1fr)";
            container.style.gridTemplateColumns = "repeat("+resolution+", 1fr)";  
            container.style.aspectRatio = "1/1";
            container.style.background = "e8e8ec"
            div.addEventListener('mouseover', function (e) {
              if(greyModeOn === true) {
              if(e.target.id != "gg") {
                e.target.id = "gg";
                e.target.style.opacity = "0.1";
              }  
              if (e.target.id === "gg") {
                let temp = window.getComputedStyle(e.target).getPropertyValue("opacity");
                 e.target.style.opacity = Number(temp) + .1; 
              }}
              if(greyModeOn === false) {
                e.target.style.opacity = "1";
              } 
              e.target.style.background = ChooseColor();
            });   
           
        div.style.aspectRatio = "1/1";
        div.setAttribute('id', i);
        div.classList.add('pixels')
        container.appendChild(div);}
} 

let resolution = 16;
add(resolution*resolution)
  const slider = document.getElementById('myRange')
  const output = document.getElementById('demo')
  output.textContent = resolution +" X "+ resolution
slider.onmouseup = function getRes() {
    output.textContent = this.value + " X " + this.value;
    document.querySelectorAll('.pixels').forEach(e => e.remove())
    resolution = this.value;
    add(resolution*resolution);
}

function randomColor() {
  return Math.floor(Math.random() * (255 - 1 + 1) + 1) 
}

