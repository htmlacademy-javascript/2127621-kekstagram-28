import { getRandomInteger, createRandomIdFromRangeGenerator } from './utils.js';
import {
  PHOTOS_COUNT,
  DESCRIPTIONS,
  MIN_LIKES,
  MAX_LIKES,
  MIN_COMENTS,
  MAX_COMENTS,
  MIN_ID_COMENT,
  MAX_ID_COMENT,
  MIN_AVATAR,
  MAX_AVATAR,
  MESSAGES,
  NAMES
} from './constans.js';

const getUniqId = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);
const getUniqUrl = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);
const getUniqCommentId = createRandomIdFromRangeGenerator(MIN_ID_COMENT, MAX_ID_COMENT);

const getComment = () => ({
  id: getUniqCommentId(),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
});

const getComments = (count) => {
  const comments = [];
  for (let i = 0; i < count; i = i + 1) {
    comments.push(getComment());
  }
  return comments;
};

const getPhoto = () => ({
  id: getUniqId(),
  url: `photos/${getUniqUrl()}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length-1)],
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: getComments(getRandomInteger(MIN_COMENTS, MAX_COMENTS))
});

const getPhotos = (count) => {
  const photos = [];
  for (let i = 0; i < count; i = i + 1) {
    photos.push(getPhoto());
  }
  return photos;
};

export { getPhotos };
