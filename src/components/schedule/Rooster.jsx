import React from 'react';
import roosterPic from './../../assets/header-rooster.png';

function Rooster(){
  return(
    <div className="roosterContainer">
      <style jsx>{`
          .roosterPic {
            width: 100%;
            height: auto;
          }
          .roosterContainer h2 {
            text-align: center;
            text-transform: uppercase;
            color:  black;
            margin: -10px;
            background-color: white;
          }

      `}</style>
    <img className="roosterPic" src={roosterPic} alt="Orange Rooster Logo"/>
    <h2>What's Fresh</h2>




    </div>
  )
}
export default Rooster;
