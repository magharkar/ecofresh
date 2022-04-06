import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Container, ContentContainer, ContentWrapper, ImageWrapper, Heading, EmptyOrdersList } from './MyOrders.style';
import Navbar from '../../components/Navbar/NavUser';
import { FooterContainer } from '../../components/Footer/FooterContainer';
import uploadRecipeBg from '../../assets/pictures/uploadRecipeBg.png'
import { Link } from 'react-router-dom';
import axios from 'axios';
import baseURL from '../../config';
import OrderList from '../../components/OrderList/OrderList';


const MyOrders = () => {
    let [orderData, setOrderData] = useState([]);
    let email = localStorage.getItem("emailId");
    email = "kandarpparikh@gmail.com";
    let url = baseURL+"/myOrders/getAllOrdersForUser/"+email;
    let data = [];

    useEffect(() => {
        axios.get(url).then(res => {
            data = res.data;
            console.log(data);
            setOrderData(data);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    

    return (
        <Container>
            <Navbar />
            <ImageWrapper style={{ backgroundImage: `url(${uploadRecipeBg})` }}>
            <ContentWrapper>
                    <ContentContainer>
                        {
                            orderData?.length > 0 ? (
                                <>
                                   <Heading>My Orders</Heading>
                                   <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', alignItems: 'center' }}>
                                       {
                                           orderData.map(data =>(
                                               <OrderList  
                                                recipeName={data.recipeName}
                                                recipeSchema={data.recipeSchema}
                                                date={data.date}
                                                status={data.status}
                                                orderId={data.orderId} 
                                                />
                                           ))
                                       }
                                    {/* <ListItem alignItems="center">
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Brunch this weekend?"
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        Ali Connors
                                                    </Typography>
                                                    {" — I'll be in your neighborhood doing errands this…"}
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Summer BBQ"
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        to Scott, Alex, Jennifer
                                                    </Typography>
                                                    {" — Wish I could come, but I'm out of town this…"}
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Oui Oui"
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        Sandra Adams
                                                    </Typography>
                                                    {' — Do you have Paris recommendations? Have you ever…'}
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem> */}
                                </List>
                                    </>
                                ) : 
                                    <EmptyOrdersList>Your cart looks empty. <Link to="/home">Click here</Link> to start ordering! </EmptyOrdersList>
                            }
                        
                    </ContentContainer>
                </ContentWrapper>
            </ImageWrapper>
            <FooterContainer />
        </Container>
    );
}

export default MyOrders;