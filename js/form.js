import { validateForm } from './validation.js';

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
  modalForm.reset();
});

form.addEventListener('submit', (evt) => {
  if (!validateForm()) {
    evt.preventDefault();
  }
});
