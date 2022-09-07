import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textArea = document.querySelector('.feedback-form textarea');
const emailArea = document.querySelector('.feedback-form input');

// const formData = {};
const STORAGE_KEY = "feedback-form-state";

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

notSendForm();

function onFormSubmit(event) {
    event.preventDefault();
    console.log('sent message with such data:',localStorage.getItem(STORAGE_KEY) )
    event.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onFormInput() {
    // formData[event.target.name] = event.target.value;

    const formData = new FormData(form);
    let formEl = {};
    formData.forEach((value, name) => (formEl[name] = value));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formEl));
}

// function notSendForm() {
//     let formElement = localStorage.getItem(STORAGE_KEY);
//     if (formElement) {
//     formElement = JSON.parse(formElement);
//     Object.entries(formElement).map(([name, value]) => {
//       form.elements[name].value = value;
//     });
//   }
// }

function notSendForm() {
    const message = localStorage.getItem(STORAGE_KEY);    
    const email = localStorage.getItem(STORAGE_KEY);
    if (message) {
        const messageJson = JSON.parse(message);
        textArea.value = messageJson.message;
    }       if (email) {
        const emailJson = JSON.parse(email);
        emailArea.value = emailJson.email;
      }
};




