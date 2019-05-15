import React from 'react';
import logo from './../../assets/Logo.png';
import MenuButton from './MenuButton';

function Logo(){
  return(
    <div>
      <style jsx>{`
          .logoHeader{
            margin-left: 250px;
            width: 232px;
            height: 126px;
          }
      `}</style>
    <img className="logoHeader" src={logo} alt="Portland Farmers Market Logo"></img>
    <MenuButton />
    </div>
  )
}
export default Logo;
