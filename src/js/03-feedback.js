import throttle from 'lodash.throttle';



const form = document.querySelector('.feedback-form');

form.addEventListener('input',handlerClick);

function handlerClick (evt){
const targetClick = evt.target;
evt.preventDefault();
console.log(targetClick);
}
console.dir(form)