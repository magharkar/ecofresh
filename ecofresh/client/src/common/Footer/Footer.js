import React from "react";
import { IconContainer, LeftContainer, Wrapper, AppLogo, LinkText, RightContainer } from './Footer.style';
import TwitterIcon  from '@mui/icons-material/Twitter';
import WhatsappIcon  from '@mui/icons-material/WhatsApp';
import FacebookIcon  from '@mui/icons-material/Facebook';

function Footer() {
    return(
        <Wrapper>
            <LeftContainer>
                <AppLogo> © EcoFresh</AppLogo>
                <LinkText>Terms And Conditions</LinkText>
                <LinkText>Privacy</LinkText>
            </LeftContainer>

            <RightContainer>
                <IconContainer><FacebookIcon sx={{ color: 'white' }} /></IconContainer>
                <IconContainer><WhatsappIcon sx={{ color: 'white' }} /></IconContainer>
                <IconContainer><TwitterIcon sx={{ color: 'white' }} /></IconContainer>
            </RightContainer>
        </Wrapper>
    )
}

export default Footer;