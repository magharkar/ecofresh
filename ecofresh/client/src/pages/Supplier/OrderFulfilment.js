import React,{useState, useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import axios from 'axios';
import { orderAPI } from '../../api/API';
import Navbar from '../../components/Navbar/NavSupplier';
import { FooterContainer } from '../../components/Footer/FooterContainer';
import Grid from '@mui/material/Grid';


export default function OrderFulfilment() {

    const [Data, setData] = useState([]);
    const [showdata, setShowData] = useState([]);
    const [isError, setIsError] = useState(false);
    const params = useParams();



  return (
      
    <div>  <Navbar />


     <Grid>
         <Card>
             Order with Order id: {params.id} is sucssfully Fulfilled.
         </Card>
     </Grid>



<FooterContainer />
    </div>
  )
}
