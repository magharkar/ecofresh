import React from 'react'
import { useState } from 'react'
import { Button } from '@mui/material';
import { Nav,Logo,MenuIcon, Menu, NavLinks, ButtonContainer } from './NavLanding.style'

function Navbar(props) {

  const [isClicked, setIsClicked] = useState(false);
  const { hideButtons } = props;

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

            {
                !hideButtons && (
                    <ButtonContainer className = "btn_container">
                        <Button variant="contained" style={{color:"black", backgroundColor: "#FFFFFF"}}>LOGIN</Button>
                        <Button variant="contained" style={{color:"black", backgroundColor: "#FDAD11"}}>SIGNUP</Button>
                    </ButtonContainer>
                )
            }

           
        </Menu>
            {
                !hideButtons && (
                    <ButtonContainer className = "btn_container">
                        <Button variant="contained" style={{color:"black", backgroundColor: "#FFFFFF"}}>LOGIN</Button>
                        <Button variant="contained" style={{color:"black", backgroundColor: "#FDAD11"}}>SIGNUP</Button>
                    </ButtonContainer>
                )
            }
    </Nav>
  )
}

export default Navbar;