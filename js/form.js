import { validateForm } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';

const uploadFileInput = document.querySelector('.img-upload__input');
const modalForm = document.querySelector('.img-upload__overlay');
const modalFormCloseButton = document.querySelector('.img-upload__cancel');
const imagePreview = document.querySelector('.img-upload__preview img');
const form = document.querySelector('.img-upload__form');

const showModalForm = () => {
  modalForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  const fileImage = uploadFileInput.files[0];
  imagePreview.src = URL.createObjectURL(fileImage);
  resetScale();
  resetEffects();
};

const hideModalForm = () => {
  modalForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

uploadFileInput.addEventListener('change', () => {
  showModalForm();
});

modalFormCloseButton.addEventListener('click', () => {
  hideModalForm();
  form.reset();
});

form.addEventListener('submit', (evt) => {
  if (!validateForm()) {
    evt.preventDefault();
  }
});
