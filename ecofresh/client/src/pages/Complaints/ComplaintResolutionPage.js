import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom';
import { Button } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { FooterWrapper, HeaderWrapper, MainContent, PageWrapper, BottomContainer, Row,
  Column, Image } from "../LandingPage/LandingPage.style";
import landingPageImg from '../../assets/landing-page.png';
import ComplaintsImage from '../../assets/Complaints.jpg';
import lasagnaSoup from '../../assets/lasagna-soup.webp';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './Complaints.css';
import DropDown from "../../components/CommonComponents/DropDown"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { height } from '@mui/system';
import TextField from "@mui/material/TextField";

function ComplaintResolution() {
    const [complaint,setComplaint] = useState('');
    const [id,setId] = useState('')
    const params = useParams();
    const [api_url,setAPIUrl] = useState('http://localhost:3001/complaints/fetchByComplaintId');
    const [reimbursementAmount,setreimbursementAmount] = useState('')
    const [resolutionMessage,setresolutionMessage] = useState('')

    const AddResolutionMesage = (e) =>{
        setresolutionMessage(e.target.value)
    }
    
    const AddResolutionAmount = (e) => {
        setreimbursementAmount(e.target.value)
    }

function AddResolution()
    {
        console.log("add called")
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
        axios.post("http://localhost:3001/complaints/addresolution",{headers: headers, data : {'complaintId': params.id,
        "reimbursementAmount":reimbursementAmount, "resolutionMessage":resolutionMessage}})
    }

    useEffect(()=>
        {
            setId(params.id)
            const headers = {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }

                axios.post(api_url,{headers: headers, data : {'complaintId': params.id}}).then((response) => {
                setComplaint(response.data.data);});
        },[id])

  return     (
  <PageWrapper>
  <HeaderWrapper>
      <Header />
  </HeaderWrapper>

  <BottomContainer>
      <MainContent>
        <img src={ComplaintsImage} width="100%" height="300px"/>
        <h1 style={{width: 'fit-content',margin: '0 auto'}}>Complaint Resolution</h1>
          {true ? (
    <Card >
            <hr></hr>
        <Row style={{height:"10px",alignItems:"center"}}>
            <Column >Complaint Id : {complaint.complaintId}</Column>
            <Column >Complaint Date : {complaint.date}</Column>
            <Column >OrderId : {complaint.orderId}</Column>
        </Row>
        <Row style={{height:"10px",alignItems:"center"}}>
            <Column >Complaint Type : {complaint.complaintType}</Column>
            <Column>      </Column>
            <Column >Complaint Status : {complaint.complaintStatus}</Column>
        </Row>
        <hr></hr>
        <Row style={{height:"50px",alignItems:"center"}}>
            <Column> Complaint Description : </Column>
            <Column >{complaint.description}</Column>
            <Column></Column>
        </Row>
        <Row style={{height:"200px",alignItems:"center"}}>
            <Column> Complaint Image :</Column>
            <Column>  <img src="https://picsum.photos/200" width="40%" height="200px"/></Column>  
            <Column>   </Column> 
        </Row>
        <hr></hr>
        <form>
        <Row style={{height:"50px",alignItems:"center"}}>
            <Column> Resolution message <p></p>
            <TextField onChange={AddResolutionMesage} style={{width: '800px',margin: '0 auto'}} id="name-input" name="name" label="Resolution Message" type="text"/>
            </Column>
        </Row>
        <Row style={{height:"50px",alignItems:"center"}}>
            <Column> Reimbursement amount ($)<p></p>
            <TextField onChange={AddResolutionAmount} style={{width: '200px',margin: '0 auto'}} id="name-input" name="name" label="Resolution Amount" type="text"/>
            </Column>
        </Row>
        <Button type="submit" style={{backgroundColor:'orange', color:'black',margin: '0 50%'}} onClick={AddResolution}>Submit</Button>
        </form>
    </Card>
)
:null
          }
<br></br>
      </MainContent>
      <FooterWrapper>
          <Footer />
      </FooterWrapper>
  </BottomContainer>
 
</PageWrapper>
);
}

export default ComplaintResolution
