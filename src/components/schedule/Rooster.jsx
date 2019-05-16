import React from 'react';
import roosterPic from './../../assets/header-rooster.png';

function Rooster(){
  return(
    <div className="roosterContainer">
      <style jsx>{`
          .roosterContainer{
            background: linear-gradient(#616429 0%, #616429 50%, white 50%, white 100% )
          }
          .roosterPic {
            width: 100%;
            height: auto;
          }
          h2 {
            text-align: center;
            text-transform: uppercase;
            color:  black;
            margin: -10px;
          }

      `}</style>
    <img className="roosterPic" src={roosterPic} alt="Orange Rooster Logo"/>
    <h2>What's Fresh</h2>




    </div>
  )
}
export default Rooster;
