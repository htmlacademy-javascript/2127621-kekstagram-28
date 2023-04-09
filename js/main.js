import { ERROR_MESSAGE } from './constans.js';
import './form.js';
import { getPhotos } from './api.js';
import { showAlert } from './utils.js';
import { setFilters } from './filters.js';

getPhotos()
  .then((photos) => {
    setFilters(photos);
  })
  .catch(() => {
    showAlert(ERROR_MESSAGE);
  });

