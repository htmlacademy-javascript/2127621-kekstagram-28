import { openModal } from './modal.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const renderThumbnail = (photo) => {
  const thumbnailElement = template.cloneNode(true);
  thumbnailElement.querySelector('.picture__img').src = photo.url;
  thumbnailElement.querySelector('.picture__comments').textContent = photo.comments.length;
  thumbnailElement.querySelector('.picture__likes').textContent = photo.likes;
  thumbnailElement.dataset.id = photo.id;
  return thumbnailElement;
};

const clearThumbnailsContainer = () => {
  document.querySelectorAll('.picture').forEach((item) => {
    item.remove();
  });
};

const renderThumbnails = (photos) => {
  photos.forEach((photo) => {
    clearThumbnailsContainer();
    fragment.append(renderThumbnail(photo));
  });
  container.append(fragment);
  container.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('picture__img')) {
      const id = evt.target.closest('a').dataset.id * 1;
      const photo = photos.find((item) => item.id === id);
      openModal(photo);
    }
  });
};

export { renderThumbnails };
