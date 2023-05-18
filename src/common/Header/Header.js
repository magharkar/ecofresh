import { Button } from "@mui/material";
import React from "react";
import { LinkText } from "../Footer/Footer.style";
import { Wrapper, FlexContainer, LogoText } from './Header.style';

function Header() {
    return(
        <Wrapper>
           <FlexContainer>
               <LogoText>EcoFresh</LogoText>
           </FlexContainer>

           <FlexContainer>
               <LinkText>About after upload #1</LinkText>
               <LinkText>How It Works</LinkText>
               <LinkText>Pricing</LinkText>
           </FlexContainer>
           <FlexContainer className="buttons">
               <Button variant="contained" style={{color: 'black', backgroundColor: "#FFFFFF"}}>LOGIN</Button>
               <Button variant="contained" style={{color: 'black', backgroundColor: "#FDAD11"}}>SIGNUP</Button>
           </FlexContainer>
        </Wrapper>
    )
}

export default Header;