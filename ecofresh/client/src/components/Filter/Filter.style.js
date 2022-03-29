/**
 * @author Mugdha Agharkar
 */

import styled from "styled-components";

const Container = styled.div`
 width: 300px;
 background-color: #1d3124;
 color: white;
`;

const FilterText = styled.div`
    padding: 40px 0px;
    font-weight: bold;
    font-size : 24px;  
    width: 70px;
    margin: 0 auto;
    color: #FDAD11;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 24px 40px;
`;


export {Container, FilterText, ButtonContainer};