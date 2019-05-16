import React from 'react';
import { Wrapper, Button, Menu, MenuItem } from 'react-aria-menubutton';


class MenuButton extends React.Component {


  render() {
    const menuItemWords = this.props.menuItemWords;
    const menuItems = menuItemWords.map((word, i) => {
      return (
        <li key={i}>
          <a href="#">
          <MenuItem className='MyMenuButton-menuItem'>
            {word}
          </MenuItem>
        </a>
      </li>
      );
    });

    return (
      <Wrapper
        className='MyMenuButton'>
        <style jsx>{`
            .MyMenuButton-button{
              color: #5f3917;
              font-size: 20px;
            }
            .MyMenuButton-button:focus, .MyMenuButton-button:hover{
              background-color: #5f3917;
              padding-top: 10px;
              padding-bottom: 10px;
              color: white;
            }
            .MyMenuButton-menu ul {
              background-color: #f1f1f1;
              position: absolute;
              z-index: 1;
              text-align: center;
              list-style-type: none;
              font-size: 20px;
              padding: 12px 16px;
              text-decoration: none;
              margin-top: 10px;
            }
            .MyMenuButton-menuItem{
              color: brown;
              padding-top: 10px;
              padding-bottom: 10px;
            }
            .MyMenuButton-menu a {
              align-items: center;
            }
              `}</style>
        <Button className='MyMenuButton-button'>
          {this.props.buttonName} <span aria-hidden="true">&#x25be;</span>
        </Button>
        <Menu className='MyMenuButton-menu'>
          <ul>{menuItems}</ul>
        </Menu>
      </Wrapper>
    );
  }
}



export default MenuButton;
