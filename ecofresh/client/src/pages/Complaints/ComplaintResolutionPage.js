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
<HeaderWrapper><Navbar /></HeaderWrapper>
  <BottomContainer>
      <MainContent>
        <img src={ComplaintsImage} width="100%" height="300px"/>
        <h1 style={{width: 'fit-content',margin: '0 auto'}}>Complaint Resolution</h1>
          {true ? (
    <Card >
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

  </BottomContainer>
<FooterContainer />
</PageWrapper>
);
}

export default ComplaintResolution
