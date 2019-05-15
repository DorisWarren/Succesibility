import React from 'react';
import roosterPic from './../../assets/header-rooster.png';

function Rooster(){
  return(
    <div className="roosterContainer">
      <style jsx>{`
          .roosterContainer{
            background: linear-gradient(#edeee2 0%, #edeee2 50%, white 50%, white 100% )
          }
          .roosterPic {
            width: 100%;
            height: auto;
          }
          h1 {
            text-align: center;
            text-transform: uppercase;
            color:  #5f3917;
            margin: -10px;
          }

      `}</style>
    <img className="roosterPic" src={roosterPic} alt="Medium size image of rooster"/>
    <h1>What's Fresh</h1>




    </div>
  )
}
export default Rooster;
