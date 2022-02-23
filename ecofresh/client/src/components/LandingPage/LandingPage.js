/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Footer from "../../common/Footer/Footer";
import Header from "../../common/Header/Header";
import { FooterWrapper, HeaderWrapper, MainContent, PageWrapper, BottomContainer, Row,
  Column, Image } from "./LandingPage.style";
import landingPageImg from '../../assets/landing-page.png';
import frenchOnion from '../../assets/french-onion.jpeg';
import lasagnaSoup from '../../assets/lasagna-soup.webp';

function LandingPage() {
  return (
    <PageWrapper>
        <HeaderWrapper>
            <Header />
        </HeaderWrapper>

        <BottomContainer>
            <MainContent>
                <img src={landingPageImg} width="100%"/>
                <Row>
                    <Column className="text">
                    Loremm Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Column>
                    <Column><Image src={frenchOnion} width="100%" height="100%"/></Column>
                </Row>
                <Row>
                    <Column><Image src={lasagnaSoup} width="100%" height="100%"/></Column>
                    <Column className="text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Column>
                </Row>
            </MainContent>

            <FooterWrapper>
                <Footer />
            </FooterWrapper>
        </BottomContainer>
       
    </PageWrapper>
  );
}

export default LandingPage;