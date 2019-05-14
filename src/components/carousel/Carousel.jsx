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
      className: 'slides',
<<<<<<< HEAD
      accessibility: true
=======
      centerPadding: '0px',

      // objectFit: "none"
      // width: "100%"
>>>>>>> master
    };


    return (
      <div className="carouselDiv">
        <style jsx>{`
            // .carouselDiv{
            //   object-fit:fill;
            //   border: 1px solid red;
            // }


            `}</style>
        <Slider {...settings}>
          <div id="image1">
            <div className="overlay">
              <h1>CHECK OUT OUR LATEST NEWS</h1>
            </div>
          </div>
          <div id="image2">
            <div className="overlay">
              <h1>KING FARMERS MARKET</h1>
              <h3>Open Sundays 10am to 2pm</h3>
            </div>
          </div>
          <div id="image3">
            <div className="overlay">
              <h1>SHEMANSKI PARK FARMERS MARKET</h1>
              <h3>Open Wednesdays 10am to 2pm</h3>
            </div>
          </div>
          <div id="image4">
            <div className="overlay">
              <h1>PSU FARMERS MARKET</h1>
              <h3>Open Saturdays 8:30am to 2pm</h3>
            </div>
          </div>
          <div id="image5">
            <div className="overlay">
              <h1>KIDS COOK AT THE MARKET</h1>
              <h3>Registration now open!</h3>
            </div>
          </div>
        </Slider>
      </div>
    );
  }

}

export default Carousel;
