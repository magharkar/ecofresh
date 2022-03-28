import { Button } from "@mui/material";
import React from "react";
import { Link } from "../Footer/Footer.style";
import { Wrapper, FlexContainer, LogoText } from './Header.style';
import AppButton from '../Button/Button';

function Header() {
    return(
        <Wrapper>
           <FlexContainer>
               <LogoText>EcoFresh</LogoText>
               <AppButton>dasdasd</AppButton>
               <AppButton color="secondary">dasdasd</AppButton>
           </FlexContainer>

           <FlexContainer>
               <Link>About</Link>
               <Link>How It Works</Link>
               <Link>Pricing</Link>
           </FlexContainer>
           <FlexContainer className="buttons">
               <Button variant="contained" style={{color: 'black', backgroundColor: "#FFFFFF"}}>LOGIN</Button>
               <Button variant="contained" style={{color: 'black', backgroundColor: "#FDAD11"}}>SIGNUP</Button>
           </FlexContainer>
        </Wrapper>
    )
}

export default Header;