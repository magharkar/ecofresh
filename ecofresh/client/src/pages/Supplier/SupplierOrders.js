import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios';
import { api } from '../../api/API';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../../components/Navbar/NavSupplier';






const theme = createTheme();

export default function Orders() {

  let navigate = useNavigate();
  const routeChange = () =>{ 
      let path = '/supplier/orders/order-detials'; 
      navigate(path);
    }



  const [Data, setData] = useState([]);
  const [showdata, setShowData] = useState([]);
  const [isError, setIsError] = useState(false);


  useEffect(() => {
    axios.get(`${api}orders/`).then((data) => {
      console.log(data);
      if (data.status) {
        setData(data.data)
        setShowData(data.data)
      }
      else {
        setIsError(true)
      }
    });
  }, []);




  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Navbar />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}

        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Orders
            </Typography>


          </Container>
        </Box>



        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 5,
            pb: 2,
          }}
        >
        <Container sx={{ py: 2 }} maxWidth='300'>
        
          <Grid
          spacing={5}
            item
            sm={12}
            md={6}
            sx={{ display: "flex" }}
          >
            {showdata.map((ele) => (
              <Card
                key={ele._id}
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {ele.orderId}
                  </Typography>


                  <Typography component={"div"} variant={"h6"}>
                    Recipe Name: {ele.recipes &&
                      `${ele.recipes.slice(0, 1).toUpperCase()}${ele.recipes.slice(1, ele.recipes.length)}. `
                    }
                    UserName:  {ele.userId}
                  </Typography>
                  <Typography color="text.secondary">
                    Status: {ele.status}
                  </Typography>

                </CardContent>
                <CardActions>
                  <Button size="small" >View</Button>
                  <Button size="small">Cancel</Button>
                </CardActions>
              </Card>

            ))}
          </Grid>
     
        </Container>
        </Box>
      </main>

    </ThemeProvider>
  );
}