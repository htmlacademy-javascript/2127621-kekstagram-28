import { renderThumbnails } from './thumbnail.js';
import { MAX_RANDOM_PHOTOS } from './constans.js';
import { debounce } from './utils.js';

const filtersContainer = document.querySelector('.img-filters');

const photos = [];

const setFilters = (data) => {
  renderThumbnails(data);
  photos.length = 0;
  photos.push(...data.slice());
  filtersContainer.classList.remove('img-filters--inactive');
};

const filterPhotos = (id) => {
  switch (id) {
    case 'filter-default':
      return photos;
    case 'filter-random':
      return [...photos].sort(() => Math.random() - 0.5).slice(0, MAX_RANDOM_PHOTOS);
    case 'filter-discussed':
      return [...photos].sort((a, b) => b.comments.length - a.comments.length);
  }
};

filtersContainer.addEventListener('click', debounce((evt) => {
  if (evt.target.classList.contains('img-filters__button')) {
    const id = evt.target.id;
    renderThumbnails(filterPhotos(id));
    document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
  }
}));

export { setFilters };
