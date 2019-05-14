import React from 'react';
import Carousel from './components/carousel/Carousel';
import Header from './components/header/Header';
import Sponsors from './components/sponsors/Sponsors';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div>
      <Header/>
      <Carousel />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
