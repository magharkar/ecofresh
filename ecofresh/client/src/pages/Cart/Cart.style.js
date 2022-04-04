/**
 * @author Mugdha Agharkar
 */

import styled from 'styled-components';

 const Container = styled.div`
    height: 100vh;
`;

const ImageWrapper = styled.div``;

const Heading = styled.h1`
    width: fit-content;
    margin: auto;
`;

const CartContainer = styled.div`
    display: flex;
`;

const CartItems = styled.div``;

const PaymentInfo = styled.div``;

const Row = styled.div``;

const RowItem = styled.div``;

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

const EmptyCart = styled.div`
    width: fit-content;
    margin: auto;
`;

export {Container, ImageWrapper, Heading, CartContainer, CartItems, PaymentInfo,
    Row,RowItem, ContentContainer, ContentWrapper, EmptyCart
}
