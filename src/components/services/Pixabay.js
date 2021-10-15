import axios from 'axios';

export default class PixabayFetch {
  constructor(BASE_URL, KEY_API) {
    this.BASE_URL = BASE_URL;
    this.KEY_API = KEY_API;
    this._searchQuery = 'banana';
    this.page = 1;
    this.perPage = 5;
  }
  get searchQuery() {
    return this._searchQuery;
  }
  set searchQuery(value) {
    return (this._searchQuery = value);
  }
  searchPhotos(BASE_URL, KEY_API) {
    let url = `${BASE_URL}&q=${this._searchQuery}&page=${this.page}&per_page=${this.perPage}&key=${KEY_API}`;

    axios
      .get(url)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
