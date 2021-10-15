import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from './components/Button/Button';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
// import Loader from './components/Loader/Loader';
// import Modal from './components/Modal/Modal';
import Searchbar from './components/Searchbar/Searchbar';
//import PixabayFetch from './components/services/Pixabay';
// import axios from 'axios';

// const KEY_API = '23070790-299ad5e8dfdc75cc527267990';
// const BASE_URL = 'https://pixabay.com/api';
// axios.defaults.baseURL = BASE_URL;
// axios.defaults.headers.common.Authorization = KEY_API;
// console.dir(axios);
// const newPixabayFetch = new PixabayFetch(BASE_URL, KEY_API);
// console.log(newPixabayFetch.searchPhotos(BASE_URL, KEY_API));
// let searchQuery = 'banana';
// let searchPage = 1;
// let searchPerPage = 5;
//let params = `?key=${KEY_API}&q=${searchQuery}&page=${searchPage}&per_page=${searchPerPage}`;
// let url = `${BASE_URL}&q=${searchQuery}&page=${searchPage}&per_page=${searchPerPage}&key=${KEY_API}`;

export default class App extends Component {
  state = {
    imageValue: '',
  };
  handleFormSubmit = imageValue => {
    this.setState({ imageValue });
  };
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imageValue={this.state.imageValue}>
          {/* <ImageGalleryItem imageValue={this.state.imageValue} /> */}
        </ImageGallery>
        {/* <Button /> */}
        <ToastContainer />
      </div>
    );
  }
}
