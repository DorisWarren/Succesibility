import React from 'react';
import Carousel from './components/carousel/Carousel';
import Header from './components/header/Header';
import Sponsors from './components/sponsors/Sponsors';
import Footer from './components/footer/Footer';
import DayColumns from './components/schedule/DayColumns';
import WhatsFresh from './components/whatsFresh/WhatsFresh';



function App() {
  return (
    <div>
      <Header/>
      <Carousel />
      <DayColumns/>
      <WhatsFresh />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
