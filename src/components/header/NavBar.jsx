import React from 'react';

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
          .dropdown{
            position: relative;
            display: inline-block;
          }
          .dropbtn{
            padding: 23px;
            font-size: 20px;
            border: none;
            text-transform: uppercase;
          }
          .dropdown-content {
            border: 1px solid red;
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
          .dropdown-content a:hover {background-color: #ddd;}

          .dropdown:hover .dropdown-content {display: block;}
      `}</style>
    <div class="dropdown">
       <button class="dropbtn">Markets</button>
      <div class="dropdown-content">
        <a href="#">PSU FARMERS</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <div class="dropdown">
         <button class="dropbtn">Vendors</button>
      <div class="dropdown-content">
        <a href="#">PSU FARMERS</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <div class="dropdown">
         <button class="dropbtn">Community</button>
      <div class="dropdown-content">
        <a href="#">PSU FARMERS</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <div class="dropdown">
         <button class="dropbtn">Programs & Events</button>
      <div class="dropdown-content">
        <a href="#">PSU FARMERS</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <div class="dropdown">
         <button class="dropbtn">Support Us</button>
      <div class="dropdown-content">
        <a href="#">PSU FARMERS</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <div class="dropdown">
       <button class="dropbtn">About Us</button>
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
