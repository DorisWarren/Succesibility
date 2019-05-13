import React from 'react';
import Slider from 'react-slick';




class Carousel extends React.Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };


    return (
      <div>
      <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src={require('./../..assets/Asparagus_PSU_2018.jpg')}
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>

      </div>
    );
  }

}

export default Carousel;
