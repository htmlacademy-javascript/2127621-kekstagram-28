import { validateForm } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { postPhoto } from './api.js';
import { showSuccess, showError } from './popups.js';

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
  document.addEventListener('keydown', escapeFormHandler);
};

const hideModalForm = () => {
  modalForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  form.reset();
  document.removeEventListener('keydown', escapeFormHandler);
};

uploadFileInput.addEventListener('change', () => {
  showModalForm();
});

modalFormCloseButton.addEventListener('click', () => {
  hideModalForm();
  form.reset();
});

function escapeFormHandler(evt) {
  if (evt.key === 'Escape') {
    hideModalForm();
  }
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (validateForm()) {
    postPhoto(new FormData(form))
      .then((response) => {
        if (response.ok) {
          hideModalForm();
          showSuccess();
        } else {
          showError();
          document.removeEventListener('keydown', escapeFormHandler);
        }
      })
      .catch(() => {
        showError();
      });
  }
});

export { escapeFormHandler };
