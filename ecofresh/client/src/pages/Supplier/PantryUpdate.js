/**
 * @author Sumadhur Vaidyula
 */



 import React,{useState, useEffect} from 'react'
 import { useNavigate,useParams } from 'react-router-dom';
 import Card from '@mui/material/Card';
 import Paper from '@mui/material/Paper';
 import axios from 'axios';
 import { orderAPI } from '../../api/API';
 import Navbar from '../../components/Navbar/NavSupplier';
 import { FooterContainer } from '../../components/Footer/FooterContainer';
 import Grid from '@mui/material/Grid';
 import Box from '@mui/material/Box';
 import Typography from '@mui/material/Typography';
 import AppButton from "../../components/Button/Button";
 
 export default function PantryUpdate() {
     var cardStyle = {
         display: 'block',
         width: '30vw',
         transitionDuration: '0.3s',
         height: '25vw',
         backgroundColor: "#0d401b"
     }
     const params = useParams();
     let navigate = useNavigate();
 
     const handleCardClick = (id) => {
         
         navigate(`/supplier/pantry`)
     }
 
 
 
   return (
       
     <div>  <Navbar />
 <Box mt={2} display="flex"  justifyContent="center">
     
      <Grid justifyContent="center"  style={{textAlign: "center"}}>
    
          <Card style={cardStyle}>
              <Typography variant="h4" color="#ffffff"  padding={1} margin={2}>
              Quantity update for: {params.item} 
              </Typography>
              <AppButton color="secondary"  onClick={() => handleCardClick()} padding={2} margin={2}>Go back to Pantry</AppButton>
          </Card>
        
      </Grid>
 
 </Box>
 
 
 <FooterContainer />
     </div>
   )
 }
 