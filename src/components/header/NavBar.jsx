import React from 'react';
import MenuButton from './MenuButton';


function NavBar(){

  return(
    <nav className="mainNavBar">
      <style>{`
          .mainNavBar{
            display: flex;
            padding-bottom: 10px;
            width: 95%;
            align-items: center;
            justify-content: flex-end;
          }
          .dropdown{
            padding-left: 10px;
            padding-right: 10px;
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

  </nav>
  );
}
export default NavBar;
