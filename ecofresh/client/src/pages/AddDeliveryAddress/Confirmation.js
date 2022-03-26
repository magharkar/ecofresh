import React from 'react'
import Navbar from "../../components/Navbar/NavUser";
import { Typography } from "antd";
import {
    HeaderWrapper,
    MainContent,
    PageWrapper,
    BottomContainer
} from "./AddDeliveryAddress.style";
import deliveryMan from "../../assets/pictures/delivery-man.jpeg";
import { FooterContainer } from "../../components/Footer/FooterContainer";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppButton from "../../components/Button/Button";

const { Title } = Typography;


export default function Confirmation() {

    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isSubmit) {
            navigate("/home");
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
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
                <Box textAlign="center"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "50%",
                        justifyContent: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "50px",
                        marginBottom: "50px"
                    }}>
                    <Title level={1} className="title">
                        Order Confirmation
                    </Title>
                    <Title level={2} className="title">
                        Payment Successful
                    </Title>


                </Box>
                <Box textAlign="center"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "10%",
                        justifyContent: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "50px",
                        marginBottom: "50px"
                    }}>
                    <AppButton color="secondary" textAlign="center"
                        onClick={handleSubmit} >
                        Return
                    </AppButton>
                </Box>
                <FooterContainer />
            </BottomContainer>

        </PageWrapper>
    )
}
