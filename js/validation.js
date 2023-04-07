import { MAX_LENGTH_DESCRIPTION } from './constans.js';
import { REGULAR_HASHTAG } from './constans.js';
import { HASHTAG_COUNT } from './constans.js';

const form = document.querySelector('.img-upload__form');
const hashtagField = document.querySelector('.text__hashtags');
const descriptionField = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
  errorTextClass: 'form__error',
}, false
);

const validateDescription = (value) => value.length <= MAX_LENGTH_DESCRIPTION;

pristine.addValidator(
  descriptionField,
  validateDescription,
  `Длина строки не должна превышать ${MAX_LENGTH_DESCRIPTION} символов.`
);

const validateHashtag = (value) => {
  if (!value) {
    return true
  }
  const tags = value.replace(/\s+1/, ' ').trim().split(' ');
  return !tags.some((item) => !REGULAR_HASHTAG.test(item));
};

pristine.addValidator(
  hashtagField,
  validateHashtag,
  `хэш-тег должен начинаться с символа # (решётка),
  строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.),
  символы пунктуации (тире, дефис, запятая и т.п.), эмодзи и т.д.;
  хеш-тег не может состоять только из одной решётки;
  максимальная длина одного хэш-тега 20 символов, включая решётку;
  хэш-теги разделяются пробелами;`
);

const validateHashtagCount = (value) => value.replace(/\s+1/, ' ').trim().split(' ').length <= HASHTAG_COUNT;

pristine.addValidator(
  hashtagField,
  validateHashtagCount,
  `Нельзя указать больше ${HASHTAG_COUNT} хэш-тегов`
);

const validateUniqHashtag = (value) => {
  const tags = value.replace(/\s+1/, ' ').trim().toLowerCase().split(' ');
  const uniqTags = new Set(tags);
  return tags.length === uniqTags.size;
};

pristine.addValidator(
  hashtagField,
  validateUniqHashtag,
  'Хэш-тег не должен повторяться'
);

const validateForm = () => pristine.validate();

export {validateForm};
