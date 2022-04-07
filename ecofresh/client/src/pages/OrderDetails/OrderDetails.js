import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import baseURL from "../../config";
import axios from "axios";
import {Container, ImageWrapper, ContentContainer, ContentWrapper, Heading,
    SubHeader} from "./OrderDetails.style";
import Navbar from "../../components/Navbar/NavUser";
import { FooterContainer } from "../../components/Footer/FooterContainer";
import uploadRecipeBg from '../../assets/pictures/uploadRecipeBg.png'
import OrderRecipeItem from '../../components/OrderRecipeItem/OrderRecipeItem';

function OrderDetails() {
    const location = useLocation();
    const [orderDetails, setOrderDetails] = useState([]);

    useEffect(() => {
        const getRecipeURL = baseURL + '/myOrders/getOrderDetails/' + location.state;
        axios.get(getRecipeURL)
            .then(res => {
                const data = res.data;
                console.log(data);
                setOrderDetails(data);
            })
      }, []);

    console.log(location);

    const getRecipes = (order) => (
        order.recipes.map((recipe, index) => (
            <OrderRecipeItem recipe={recipe} s3URL={order.recipeSchema[index].s3URL}/ >
        ))
    )

    return(
        <Container>
            <Navbar />
            <ImageWrapper style={{ backgroundImage: `url(${uploadRecipeBg})` }}>
            <ContentWrapper>
                <ContentContainer>
                    <Heading>Order Details</Heading>
                    {
                        orderDetails.map(order => (
                            <>
                                <SubHeader>Order # {order.orderId}</SubHeader>
                                {getRecipes(order)}
                                <div>{order.status}</div>
                                <div>{order.finalCost}</div>
                            </>
                         ) )
                    }
                </ContentContainer>
            </ContentWrapper>
            </ImageWrapper>
            <FooterContainer />
        </Container>
    )
}

export default OrderDetails;