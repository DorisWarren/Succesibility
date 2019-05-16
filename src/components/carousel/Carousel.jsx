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
      className: 'slides',
      accessibility: true,
      centerPadding: '0px'

    };


    return (
      <div className="carouselDiv" role="region" aria-label="carousel">
        <Slider {...settings}>
          <div id="image1">
            <div className="overlay">
              <a href="#">CHECK OUT OUR LATEST NEWS</a>
            </div>
          </div>
          <div id="image2">
            <div className="overlay">
              <a href="#">KING FARMERS MARKET</a>
              <p>Open Sundays 10am to 2pm</p>
            </div>
          </div>
          <div id="image3">
            <div className="overlay">
              <a href="#">SHEMANSKI PARK FARMERS MARKET</a>
              <p>Open Wednesdays 10am to 2pm</p>
            </div>
          </div>
          <div id="image4">
            <div className="overlay">
              <a href="#">PSU FARMERS MARKET</a>
              <p>Open Saturdays 8:30am to 2pm</p>
            </div>
          </div>
          <div id="image5">
            <div className="overlay">
              <a tabIndex="0">KIDS COOK AT THE MARKET</a>
              <p tabIndex="0">Registration now open!</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }

}

export default Carousel;
