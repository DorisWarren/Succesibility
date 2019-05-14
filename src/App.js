import React from 'react';
import Carousel from './components/carousel/Carousel';
import Header from './components/header/Header';
import Sponsors from './components/sponsors/Sponsors';
import Footer from './components/footer/Footer';
import DayColumns from './components/schedule/DayColumns';



function App() {
  return (
    <div>
      <Header/>
      <Carousel />
      <DayColumns/>
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
