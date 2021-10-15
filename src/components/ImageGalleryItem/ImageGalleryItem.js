import { Component } from 'react';
import s from '../ImageGalleryItem/ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    const { imageValue } = this.props;
    return (
      <div>
        {imageValue.hits.map(el => (
          <li className="ImageGalleryItem" key={el.id}>
            <img
              src={el.webformatURL}
              alt={el.tags}
              className="ImageGalleryItem-image"
            />
          </li>
        ))}
      </div>
    );
  }
}
