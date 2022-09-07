import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
// const textArea = document.querySelector('.feedback-form textarea');
// const emailArea = document.querySelector('.feedback-form input');
// console.log (emailArea)

// const formData = {};
const STORAGE_KEY = "feedback-form-state";

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

// wordTextarea();
// wordForm();

notSendForm();

function onFormSubmit(event) {
    event.preventDefault();
    console.log('sent message with such data:',localStorage.getItem(STORAGE_KEY) )
    event.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(event) {

    // formData[event.target.name] = event.target.value;
    // console.log(formData)
    // localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

    const formData = new FormData(form);
    let formEl = {};
    formData.forEach((value, name) => (formEl[name] = value));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formEl));
}

function notSendForm() {
    let formElement = localStorage.getItem(STORAGE_KEY);
    if (formElement) {
    formElement = JSON.parse(formElement);
    Object.entries(formElement).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}

// function wordTextarea() {
//     const takeMessage = localStorage.getItem(STORAGE_KEY);    
    
//     if (takeMessage) {
//         const messageJson = JSON.parse(takeMessage);
//         textArea.value = messageJson.message;
//         console.log(messageJson.message)

//     }   
// };

// function wordForm() {
//     const takeEmail = localStorage.getItem(STORAGE_KEY);
    
//     if (takeEmail) {
//         const emailJson = JSON.parse(takeEmail);
//         emailArea.value = emailJson.email;
//         console.log(emailJson.email)
//     }
// }





