import React from 'react';
import { Wrapper, Button, Menu, MenuItem } from 'react-aria-menubutton';

const menuItemWords = ['hello', 'bar', 'baz'];

class MenuButton extends React.Component {
  render() {
    const menuItems = menuItemWords.map((word, i) => {
      return (
        <a href="#" key={i}>
          <MenuItem className='MyMenuButton-menuItem'>
            {word}
          </MenuItem>
        </a>
      );
    });

    return (
      <Wrapper
        className='MyMenuButton'

      >
        <Button className='MyMenuButton-button'>
          MARKETS
        </Button>
        <Menu className='MyMenuButton-menu'>
          <ul>{menuItems}</ul>
        </Menu>
      </Wrapper>
    );
  }
}



export default MenuButton;
