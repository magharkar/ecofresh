/**
 * @author Mugdha Agharkar
 */

import React, {useEffect, useState} from "react";
import Navbar from '../../components/Navbar/NavUser'
import { FooterContainer } from '../../components/Footer/FooterContainer'
import {Container, ImageWrapper, Heading, CartContainer, CartItems, PaymentInfo,
    Row,RowItem, ContentContainer, ContentWrapper, EmptyCart
} from './Cart.style';
import baseURL from "../../config";
import axios from "axios";
import uploadRecipeImg from '../../assets/pictures/uploadRecipeBg.png'
import AppButton from "../../components/Button/Button";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";

function Cart() {
    let email = localStorage.getItem("emailId");
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        getRecipeAPI();
      }, []);

    const getRecipeAPI = () => {
        const getRecipeURL = baseURL + '/cart/getAllItemsInCart/' + email;
        axios.get(getRecipeURL)
            .then(res => {
                const data = res.data;
                setCartItems(data);
            })
    }

    const handleCartUpdate = () => {
        setTimeout(getRecipeAPI(), 1000);
        
    }

    const { data, finalCost, shipping, subtotal, taxes } = cartItems;

    return(
        <Container>
            <Navbar />
            <ImageWrapper style={{backgroundImage: `url(${uploadRecipeImg})`}}>
                <ContentWrapper>
                    <ContentContainer>
                        {
                            data?.length > 0 ? (
                                <>
                                   <Heading>Your shopping cart</Heading>
                                        <CartContainer>
                                            <CartItems>
                                                {
                                                    data.map(item => (
                                                        <CartItem item={item} updateCart={handleCartUpdate}/>
                                                    ))
                                                }
                                            </CartItems>
                                            <PaymentInfo>
                                                <Row>
                                                    <RowItem>Sub-total</RowItem>
                                                    <RowItem>{subtotal}</RowItem>
                                                </Row>
                                                <Row>
                                                    <RowItem>Shipping</RowItem>
                                                    <RowItem>{shipping}</RowItem>
                                                </Row>
                                                <Row>
                                                    <RowItem>Taxes</RowItem>
                                                    <RowItem>{taxes}</RowItem>
                                                </Row>
                                                <Row>
                                                    <RowItem>Final Cost</RowItem>
                                                    <RowItem>{finalCost}</RowItem>
                                                </Row>
                                            </PaymentInfo>
                                            <AppButton color="secondary">Checkout And Pay</AppButton>
                                        </CartContainer>
                                    </>
                                ) : 
                                    <EmptyCart>Your cart looks empty. <Link to="/home">Click here</Link> to start ordering! </EmptyCart>
                            }
                        
                    </ContentContainer>
                </ContentWrapper>
            </ImageWrapper>
            <FooterContainer />
        </Container>
    )
}

export default Cart;