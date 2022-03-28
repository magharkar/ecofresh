/**
 * @author Vibhor Bhatnagar
 */

import React from 'react'
import { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Nav,Logo,MenuIcon, Menu, NavLinks } from './NavUser.style'
<<<<<<< HEAD
import AccountMenu from '../Dropdown/HomeAccountDropdown';
=======
import HomeAccountDropdown from '../Dropdown/HomeAccountDropdown'
>>>>>>> vibhor_bhatnagar_b00895636

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
        <NavLinks to="/uploadRecipeNavigation">Upload Recipe</NavLinks>
        <div className="button_container">
<<<<<<< HEAD
          <ShoppingButton />
          <AccountMenu />
=======
        <ShoppingButton />
          <HomeAccountDropdown />
          
>>>>>>> vibhor_bhatnagar_b00895636
        </div>
      </Menu>
      <div className="button_container">
          <ShoppingButton />
<<<<<<< HEAD
          <AccountMenu />
=======
          <HomeAccountDropdown />
>>>>>>> vibhor_bhatnagar_b00895636
        </div>
    </Nav>
  )
}

const ShoppingButton = () => {
  return <button className="buttons"><ShoppingCartIcon /></button>;
};

export default Navbar