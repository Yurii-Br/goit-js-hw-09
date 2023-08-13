'use strict'

const conteiner = document.body;
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let intervalId;

conteiner.addEventListener('click', (event) => {
   const clickedBtn = event.target;
   
   if (clickedBtn.hasAttribute('data-start')){
       intervalId = setInterval(swithColor,1000);
       btnStart.disabled = true;
       btnStop.disabled = false;
   }

   if (clickedBtn.hasAttribute('data-stop')){
     clearInterval(intervalId);
     btnStart.disabled = false;
     btnStop.disabled = true;
 }

})

function swithColor () {
    let color = getRandomHexColor();
    conteiner.style.backgroundColor = color;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

