import throttle from 'lodash.throttle';
const refs =
{
    form:document.querySelector('.feedback-form'),
}
const LS_KEY = 'feedback-form-state';
const { form } = refs;

let data = {};
form.addEventListener('input',throttle(handlerInput, 500));
form.addEventListener('submit', handlerSubmit);


function handlerInput (evt){
    const targetClick = evt.target;
    data[evt.target.name]= targetClick.value.trim();
    localStorage.setItem(LS_KEY, JSON.stringify(data));
}

function handlerSubmit (evt){
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(LS_KEY);
    console.log(data);
    data = {};
}

const onLoad = () => {
    try {
        const saveData = localStorage.getItem(LS_KEY);
        if(!saveData) return;
        data = JSON.parse(saveData);
        Object.entries(data).forEach(([key,val]) => {
        form.elements[key].value = val;
      });
    } catch(error){
        console.log(error.message);
      }
   
};
onLoad();