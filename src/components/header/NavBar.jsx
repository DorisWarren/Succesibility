import React from 'react';

function NavBar(){
  return(
    <div>
      <style>{`
          .dropdown{
            position: relative;
            display: inline-block;
            height: 70px;
            display: flex;
            flex-direction: row;
          }
          .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f1f1f1;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
          }
          .dropdown-content a {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
          }
          .dropbtn:hover {
            background-color: #5f3917;
            color: white;
          }
          .dropdown-content a:hover {background-color: #ddd;}

          .dropdown:hover .dropdown-content {display: block;}
      `}</style>
    <div class="dropdown">
        <a href className="dropbtn">Markets</a>
      <div class="dropdown-content">
        <a href="#">PSU FARMERS</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <div class="dropdown">
        <a href className="dropbtn">Vendors</a>
      <div class="dropdown-content">
        <a href="#">PSU FARMERS</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <div class="dropdown">
        <a href className="dropbtn">Community</a>
      <div class="dropdown-content">
        <a href="#">PSU FARMERS</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <div class="dropdown">
        <a href className="dropbtn">Programs & Events</a>
      <div class="dropdown-content">
        <a href="#">PSU FARMERS</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <div class="dropdown">
        <a href className="dropbtn">Supports Us</a>
      <div class="dropdown-content">
        <a href="#">PSU FARMERS</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <div class="dropdown">
        <a href className="dropbtn">About Us</a>
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
