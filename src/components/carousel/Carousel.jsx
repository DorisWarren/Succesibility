import React from 'react';
import ImageGallery from 'react-image-gallery';

class Carousel extends React.Component {

  render() {

    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1'

      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/'

      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/'

      }
    ]

    return (
      <ImageGallery items={images} showThumbnails={false} showPlayButton={false} />
    );
  }

}

export default Carousel;
