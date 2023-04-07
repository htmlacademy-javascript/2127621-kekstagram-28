const minus = document.querySelector('.scale__control--smaller');
const plus = document.querySelector('.scale__control--bigger');
const inputScale = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

const MIN_SCALE = 25;
const MAX_SCALE = 100;
const STEP_SCALE = 25;

let scale = 100;

const renderImagePreview = () => {
  imagePreview.style.transform = `scale(${scale * 0.01})`;
};

const renderInputScale = () => {
  inputScale.value = `${scale}%`;
};

minus.addEventListener('click', () => {
  scale = (scale - STEP_SCALE >= MIN_SCALE) ? scale - STEP_SCALE : MIN_SCALE;
  renderInputScale();
  renderImagePreview();
});

plus.addEventListener('click', () => {
  scale = (scale + STEP_SCALE <= MAX_SCALE) ? scale + STEP_SCALE : MAX_SCALE;
  renderInputScale();
  renderImagePreview();
});

const resetScale = () => {
  scale = 100;
  renderInputScale();
  renderImagePreview();
};

export { resetScale };
