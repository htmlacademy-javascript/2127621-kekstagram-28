import { getPhotos } from './data.js';
import { PHOTOS_COUNT } from './constans.js';
import { renderThumbnails } from './thumbnail.js';
import './form.js';

renderThumbnails(getPhotos(PHOTOS_COUNT));
