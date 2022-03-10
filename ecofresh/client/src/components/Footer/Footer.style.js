import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-top: 47px;
`;
const IconContainer = styled.div`
    padding: 12px;
`;

const LeftContainer = styled.div`
    display: flex;
    line-height: 24px;
    margin: auto;
    flex-wrap: wrap;
`;

const RightContainer = styled.div`
    display: flex;
    line-height: 24px;
    margin: auto;
    flex-wrap: wrap;
`;

const AppLogo = styled.div`
    color: #FDAD11;
    padding: 12px;
`;

const LinkText = styled.div`
    color: #FFFFFF;
    padding: 12px;
`;

export { Wrapper, IconContainer, LeftContainer, RightContainer, AppLogo, LinkText };