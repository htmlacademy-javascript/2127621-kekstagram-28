const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const renderThumbnail = (photo) => {
  const thumbnailElement = template.cloneNode(true);
  thumbnailElement.querySelector('.picture__img').src = photo.url;
  thumbnailElement.querySelector('.picture__comments').textContent = photo.comments.length;
  thumbnailElement.querySelector('.picture__likes').textContent = photo.likes;
  return thumbnailElement;
};

const renderThumbnails = (photos) => {
  photos.forEach((photo) => {
    console.log('photo ---', photo);
    fragment.append(renderThumbnail(photo));
  });
  container.append(fragment);
};


export { renderThumbnails };
