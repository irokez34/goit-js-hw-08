import throttle from 'lodash.throttle';
const refs =
{
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
}
const { form, input, textarea } = refs;

const data = {};
form.addEventListener('input',throttle(handlerInput, 500));
form.addEventListener('submit', handlerSubmit);
function handlerInput (evt){
    const targetClick = evt.target;
    data[evt.target.name]= targetClick.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function handlerSubmit (evt){
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}