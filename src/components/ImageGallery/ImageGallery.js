import { Component } from 'react';
import { toast } from 'react-toastify';
import FuncLoader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
//import imageFetch from '../services/Pixabay';
import Button from '../Button/Button';

export default class ImageGallery extends Component {
  state = {
    imageValue: [],
    error: null,
    status: 'idle',
    page: 1,
    perPage: 12,
    showModal: false,
    src: null,
  };
  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.imageValue !== this.props.imageValue ||
      prevState.page !== this.state.page
    ) {
      const KEY_API = '23070790-299ad5e8dfdc75cc527267990';
      const BASE_URL =
        'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

      this.setState({ status: 'pending' });
      fetch(
        `${BASE_URL}&q=${this.props.imageValue}&page=${this.state.page}&per_page=12&key=${KEY_API}`,
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(
            new Error(
              `по вашему запросу ${this.props.imageValue}ничего не найдено`,
            ),
          );
        })
        .then(imageValue => {
          if (imageValue.hits.length === 0) {
            return toast.error(
              `ничего не найдено по запросу ${this.props.imageValue}`,
            );
          } else
            this.setState(prev => ({
              imageValue: [...prev.imageValue, ...imageValue],
              status: 'resolved',
            }));
        })

        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  mapper = imageValue => {
    return imageValue.map(
      ({ id, webformatURL: webformat, largeImageURL: largeImage, tags }) => ({
        id,
        webformat,
        largeImage,
        tags,
      }),
    );
  };

  handleClick = () => {
    this.setState(() => ({
      page: this.state.page + 1,
    }));
  };

  render() {
    const { imageValue, status } = this.state;
    if (status === 'idle') {
      return <div className="idleDiv">Enter name value</div>;
    }
    if (status === 'pending') {
      return <FuncLoader />;
    }
    if (status === 'rejected') {
      return <h1>такого имени нет {this.props.imageValue}</h1>;
    }
    if (status === 'resolved') {
      return (
        <div>
          <ul className="ImageGallery">
            {imageValue.hits.map(
              ({ id, webformatURL, tags, largeImageURL }) => (
                <ImageGalleryItem
                  key={id}
                  src={webformatURL}
                  alt={tags}
                  className="ImageGalleryItem-image"
                  showImageHandle={this.props.showImageHandler(largeImageURL)}
                />
              ),
            )}
            {this.state.showModal && <Modal />}
          </ul>
          <Button onClick={this.handleClick} />
        </div>
      );
    }
  }
}
