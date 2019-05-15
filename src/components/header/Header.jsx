import React from 'react';
import Logo from './Logo';
import facebook from './../../assets/facebook.png';
import ig from './../../assets/instragram.png';
import twitter from './../../assets/twitter.png';
import search from './../../assets/search.png';
import NavBar from './NavBar';

function Header(){
  return(
    <div>
      <style jsx>{`
          .headerContainter{
            height: 68px;
            width: 100%;
            // border: 1px solid red;
            display: flex;
            align-items: center;

          }
          .languages{
            background-color: #b54719;
            color: white;
            padding: 20px;
            height: 40px;
            letter-spacing: 0.5px;
            text-decoration: none;

          }
          .socialIcons{
            width: 24px;
            height: 24px;
            padding-right: 7px;
            padding-left: 7px;
            align-self: center;
          }
          .rightHeader {
            width: 50%;
            display: flex;
            align-items: flex-end;
            flex-direction: row-reverse;
            // border: 1px solid red;
            padding-right: 10px;
          }
          .leftHeader{
            width: 50%;
            // border: 1px solid red;
              padding-left: 20px;

          }
          .subscribe{
            background-color: #b54719;
            color: white;
            text-transform: uppercase;
            padding: 12px;
            height: 40px;
            letter-spacing: 0.5px;
            border-radius: 5px;
          }
          .socialIconsIG{
            width: 32px;
            height: 32px;
            position: relative;
            top: 3px;
          }


      `}</style>
      <div className="headerContainter">
        <div className="leftHeader">
          <a className="languages" href="#">Languages</a>

            <img className="socialIcons"src={facebook} alt='logo for facebook'/>
            <img className="socialIconsIG"src={ig} alt='logo for instragram'/>
            <img className="socialIcons"src={twitter} alt='logo for twitter'/>

        </div>
        <div className="rightHeader">
          <img className="socialIcons"src={search} alt='magnigfying glass to search '/>
          <button className="subscribe"type="button">Subscribe to our newsletter</button>
        </div>
      </div>
      <Logo/>
      <NavBar/>
    </div>
  )
}
export default Header;
