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
      <div className="carouselDiv" role="region" aria-roledescription="carousel">
        <Slider {...settings}>
          <div id="image1">
            <div className="overlay">
              <h1 tabindex="0">CHECK OUT OUR LATEST NEWS</h1>
            </div>
          </div>
          <div id="image2">
            <div className="overlay">
              <h1 tabindex="0">KING FARMERS MARKET</h1>
              <h3 tabindex="0">Open Sundays 10am to 2pm</h3>
            </div>
          </div>
          <div id="image3">
            <div className="overlay">
              <h1 tabindex="0">SHEMANSKI PARK FARMERS MARKET</h1>
              <h3 tabindex="0">Open Wednesdays 10am to 2pm</h3>
            </div>
          </div>
          <div id="image4">
            <div className="overlay">
              <h1 tabindex="0">PSU FARMERS MARKET</h1>
              <h3 tabindex="0">Open Saturdays 8:30am to 2pm</h3>
            </div>
          </div>
          <div id="image5">
            <div className="overlay">
              <h1 tabindex="0">KIDS COOK AT THE MARKET</h1>
              <h3 tabindex="0">Registration now open!</h3>
            </div>
          </div>
        </Slider>
      </div>
    );
  }

}

export default Carousel;
