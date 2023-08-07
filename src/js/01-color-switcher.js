'use strict'

const conteiner = document.body;
let intervalId;
let isActive = false;

conteiner.addEventListener('click', (event) => {
   const clickedBtn = event.target;

   if (clickedBtn.hasAttribute('data-start') && isActive === false){
       intervalId = setInterval(swithColor,1000);
       isActive = true;
   }

   if (clickedBtn.hasAttribute('data-stop')){
     clearInterval(intervalId);
     isActive = false;
 }

})

function swithColor () {
    let color = getRandomHexColor();
    conteiner.style.backgroundColor = color;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

