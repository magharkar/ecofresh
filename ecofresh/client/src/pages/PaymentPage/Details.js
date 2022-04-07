/**
 * @author Meha Desai
 */

import React from 'react'
import Navbar from "../../components/Navbar/NavUser";
import {
    HeaderWrapper,
    MainContent,
    PageWrapper,
    BottomContainer,
    Row,
    Column
} from "./Details.style";
import deliveryMan from "../../assets/pictures/delivery-man.jpeg";
import { FooterContainer } from "../../components/Footer/FooterContainer";
import { Box, Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Typography } from 'antd';
import AppButton from "../../components/Button/Button";
import axios from 'axios';
import baseURL from '../../config';
import CartItem from "../../components/CartItem/CartItem";

const { Title } = Typography;

export default function Details() {
    let email = localStorage.getItem("emailId");
    const [isSubmit, setIsSubmit] = useState(false);
    const [formValues, setFormValues] = useState({});
    // const [cartItems, setCartItems] = useState([]);
    // const [data, setData] = useState('');
    // const [finalCost, setFinalCost] = useState('');

    const navigate = useNavigate();
    const { state } = useLocation()
    const [api_url, setAPIUrl] = useState(baseURL + '/api/paymentDetails');
    // console.log(state?.formValues)


    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    const finalCost = JSON.parse(localStorage.getItem("cartItems")).finalCost;
    // console.log(data)
    // const finalCost = localStorage.getItem("finalCost");
    // console.log(finalCost)

    useEffect(() => {
        // localStorage.setItem("cartItems", JSON.stringify(state?.cartItems))

        // getRecipeAPI();
        setFormValues(state?.formValues)
        axios.get(api_url)
            .then(res => {
                const data = res.data;
                // console.log(data); 
            })

    }, []);

    // const getRecipeAPI = () => {
    //     const getRecipeURL = baseURL + '/cart/getAllItemsInCart/' + email;
    //     axios.get(getRecipeURL)
    //         .then(res => {
    //             const data = res.data;
    //             setCartItems(data);
    //         })
    // }

    // const { data, finalCost, shipping, subtotal, taxes } = cartItems;

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true);
        navigate("/payment", {
            state: { formValues: state?.formValues }
        })

    };


    return (
        <PageWrapper>
            <HeaderWrapper>
                <Navbar />
            </HeaderWrapper>

            <BottomContainer>
                <MainContent>
                    <img src={deliveryMan} width="100%" height="310px" />
                </MainContent>

                <Paper elevation={3}
                    sx={{
                        width: "50%",
                        marginTop: "auto",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }} >
                    <Box textAlign="left"

                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "90%",
                            justifyContent: "center",
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginTop: "50px",
                            marginBottom: "50px"
                        }}>
                        <Box>
                            <Box textAlign="center" sx={{
                                marginBottom: "50px",
                                marginTop: "30px"
                            }}>
                                <Title level={1} className="title">
                                    Delivery Details
                                </Title>
                            </Box>
                            <Row>
                                <Column>
                                    <strong> User ID: </strong>
                                </Column>
                                <Column>
                                    {email}
                                </Column>
                            </Row> <hr />
                            <Row>
                                <Column>
                                    <strong> Delivery Address: </strong>
                                </Column>
                                <Column>
                                    {state?.formValues.apartmentNumber} - {state?.formValues.address}, {state?.formValues.city}, {state?.formValues.province}, {state?.formValues.postal}
                                </Column>
                            </Row>
                            <Row>
                                <Column>
                                    <strong> Instructions for Delivery: </strong>
                                </Column>
                                <Column>
                                    {state?.formValues.instructions}
                                </Column>
                            </Row>
                            <Row>
                                <Column>
                                    <strong> Estimate Delivery Time: </strong>
                                </Column>
                                <Column>
                                    60 Minutes
                                </Column>
                            </Row> <hr />
                            <Row>
                                <Column>
                                    <strong> Your Orders: </strong>
                                </Column>
                                <Column>
                                    {
                                        cartItems?.data?.map((item, key) => (
                                            <div key={key}>{key + 1}. {item.recipeName}</div>
                                        ))
                                    }
                                </Column>
                            </Row> <hr />
                            <Row>
                                {/* <label><strong> Add Promocode: </strong></label>
                                <TextField
                                    width="50%"
                                    required
                                    id="outlined-required"
                                    name="promo"
                                    label="Add Promocode"
                                    placeholder="Enter Promocode"
                                    margin="normal"
                                value={formValues.fname}
                                onChange={handleChange} */}

                                {/* /> */}

                            </Row> <hr />
                            <Row>
                                <Column>
                                    <strong> Subtotal: </strong>
                                </Column>
                                <Column>
                                    CAD {parseFloat(finalCost).toFixed(2)}
                                </Column>
                            </Row>
                        </Box>
                        <Box textAlign="center" sx={{
                            marginBottom: "50px",
                            marginTop: "30px"
                        }}>
                            <AppButton color="secondary"
                                onClick={handleSubmit} >
                                Pay Now
                            </AppButton>
                        </Box>
                    </Box>
                </Paper>
                <FooterContainer />
            </BottomContainer>

        </PageWrapper>
    )
}
