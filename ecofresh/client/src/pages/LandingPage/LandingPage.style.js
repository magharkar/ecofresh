import styled from 'styled-components';

const MainContent = styled.div`
    padding-bottom: 100px;
     @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;
const HeaderWrapper = styled.div`
    height: 58px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
`;

const PageWrapper = styled.div`
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    height: 240px;
    margin: 45px;

    @media (max-width:768px) {
        flex-direction: column;
    }

    &.row2 {
        margin-top: 100px;
        @media (max-width:768px) {
            margin-top: 250px;
        }
    }
`;

const Column = styled.div`
    width: 50%;
    margin-top: 8px;
    padding: 16px;
    p {
        margin: auto;
        margin-top: 10px;
        text-align: center;
        font-weight: 400;
    }
    h3 {
        text-align: center;
    }
    h4 {
        text-align: center;
        border-bottom: 2px solid #FDAD11;
        width: 200px;
        margin: 0 auto;
        margin-top: 10px;
        padding-bottom: 10px;
        color: #1D3124;
    }

    div {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    @media (max-width: 768px) {
        width: 100%;
        margin-left: -10px;
    }
`;

const Image = styled.img`
    object-fit: cover;
`;

const BottomContain = styled.div`
    height: 120px;
    @media (max-width:768px){
        padding-top: 150px;
    }
`;

export { MainContent, HeaderWrapper, PageWrapper, Row, Column, Image, BottomContain }; 