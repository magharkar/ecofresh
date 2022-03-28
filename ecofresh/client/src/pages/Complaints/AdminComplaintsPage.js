/**
 * @author Kandarp Parikh
 */
import { Button } from "@mui/material";
import {FooterContainer} from "../../components/Footer/FooterContainer";
// import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/NavAdmin"
import { FooterWrapper, HeaderWrapper, MainContent, PageWrapper, BottomContain, Row_Complaint,
  Column_Complaint, Image } from "../LandingPage/LandingPage.style";
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

            <MainContent>
                <img src={landingPageImg} width="100%"/>
                <br></br>
                <Row_Complaint style={{height:"10px",alignItems:"center"}}>
                <Column_Complaint ><DropDown childToParent={childToParent} ></DropDown></Column_Complaint>
                <Column_Complaint><TextField onChange={SearchByComplaintId}  id="name-input" name="name" label="Search by ComplaintId" type="text"/></Column_Complaint>
                <Column_Complaint><TextField onChange={SearchByOrderId}  id="name-input" name="name" label="Search by OrderId" type="text"/></Column_Complaint>
                </Row_Complaint>
                {!search.length > 0 ? (complaints.map((r) => (
                <div >
                    {complaintId.length > 0 && r.complaintId.toLowerCase().startsWith(complaintId)? (

                        <Row_Complaint style={{height:"1%" , color:'Black' , backgroundColor:'orange', padding:'30px'}}>
                        <Column_Complaint >Complaint Id : {r.complaintId}</Column_Complaint>
                        <Column_Complaint >OrderId : {r.orderId}</Column_Complaint>
                        <Column_Complaint >ComplaintStatus : {r.complaintStatus}</Column_Complaint>
                        <Button variant="contained" style={{color: 'white', backgroundColor: "#1D3124",width:"250px"}} onClick={() => handleClick(r.complaintId)}>Resolve Complaint</Button>
                        </Row_Complaint>

                    ) : null}

                    {orderId.length > 0 && r.orderId.startsWith(orderId)? (

                    <Row_Complaint style={{height:"1%" , color:'Black' , backgroundColor:'orange', padding:'30px'}}>
                    <Column_Complaint >Complaint Id : {r.complaintId}</Column_Complaint>
                    <Column_Complaint >OrderId : {r.orderId}</Column_Complaint>
                    <Column_Complaint >ComplaintStatus : {r.complaintStatus}</Column_Complaint>
                    <Button variant="contained" style={{color: 'white', backgroundColor: "#1D3124",width:"250px"}} onClick={() => handleClick(r.complaintId)}>Resolve Complaint</Button>
                    </Row_Complaint>

                    ) : null}

                    {complaintId.length === 0 && orderId.length === 0? (

                    <Row_Complaint style={{height:"1%" , color:'Black' , backgroundColor:'orange', padding:'30px'}}>
                    <Column_Complaint >Complaint Id : {r.complaintId}</Column_Complaint>
                    <Column_Complaint >OrderId : {r.orderId}</Column_Complaint>
                    <Column_Complaint >ComplaintStatus : {r.complaintStatus}</Column_Complaint>
                    <Button variant="contained" style={{color: 'white', backgroundColor: "#1D3124",width:"250px"}} onClick={() => handleClick(r.complaintId)}>Resolve Complaint</Button>
                    </Row_Complaint>

                    ) : null}
                    


                </div>
    )))
    :
    <div >
    <Row_Complaint style={{height:"1%" , color:'Black' , backgroundColor:'orange', padding:'30px'}}>
        <Column_Complaint >Complaint Id : {complaints.complaintId}</Column_Complaint>
        <Column_Complaint >OrderId : {complaints.orderId}</Column_Complaint>
        <Column_Complaint >ComplaintStatus : {complaints.complaintStatus}</Column_Complaint>
    </Row_Complaint>
    </div>
                }
<br></br>

            </MainContent>
        
        <FooterContainer />
    </PageWrapper>
  );
}

export default LandingPage;