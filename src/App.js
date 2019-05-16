import React from 'react';
import Carousel from './components/carousel/Carousel';
import Header from './components/header/Header';
import Sponsors from './components/sponsors/Sponsors';
import Footer from './components/footer/Footer';
import DayColumns from './components/schedule/DayColumns';
import WhatsFresh from './components/whatsFresh/WhatsFresh';
import UpcomingEvents from './components/upcomingEvents/UpcomingEvents';




function App() {
  const overflowContent = {
    overflow: 'hidden',
  }
  return (
    <div style={overflowContent}>
      <Header/>
      <Carousel />
      <DayColumns/>
      <WhatsFresh />
      <UpcomingEvents/>
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
