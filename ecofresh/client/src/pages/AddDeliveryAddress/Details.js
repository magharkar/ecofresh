import React from 'react'
import Navbar from "../../components/Navbar/NavUser";
import {
    HeaderWrapper,
    MainContent,
    PageWrapper,
    BottomContainer
} from "./AddDeliveryAddress.style";
import deliveryMan from "../../assets/pictures/delivery-man.jpeg";
import { FooterContainer } from "../../components/Footer/FooterContainer";
import { TextField, Box, Paper, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";


export default function Details() {

    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isSubmit) {
            navigate("/payment");
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // setFormErrors(validate(formValues));
        // setFormValues(formValues);
        setIsSubmit(true);
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
                <Box>

                    <Button name="Submit" onClick={handleSubmit} >
                        Submit
                    </Button>
                </Box>
                <FooterContainer />
            </BottomContainer>

        </PageWrapper>
    )
}
