import React from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import Navbar  from '../../components/Navbar/NavSupplier';
import TextBox from '../../components/TextBox/Textbox';
import {Textbox} from './AddPantry.style';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import AppButton from "../../components/Button/Button";
import { useEffect, useState } from "react";


const styles = {
	fullHeightCard: {
		height: "100%",
	},
}




export default function AddPantry() {

    const values = {
        Quantity: " "
    };



    const params = useParams();
    const [quantity, setQuantity] = useState("");


    const handleQuantityChange = (event) => {
      let quantity = params.value
      console.log(quantity)
      //if (password.length >= 8) {
          setQuantity(quantity);
      //}

  }


  return (


    
    <div id="Textbox"> 
        <Navbar />
      <Textbox>
      <Grid
              item
              
              xs={20}
              md={4}
            >
              <Card className={styles.fullHeightCard}>
                <CardHeader
                  title={params.element}
                  
                  titleTypographyProps={{ align: 'center' }}

                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                    <TextBox onChange={(event) => {
                                    console.log("Quantity : " + event.target)
                                    setQuantity(event.target.value)
                                }}>Quantity</TextBox>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 5,
                    }}
                  >
                   
                  </Box>
                
                </CardContent>
                <CardActions align='center'>
                <AppButton color="secondary" 
                                        >
                                        Add to Pantry
                                    </AppButton>
                </CardActions>
              </Card>
            </Grid>
        </Textbox> </div>
  )
}
