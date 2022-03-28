import React from 'react'
import { useState } from 'react'
import { Button } from '@mui/material';
import { Nav,Logo,MenuIcon, Menu, NavLinks, ButtonContainer } from './NavLanding.style'

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
            <NavLinks to="/about">About</NavLinks>
            <NavLinks to="/howItWorks">How It Works</NavLinks>
            <NavLinks to="/pricing">Pricing</NavLinks>

            <ButtonContainer className = "btn_container">
                <Button variant="contained" style={{color:"black", backgroundColor: "#FFFFFF"}}>LOGIN</Button>
                <Button variant="contained" style={{color:"black", backgroundColor: "#FDAD11"}}>SIGNUP</Button>
            </ButtonContainer>
        </Menu>
        <ButtonContainer className = "btn_container">
            <Button variant="contained" style={{color:"black", backgroundColor: "#FFFFFF"}}>LOGIN</Button>
            <Button variant="contained" style={{color:"black", backgroundColor: "#FDAD11"}}>SIGNUP</Button>
        </ButtonContainer>
    </Nav>
  )
}

export default Navbar;