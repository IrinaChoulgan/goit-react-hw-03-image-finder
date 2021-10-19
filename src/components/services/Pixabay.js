// const imageFetch = (imageValue, page) => {
//   const KEY_API = '23070790-299ad5e8dfdc75cc527267990';
//   const BASE_URL = 'https://pixabay.com/api/';

//   fetch(
//     `${BASE_URL}&q=${imageValue}&page=${page}&per_page=12&key=${KEY_API}`,
//   ).then(res => {
//     return res.json();
//   });
// };

// export default imageFetch;

function fetchImages(imageValue, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '23070790-299ad5e8dfdc75cc527267990';
  return fetch(
    `${BASE_URL}?q=${imageValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  )
    .then(response => response.json())
    .then(data => ({ images: data.hits, totalHits: data.totalHits }));
}

const api = {
  fetchImages,
};

export default api;
