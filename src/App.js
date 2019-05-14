import React from 'react';
import Carousel from './components/carousel/Carousel';
import Header from './components/header/Header';
import Sponsors from './components/sponsors/Sponsors';
import DayColumns from './components/schedule/DayColumns';


function App() {
  return (
    <div>
      <Header/>
      <Carousel />
      <DayColumns/>
      <Sponsors />
    </div>
  );
}

export default App;
