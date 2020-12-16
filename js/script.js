"use strict";
//Const
const card = document.querySelector('.card');
const container = document.querySelector('.container');
const btn = document.querySelectorAll('.sizes button');
const body = document.querySelector('body');
//items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

//Moving animations event
container.addEventListener('mousemove', (e) => {
    let xAxis = ((window.innerWidth / 2 - e.pageX ) / 25);
    let yAxis = ((window.innerHeight / 2 - e.pageY) / 25);

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});
//Animation In
container.addEventListener('mouseenter', (e) => {
    card.style.transition ="none"; 

    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
    
});

//Animation out
container.addEventListener('mouseleave', (e) => {
    card.style.transform = `rotateY(0deg) rotateY(0deg)`;
    card.style.transition ="all 0.5s ease"; 


    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});

// change activiti class on btn 
btn.forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target == item) {
            e.target.classList.toggle('active');
            
        }
    });
});

purchase.addEventListener('click', (e) => {
   e.target.style.background = "black";



});
