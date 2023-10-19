import throttle from 'lodash.throttle';
const refs =
{
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
}
const { form, input, textarea } = refs;

const data = {};
form.addEventListener('input',handlerInput);

function handlerInput (evt){
const targetClick = evt.target;
evt.preventDefault();
console.log(targetClick);
}

