import React from 'react';
import logo from './../../assets/Logo.png';


function Logo(){
  return(
    <div>
      <style jsx>{`
          .logoHeader{
            margin-left: 250px;
            width: 232px;
            height: 126px;
            padding: 20px;
          }
      `}</style>
    <img className="logoHeader" src={logo} alt="Portland Farmers Market Logo"></img>
    </div>
  )
}
export default Logo;
