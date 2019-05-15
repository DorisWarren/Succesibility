import React from 'react';
import arrow from './../../assets/arrow.png';
import MenuButton from './MenuButton';


function NavBar(){

  return(
    <nav className="mainNavBar">
      <style>{`
          .mainNavBar{
            display: flex;
            width: 95%;
            align-items: center;
            justify-content: flex-end;

          }

          .dropbtn{
            // padding: 23px;
            font-size: 20px;
            border: none;
            text-transform: uppercase;
            color: #5f3917;
          }
          .dropdown-content {
            // margin-top 50px;
            display: none;
            position: absolute;
            background-color: #f1f1f1;
            min-width: 160px;
            // box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
          }
          .dropdown-content a {
            // margin-top: 10px;
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
          }
          .dropbtn:hover {
            background-color: #5f3917;
            color: white;
          }

          .dropdown-content a:hover {
            background-color: #ddd;
          }

          .dropdown:hover .dropdown-content {
            display: block;
          }
          span {
            padding-left: 10px;
          }

      `}</style>
    <div className="dropdown">
      <MenuButton
         menuItemWords={['hello', 'whats', 'up']}
         buttonName='MARKETS'
          />
    </div>
    <div className="dropdown">
      <MenuButton
        menuItemWords={['Victoria', 'Was', 'Here']}
        buttonName='VENDORS' />
    </div>
    <div className="dropdown">
      <MenuButton
        menuItemWords={['Chris', 'Was', 'Here']}
        buttonName='COMMUNITY' />
    </div>
    <div className="dropdown">
      <MenuButton
        menuItemWords={['Chris', 'Was', 'Here']}
        buttonName='PROGRAMS & EVENTS' />
    </div>
    <div className="dropdown">
      <MenuButton
        menuItemWords={['Chris', 'Was', 'Here']}
        buttonName='SUPPORT US' />
    </div>
    <div className="dropdown">
      <button className="dropbtn">About Us<span aria-hidden="true">&#x25be;</span></button>
      <div >
        <a href="#">PSU FARMERS</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  </nav>
  );
}
export default NavBar;
