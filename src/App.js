import React from 'react';
import Carousel from './components/carousel/Carousel';
import Header from './components/header/Header';
import Sponsors from './components/sponsors/Sponsors';
import DayColumns from './components/schedule/DayColumns';
import UpcomingEvents from './components/upcomingEvents/UpcomingEvents';


function App() {
  return (
    <div>
      <Header/>
      <Carousel />
      <DayColumns/>
      <UpcomingEvents/>
      <Sponsors />
    </div>
  );
}

export default App;
