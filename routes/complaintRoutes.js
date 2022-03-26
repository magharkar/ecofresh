/**
 * @author Kandarp Parikh
 */

 const express = require("express");
 const route = express.Router();
 const complaintsModel = require("../models/complaintsModel");
 const usersModel = require("../models/usersModel")
 const complaints = require("../controllers/complaints")
 
 route.get("/allcomplaints", async (req, res) => {
   let complaints = await complaintsModel.find();
   try {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.status(200).send(complaints);
   } catch (error) {
     console.log(error);
     res.status(500).send("Error while fetching the complaints.");
   }
 });
 
 route.post("/addcomplaint", async (req, res) => {
    try {
        complaints.addComplaint(req)
        res.status(200).send({"message": "successfully created complaint"});
      } catch (error) {
        console.log(error);
        res.status(500).send("Error while fetching the complaints.");
      }
        });

    route.post("/addresolution", async (req, res) => {
        try {
            complaints.addResolution(req)
            complaints.addCredits(req)
            res.status(200).send({"message": "successfully updated"});
          } catch (error) {
            console.log(error);
            res.status(500).send("Error while fetching the complaints.");
          }
            });
    
    route.post("/filterByComplaintStatus", async (req, res) => {
        
    try {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        let data = await complaintsModel.find({complaintStatus: req.body.data.complaintStatus});
        res.status(200).send(data);
        } catch (error) {
        console.log(error);
        res.status(500).send("Error while fetching the complaints.");
        }
        });

    route.post("/filterByComplaintType", async (req, res) => {
        
        try {
            let data = await complaintsModel.find({complaintType: req.body.data.complaintType});
            res.status(200).send(data);
            } catch (error) {
            console.log(error);
            res.status(500).send("Error while fetching the complaints.");
            }
            });

    route.post("/fetchByComplaintId", async (req, res) => {
        try {
            let data = await complaintsModel.findOne({complaintId: req.body.data.complaintId});
            if(data.complaintId.length > 0)
            {
                res.status(200).send({data});
            }
            else{
                res.status(200).send({'error': "ComplaintId does not exist"});
            }

            } catch (error) {
            console.log(error);
            res.status(500).send({'error': "ComplaintId does not exist"});
            }
            });

      route.post("/fetchByOrderId", async (req, res) => {
        try {
            let data = await complaintsModel.findOne({OrderId: req.body.data.orderId});
            if(data.complaintId.length > 0)
            {
                res.status(200).send({data});
            }
            else{
                res.status(200).send({'error': "OrderId does not exist"});
            }

            } catch (error) {
            console.log(error);
            res.status(500).send({'error': "OrderId does not exist"});
            }
            });

 module.exports = route;
 