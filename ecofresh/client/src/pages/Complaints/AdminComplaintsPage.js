/**
 * @author Kandarp Parikh
 */
import { Button } from "@mui/material";
import {FooterContainer} from "../../components/Footer/FooterContainer";
// import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/NavAdmin"
import { FooterWrapper, HeaderWrapper, MainContent, PageWrapper, BottomContainer, Row,
  Column, Image } from "../LandingPage/LandingPage.style";
import landingPageImg from '../../assets/pictures/landing-page.png';
import frenchOnion from '../../assets/pictures/french-onion.jpeg';
import lasagnaSoup from '../../assets/pictures/lasagna-soup.webp';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './Complaints.css';
import DropDown from "../../components/CommonComponents/DropDown"
import TextField from "@mui/material/TextField";
import Footer from "../../components/Footer/Footer";

function LandingPage(props) {
    const navigate = useNavigate();
    const [api_url,setAPIUrl] = useState('http://localhost:3001/complaints/allcomplaints/');
    const [complaints,setComplaints] = useState([]);
    const [data, setData] = useState('');
    const [search,setSearch] = useState('');
    const complaintType = ["Delivery","Quality","Quantity"]
    const [complaintId,setComplaintId] = useState('')
    const [orderId,setOrderId] = useState('')
    const childToParent = (childdata) => {
      setData(childdata);
      console.log(childdata) 
      console.log(complaintType.includes(childdata))
      if(complaintType.includes(childdata))
      {
        setAPIUrl('http://localhost:3001/complaints/filterByComplaintType/');
      }
      else{
          setData("")
          setAPIUrl('http://localhost:3001/complaints/allcomplaints/');
      }
      
    }
    useEffect(() => {
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
        if(data.length > 0 && (complaintType.includes(data)))
        {
            axios.post(api_url,{headers: headers, data : {'complaintType': data}}).then((response) => {
            setComplaints(response.data)});
        }
        else{
            axios.get(api_url,{headers: headers}).then((response) => {
                setComplaints(response.data);
            });
        }

    },[data]);

    const handleClick = (id) => {
        navigate(`/complaints/ComplaintResolutionPage/${id}`);
    }

    const SearchByComplaintId=(e)=>{
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
        setComplaintId(e.target.value)
        };

        const SearchByOrderId=(e)=>{
            const headers = {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
            setOrderId(e.target.value)
            };


  return (
    <PageWrapper>
<HeaderWrapper><Navbar /></HeaderWrapper>

        <BottomContainer>
            <MainContent>
                <img src={landingPageImg} width="100%"/>
                <br></br>
                <Row style={{height:"10px",alignItems:"center"}}>
                <Column ><DropDown childToParent={childToParent} ></DropDown></Column>
                <Column><TextField onChange={SearchByComplaintId}  id="name-input" name="name" label="Search by ComplaintId" type="text"/></Column>
                <Column><TextField onChange={SearchByOrderId}  id="name-input" name="name" label="Search by OrderId" type="text"/></Column>
                </Row>
                {!search.length > 0 ? (complaints.map((r) => (
                <div >
                    {complaintId.length > 0 && r.complaintId.toLowerCase().startsWith(complaintId)? (

                        <Row style={{height:"1%" , color:'Black' , backgroundColor:'orange', padding:'30px'}}>
                        <Column >Complaint Id : {r.complaintId}</Column>
                        <Column >OrderId : {r.orderId}</Column>
                        <Column >ComplaintStatus : {r.complaintStatus}</Column>
                        <Button variant="contained" style={{color: 'white', backgroundColor: "#1D3124"}} onClick={() => handleClick(r.complaintId)}>Resolve Complaint</Button>
                        </Row>

                    ) : null}

                    {orderId.length > 0 && r.orderId.startsWith(orderId)? (

                    <Row style={{height:"1%" , color:'Black' , backgroundColor:'orange', padding:'30px'}}>
                    <Column >Complaint Id : {r.complaintId}</Column>
                    <Column >OrderId : {r.orderId}</Column>
                    <Column >ComplaintStatus : {r.complaintStatus}</Column>
                    <Button variant="contained" style={{color: 'white', backgroundColor: "#1D3124"}} onClick={() => handleClick(r.complaintId)}>Resolve Complaint</Button>
                    </Row>

                    ) : null}

                    {complaintId.length === 0 && orderId.length === 0? (

                    <Row style={{height:"1%" , color:'Black' , backgroundColor:'orange', padding:'30px'}}>
                    <Column >Complaint Id : {r.complaintId}</Column>
                    <Column >OrderId : {r.orderId}</Column>
                    <Column >ComplaintStatus : {r.complaintStatus}</Column>
                    <Button variant="contained" style={{color: 'white', backgroundColor: "#1D3124"}} onClick={() => handleClick(r.complaintId)}>Resolve Complaint</Button>
                    </Row>

                    ) : null}
                    


                </div>
    )))
    :
    <div >
    <Row style={{height:"1%" , color:'Black' , backgroundColor:'orange', padding:'30px'}}>
        <Column >Complaint Id : {complaints.complaintId}</Column>
        <Column >OrderId : {complaints.orderId}</Column>
        <Column >ComplaintStatus : {complaints.complaintStatus}</Column>
    </Row>
    </div>
                }
<br></br>
                <Row>
                    <Column><Image src={lasagnaSoup} width="100%" height="100%"/></Column>
                    <Column className="text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Column>
                </Row>
            </MainContent>
            
        </BottomContainer>
        <FooterContainer />
    </PageWrapper>
  );
}

export default LandingPage;