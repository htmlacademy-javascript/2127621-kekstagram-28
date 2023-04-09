const modal = document.querySelector('.big-picture');
const modalImage = modal.querySelector('.big-picture__img img');
const modalCloseButton = modal.querySelector('.big-picture__cancel');
const modalCaption = modal.querySelector('.social__caption');
const modalLikes = modal.querySelector('.likes-count');
const commentTemplate = modal.querySelector('.social__comment');
const commentList = modal.querySelector('.social__comments');
const commentCount = modal.querySelector('.social__comment-count');
const loadButton = modal.querySelector('.social__comments-loader');

let comments = [];
let commentStatistic = 0;
let commentTotal = 0;

const escapeModalHandler = (evt) => {
  if (evt.key === 'Escape') {
    hideModal();
  }
};

const showModal = () => {
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', escapeModalHandler);
};

const hideModal = () => {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', escapeModalHandler);
};

const renderPhoto = (photo) => {
  modalImage.src = photo.url;
  modalImage.alt = photo.description;
  modalCaption.textContent = photo.description;
  modalLikes.textContent = photo.likes;
};

const closeModalHandler = () => {
  hideModal();
};

modalCloseButton.addEventListener('click', closeModalHandler);

const renderStatisticComments = () => {
  commentCount.innerHTML = `${commentStatistic} из <span class="comments-count">${commentTotal}</span> комментариев`;
};

const renderComment = (comment) => {
  const commentElement = commentTemplate.cloneNode(true);
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__text').textContent = comment.message;
  commentStatistic++;
  return commentElement;
};

const renderComments = () => {
  const dose = comments.splice(0, 5);
  const fragment = document.createDocumentFragment();
  dose.forEach((item) => {
    fragment.append(renderComment(item));
  });
  commentList.append(fragment);
  renderStatisticComments();
  if (!comments.length) {
    loadButton.classList.add('hidden');
  } else {
    loadButton.classList.remove('hidden');
  }
};

loadButton.addEventListener('click', (evt) => {
  renderComments();
});

const openModal = (photo) => {
  showModal();
  renderPhoto(photo);
  comments.length = 0;
  commentStatistic = 0;
  commentTotal = photo.comments.length;
  commentList.innerHTML = '';
  comments.push(...photo.comments.slice());
  renderComments();
};

export { openModal };
