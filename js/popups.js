import { escapeFormHandler } from './form.js';

const templateSuccess = document.querySelector('#success').content.querySelector('.success');
const templateError = document.querySelector('#error').content.querySelector('.error');

const closeSuccessHandler = () => {
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', escapeSuccessHandler);
};

const overlayClickHandler = (evt) => {
  if (evt.target.classList.contains('success')) {
    closeSuccessHandler();
  }
};

function escapeSuccessHandler(evt) {
  if (evt.key === 'Escape') {
    closeSuccessHandler();
  }
}

const showSuccess = () => {
  const elementSuccess = templateSuccess.cloneNode(true);
  document.body.append(elementSuccess);
  elementSuccess.querySelector('.success__button').addEventListener('click', closeSuccessHandler);
  elementSuccess.addEventListener('click', overlayClickHandler);
  document.addEventListener('keydown', escapeSuccessHandler);
};

const closeErrorHandler = () => {
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', escapeErrorHandler);
  document.addEventListener('keydown', escapeFormHandler);
};

const overlayErrorClickHandler = (evt) => {
  if (evt.target.classList.contains('error')) {
    closeErrorHandler();
  }
};

function escapeErrorHandler(evt) {
  if (evt.key === 'Escape') {
    closeErrorHandler();
  }
}

const showError = () => {
  const elementError = templateError.cloneNode(true);
  document.body.append(elementError);
  elementError.querySelector('.error__button').addEventListener('click', closeErrorHandler);
  elementError.addEventListener('click', overlayErrorClickHandler);
  document.addEventListener('keydown', escapeErrorHandler);
};

export { showSuccess, showError };
