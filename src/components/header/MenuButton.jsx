import React from 'react';
import { Wrapper, Button, Menu, MenuItem } from 'react-aria-menubutton';

const menuItemWords = ['hello', 'bar', 'baz'];

class MenuButton extends React.Component {
  render() {
    const menuItems = menuItemWords.map((word, i) => {
      return (
        <li>
          <a href="#" key={i}>
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
              padding-top: 20px;
              padding-bottom: 20px;
              color: white;
              border: 1px solid red;
            }
            .MyMenuButton-menu ul {
              background-color: #f1f1f1;
              position: absolute;
              z-index: 1;
              text-align: center;
              list-style-type: none;
              margin: 0px;
              margin-top: 20px;
              padding: 0px;
              padding-right: 30px;
              padding-left: 30px;
              font-size: 20px;
            }
            .MyMenuButton-menuItem{
              text-align: center;
              position: relative;
              color: red;
              padding-top: 10px; 
              padding-bottom: 10px;
            }
            .MyMenuButton-menu a {
              align-items: center



            }



              `}</style>
        <Button className='MyMenuButton-button'>
          MARKETS <span aria-hidden="true">&#x25be;</span>
        </Button>
        <Menu className='MyMenuButton-menu'>
          <ul>{menuItems}</ul>
        </Menu>
      </Wrapper>
    );
  }
}



export default MenuButton;
