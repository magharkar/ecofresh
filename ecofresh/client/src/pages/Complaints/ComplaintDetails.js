import {useParams} from 'react-router-dom'
import { Button } from "@mui/material";
import { FooterContainer } from "../../components/Footer/FooterContainer";
// import Header from "../../components/Header/Header";
import { MainContent, PageWrapper, BottomContainer, Row,
  Column, Image, HeaderWrapper } from "../LandingPage/LandingPage.style";
import ComplaintsImage from '../../assets/pictures/Complaints.jpg';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Complaints.css';
import Card from '@mui/material/Card';
import TextField from "@mui/material/TextField";
import Navbar from '../../components/Navbar/NavAdmin';
import baseURL from '../../config';
function ComplaintDetails() {
    const [complaint,setComplaint] = useState('');
    const [id,setId] = useState('')
    const [imageUrl,setImageUrl] = useState('')
    const params = useParams();
    const [api_url,setAPIUrl] = useState(baseURL+'/complaints/fetchByComplaintId');


    useEffect(()=>
        {
            setId(params.id)
            setImageUrl("https://ecofresh-complaint.s3.us-west-2.amazonaws.com/"+id)
            const headers = {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }

                axios.post(api_url,{headers: headers, data : {'complaintId': params.id}}).then((response) => {
                setComplaint(response.data.data);});
        },[id])

  return     (
  <PageWrapper>
<HeaderWrapper><Navbar /></HeaderWrapper>
  <BottomContainer>
      <MainContent>
        <img src={ComplaintsImage} width="100%" height="300px"/>
        <h1 style={{width: 'fit-content',margin: '0 auto'}}>Complaint Details</h1>
          {true ? (
    <Card>
            <hr></hr>
        <Row style={{height:"10px",alignItems:"center"}}>
            <Column style={{ backgroundColor:'#1d3124',color:'white'}}>Complaint Id : {complaint.complaintId}</Column>
            <Column style={{ backgroundColor:'#1d3124',color:'white'}}>Complaint Date : {complaint.date}</Column>
            <Column style={{ backgroundColor:'#1d3124',color:'white'}}>OrderId : {complaint.orderId}</Column>
        </Row>
        <Row style={{height:"10px",alignItems:"center"}}>
            <Column style={{ backgroundColor:'#1d3124',color:'white'}}>Complaint Type : {complaint.complaintType}</Column>
            <Column>      </Column>
            <Column style={{ backgroundColor:'#1d3124',color:'white'}}>Complaint Status : {complaint.complaintStatus}</Column>
        </Row>
        <hr></hr>
        <Row style={{height:"50px",alignItems:"center"}}>
            <Column  style={{ backgroundColor:'#1d3124',color:'white'}}> Complaint Description : </Column>
            <Column style={{ backgroundColor:'orange'}}>{complaint.description}</Column>
            <Column></Column>
        </Row>
        <Row style={{height:"200px",alignItems:"center"}}>
            <Column style={{ backgroundColor:'#1d3124',color:'white'}}> Complaint Image :</Column>
            <Column>  <img src={imageUrl} width="40%" height="200px"/></Column>  
            <Column>   </Column> 
        </Row>
        <Row style={{height:"50px",alignItems:"center"}}>
            <Column style={{ backgroundColor:'#1d3124',color:'white'}}> Complaint Resolution Message : </Column>
            <Column style={{ backgroundColor:'orange'}}>{complaint.resolutionMessage}</Column>
            <Column></Column>
        </Row>
        <Row style={{height:"50px",alignItems:"center"}}>
            <Column style={{ backgroundColor:'#1d3124',color:'white'}}> Reimbursement Amount : </Column>
            <Column style={{ backgroundColor:'orange'}}>{complaint.reimbursementAmount}</Column>
            <Column></Column>
        </Row>
        <hr></hr>
    </Card>
)
:null
          }
<br></br>
      </MainContent>

  </BottomContainer>
<FooterContainer />
</PageWrapper>
);
}

export default ComplaintDetails
