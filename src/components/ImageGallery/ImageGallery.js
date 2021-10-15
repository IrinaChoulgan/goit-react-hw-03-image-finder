import { Component } from 'react';
import { toast } from 'react-toastify';
import Loader from 'react-loader-spinner';
// import s from '../ImageGallery/ImageGallery.module.css';

export default class ImageGallery extends Component {
  state = {
    imageValue: null,
    error: null,
    status: 'idle',
    page: null,
  };
  maxPages = 0;
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageValue !== this.props.imageValue) {
      console.log('изменилось имя');
      const KEY_API = '23070790-299ad5e8dfdc75cc527267990';
      const BASE_URL =
        'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
      // const page = 2;

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
          } else this.setState({ imageValue, status: 'resolved' });
        })
        .then(() => this.handleClick())
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  handleClick = () => {
    this.setState(() => ({
      page: (this.state.page += 1),
    }));
  };
  render() {
    const { children } = this.props;
    const { imageValue, status } = this.state;
    if (status === 'idle') {
      return <div>Enter name value</div>;
    }
    if (status === 'pending') {
      return <Loader type="TailSpin" color="#F08080" height={80} width={80} />;
    }
    if (status === 'rejected') {
      return <h1>такого имени нет {this.props.imageValue}</h1>;
    }
    if (status === 'resolved') {
      return (
        <div>
          <ul className="ImageGallery">
            {imageValue.hits.map(el => (
              <li className="ImageGalleryItem" key={el.id}>
                <img
                  src={el.webformatURL}
                  alt={el.tags}
                  className="ImageGalleryItem-image"
                />
              </li>
            ))}
          </ul>
          <button type="button" onClick={this.handleClick}>
            Load more
          </button>
        </div>
      );
    }
  }
}
