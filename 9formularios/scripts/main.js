'use strict';
const btn = document.getElementById('boton2');

btn.addEventListener('click',(event)=>{//2do elemento función tipo flecah anonima
    event.preventDefault();
    const form = document.getElementById('form');
    console.log(form);
    console.log(form[0].value);
    console.log(form[1].value);
    console.log(form[4].value);
});