import React from 'react'
import { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Nav,Logo,MenuIcon, Menu, NavLinks } from './NavUser.style'
import AccountMenu from '../Dropdown/HomeAccountDropdown';

function Navbar() {

  const [isClicked, setIsClicked] = useState(false);

  return (
    <Nav>
      <Logo href="">
        E<span>co</span>F<span>resh</span>
      </Logo>

      <MenuIcon onClick={() => setIsClicked(!isClicked)}>
        <span />
        <span />
        <span />
      </MenuIcon>
      
      <Menu isClicked={isClicked}>
        <NavLinks to="/home">Home</NavLinks>
        <NavLinks to="/uploadRecipe">Upload Recipe</NavLinks>
        <div className="button_container">
          <ShoppingButton />
          <AccountMenu />
        </div>
      </Menu>
      <div className="button_container">
          <ShoppingButton />
          <AccountMenu />
        </div>
    </Nav>
  )
}

const ShoppingButton = () => {
  return <button className="buttons"><ShoppingCartIcon /></button>;
};

export default Navbar