import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
`;

const Row = styled.div`
    paddingTop: 8px;
`;

const ContentContainer = styled.div`
    background-color: #FFF; 
    padding: 32px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
`;

const ContentWrapper = styled.div`
    padding: 60px;
    @media (min-width: 1365px) {
        width: 1305px;
    margin: auto;
    }
    @media (max-width: 478px) {
        background-color: #FFF;
        padding: 0;
    }
`;

const ImageWrapper = styled.div``;

const Heading = styled.h1`
    width: fit-content;
    margin: auto;
`;

const SubHeader = styled.h3`
    width: fit-content;
    margin: auto;
`;

export {Container, Heading, ImageWrapper, ContentWrapper, ContentContainer, Row, SubHeader}