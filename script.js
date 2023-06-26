const clear = document.querySelector('#clear-btn');
const agreement = document.querySelector('#agreement');
const submit = document.querySelector('#submit-btn');
const nameFull = document.querySelector('#fullName');
const email = document.querySelector('#email');
const question = document.querySelector('#question');
const nameLength = nameFull.value.length;
const emailLength = email.value.length;
const questionLength = question.value.length;

const validName = () => nameLength >= 10 && nameLength <= 40;

const validEmail = () => emailLength > 10 && emailLength <= 50;

const validQuestion = () => questionLength > 0 && questionLength <= 500;

const preventSubmit = (event) => {
  event.preventDefault();
  if (validName() && validEmail() && validQuestion()) {
    alert('Dados enviados com sucesso!');
  } else {
    alert('Dados inválidos');
  }
};

const clearSubmit = () => {
  submit.disabled = true;
};

const enableSubmit = () => {
  submit.disabled = !agreement.checked;
};

window.onload = () => {
  submit.addEventListener('click', preventSubmit);
  clear.addEventListener('click', clearSubmit);
  agreement.addEventListener('change', enableSubmit);
};
