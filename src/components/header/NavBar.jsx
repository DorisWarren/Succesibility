import React from 'react';
import arrow from './../../assets/arrow.png';

function NavBar(){
  return(
    <div className="mainNavBar">
      <style>{`
          .mainNavBar{
            display: flex;
            width: 95%;
            align-items: center;

            justify-content: flex-end;

          }
          .arrow{
            width:20px;
          }
          .dropdown{
            position: relative;
            display: inline-block;
          }
          .dropbtn{
            padding: 23px;
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
          .arrow:hover {
            filter: brightness(0) invert(1);
          }
          .dropdown-content a:hover {background-color: #ddd;}

          .dropdown:hover .dropdown-content {display: block;}
      `}</style>
    <div class="dropdown">
       <button aria-haspopup="true" aria-expanded="false" class="dropbtn">Markets<span aria-hidden="true">&#x25be;</span></button>
      <div role="menu" class="dropdown-content">
        <a role="menuitem" tabindex="-1" href="#">PSU FARMERS</a>
        <a role="menuitem" tabindex="-1" href="#">Link 2</a>
        <a role="menuitem" tabindex="-1" href="#">Link 3</a>
      </div>
    </div>
    <div class="dropdown">
         <button class="dropbtn">Vendors<span aria-hidden="true">&#x25be;</span></button>
      <div class="dropdown-content">
        <a href="#">PSU FARMERS</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <div class="dropdown">
         <button class="dropbtn">Community<span aria-hidden="true">&#x25be;</span></button>
      <div class="dropdown-content">
        <a href="#">PSU FARMERS</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <div class="dropdown">
         <button class="dropbtn">Programs & Events<span aria-hidden="true">&#x25be;</span></button>
      <div class="dropdown-content">
        <a href="#">PSU FARMERS</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <div class="dropdown">
         <button class="dropbtn">Support Us<span aria-hidden="true">&#x25be;</span></button>
      <div class="dropdown-content">
        <a href="#">PSU FARMERS</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <div class="dropdown">
       <button class="dropbtn">About Us<span aria-hidden="true">&#x25be;</span></button>
      <div class="dropdown-content">
        <a href="#">PSU FARMERS</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    </div>
  );
}
export default NavBar;
