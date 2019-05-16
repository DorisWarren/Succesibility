import React from 'react';
import roosterPic from './../../assets/header-rooster.png';

function Rooster(){
  return(
    <section className="roosterContainer">
      <style jsx>{`
          .roosterPic {
            width: 100%;
            height: auto;

          }
          .roosterContainer h2 {
            text-align: center;
            text-transform: uppercase;
            margin: -10px;
            border: 1 px solid red;
            background-color: white;
          }

      `}</style>
    <img className="roosterPic" src={roosterPic} alt="Orange Rooster Logo"/>
    <h2>What's Fresh</h2>




    </section>
  )
}
export default Rooster;
