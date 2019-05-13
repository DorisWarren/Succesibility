import React from 'react';
import Slider from 'react-slick';
import './styles.scss'




class Carousel extends React.Component {

  render() {
    const settings = {
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      adaptiveHeight: true,
      fade: true,
      arrows: true,
      autoplaySpeed: 5000,
      className: 'slides'
    };


    return (
      <div>
      <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src={require('../../assets/Asparagus_PSU_2018.jpg')}></img>
          </div>
          <div>
            <img src={require('../../assets/pfmkids_99-credit-midres.jpg')}></img>
          </div>
          <div>
            <img src={require('../../assets/RKH_1030-resized-cropped.jpg')}></img>
          </div>
          <div>
            <img src={require('../../assets/RKH_1887-resized.jpg')}></img>
          </div>
          <div>
            <img src={require('../../assets/RKH_1933-resized.jpg')}></img>
          </div>

        </Slider>

      </div>
    );
  }

}

export default Carousel;
