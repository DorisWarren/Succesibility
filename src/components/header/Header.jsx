import React from 'react';
import Logo from './Logo';
import facebook from './../../assets/facebook.png';
import ig from './../../assets/instragram.png';
import twitter from './../../assets/twitter.png';
import search from './../../assets/search.png';
import NavBar from './NavBar';

function Header(){
  return(

    <header className="viewContainer">

      <style jsx>{`
          .viewContainer{
            max-width: 1140px;
            margin: auto;
          }
          .headerContainter{
            height: 68px;
            width: 100%;
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
            padding-right: 10px;
          }
          .leftHeader{
            width: 50%;
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
    <section className="headerContainter">
        <div className="leftHeader">
          <a className="languages" href="#">Languages</a>
          <a href="#"><img className="socialIcons"src={facebook} alt='logo for facebook'/></a>
          <a href="#"><img className="socialIconsIG"src={ig} alt='logo for instragram'/></a>
          <a href="#"><img className="socialIcons"src={twitter} alt='logo for twitter'/></a>
        </div>
        <div className="rightHeader">
          <img role = "search" className="socialIcons"src={search} alt='magnigfying glass to search '/>
          <button className="subscribe"type="button">Subscribe to our newsletter</button>
        </div>
      </section>
      <Logo/>
      <NavBar/>
    </header>
  )
}
export default Header;
