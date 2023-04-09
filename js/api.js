import { GET_DATA, POST_DATA } from './constans.js';

const getPhotos = () =>
  fetch(GET_DATA)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error();
    });

const postPhoto = (data) =>
  fetch(POST_DATA, {
    method: 'post',
    body: data,
  });

export { getPhotos, postPhoto };
