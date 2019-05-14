import React from 'react';
import amica from '../../assets/amica.png';
import daveskillerbread from '../../assets/daveskillerbread.png';
import pge from '../../assets/pge.jpg';

function Sponsors() {
  const styles={
  }
return (
    <div>
      <div styles={styles}>
        <style jsx>{`
          img {
            width: 20%;
            margin-right: 5%;
        `}</style>
      <h1></h1>
        <img src={amica} alt='amica'/>
        <img src={daveskillerbread} alt='daveskillerbread'/>
        <img src={pge} alt='pge'/>
      </div>
    </div>
  );
}

export default Sponsors;
