import React from 'react';
import ImageGallery from 'react-image-gallery';

class Carousel extends React.Component {

  render() {

    const images = [
      {
        original: require('../../assets/Asparagus_PSU_2018.jpg')

      },
      {
        original: require('../../assets/pfmkids_99-credit-midres.jpg')

      },
      {
        original: require('../../assets/RKH_1030-resized-cropped.jpg')

      },
      {
        original: require('../../assets/RKH_1887-resized.jpg')

      },
      {
        original: require('../../assets/RKH_1933-resized.jpg')

      },

    ]

    return (
      <div>
      <ImageGallery items={images} showThumbnails={false} showPlayButton={false} />
      </div>
    );
  }

}

export default Carousel;
