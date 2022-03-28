import styled from 'styled-components';

const MainContent = styled.div``;
const HeaderWrapper = styled.div`
    height: 66px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
`;

const PageWrapper = styled.div``;

const  BottomContainer = styled.div`
    position: relative;
    top: 66px;
`;

const Row = styled.div`
    display: flex;
    height: 240px;
    margin: 48px;
`;

const Column = styled.div`
    width: 100%;
    margin: 8px;
    padding: 16px;
    &.text {
        margin: auto;
    }
`;

const Image = styled.img`
    object-fit: cover;
`;

export { MainContent, HeaderWrapper, PageWrapper, BottomContainer, Row, Column, Image }; 