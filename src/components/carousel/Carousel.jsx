import React from 'react';
import ImageGallery from 'react-image-gallery';

class Carousel extends React.Component {

  render() {

    const images = [
      {
        original: require('../../assets/Asparagus_PSU_2018.jpg'),
        originalAlt: 'A bunch of asparagus',
        originalTitle: 'Check Out Out Latest News',
        description: 'Large bunches of asparagus held together with blue rubber bands fill the page'

      },
      {
        original: require('../../assets/pfmkids_99-credit-midres.jpg'),
        originalAlt: 'Children making food together',
        originalTitle: 'Kids Cook at the Market',
        description: 'Three children are learning to cook at a picnic table outside. They are being assisted by two women.'

      },
      {
        original: require('../../assets/RKH_1030-resized-cropped.jpg'),
        orginalAlt: 'Bouquets of pink and yellow flowers',
        originalTitle: 'PSU Farmers Market',
        description: 'A closeup image of three bouquets of pink and yellow flowers.'

      },
      {
        original: require('../../assets/RKH_1887-resized.jpg'),
        originalAlt: 'Bunches of Swiss Chard',
        originalTitle: 'Shemanski Park Farmers Market',
        description: 'Bunches of red-stalked swiss chard are displayed with their leaves trimmed.'

      },
      {
        original: require('../../assets/RKH_1933-resized.jpg'),
        oringalAlt: 'Bunches of organic Welsh onions',
        originalTitle: 'King Farmers Market',
        description: 'A basket containing several bunches of long Welsh onions with yellow organic labels and thin purple bulbs.'

      },

    ]

    return (
      <div>
      <ImageGallery
        items={images}
        showThumbnails={false}
        showPlayButton={false} />
      </div>
    );
  }

}

export default Carousel;
