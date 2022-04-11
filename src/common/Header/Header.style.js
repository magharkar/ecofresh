import styled from "styled-components";

const Wrapper = styled.div`
    background-color: #1D3124;
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
    justify-content: space-between;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    &.buttons {
        width: 190px;
        justify-content: space-between;
    }
`;

const LinkText = styled.div`
    color: white;
`;

const LogoText = styled.div`
    color: #FDAD11;
    padding: 12px;
`;


export { Wrapper, FlexContainer, LinkText, LogoText }