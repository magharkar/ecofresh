/**
 * @author Kandarp Parikh
 */

 const complaintsModel = require("../models/complaintsModel");
 const Str = require('@supercharge/strings');
const usersModel = require("../models/usersModel");


 /**
 * This code is derived from https://futurestud.io/tutorials/generate-a-random-string-in-node-js-or-javascript
 */
 
generateComplaintId = () =>{
    return Str.random(8)
    };

addResolution = (req) =>{
    var query = {'complaintId': req.body.data.complaintId};
    
    complaintsModel.findOneAndUpdate(query, {'reimbursementAmount':req.body.data.reimbursementAmount, 'resolutionMessage':req.body.data.resolutionMessage,'complaintStatus':'Closed'}, function(err, doc) {
        if (err) return "error";
        return 'Succesfully saved.';
    });
}

addCredits = (req) =>{
    var query = {'UserId': 'gimmemycoffee'};

    var currentCredit = usersModel.findOne(query)
    console.log(currentCredit)
    currentCredit = parseInt(currentCredit.credits) + req.body.data.reimbursementAmount;
    console.log(currentCredit.credits)
    complaintsModel.findOneAndUpdate(query, {'credits':credits}, function(err, doc) {
        if (err) return "error";
        return 'Succesfully saved.';
        });
    
    complaintsModel.findOneAndUpdate(query, {'reimbursementAmount':req.body.data.reimbursementAmount, 'resolutionMessage':req.body.data.resolutionMessage,'complaintStatus':'Closed'}, function(err, doc) {
        if (err) return "error";
        return 'Succesfully saved.';
    });
}

addComplaint = (req) => {
    let generatedComplaintId = generateComplaintId()
    var datetime = new Date();
    complaintsModel.create(
        {
            complaintId : generatedComplaintId,
            complaintStatus: 'open',
            complaintType: req.body.complaintType,
            date: datetime,
            description: req.body.description,
            orderId: req.body.orderId,
            reimbursementAmount: req.body.reimbursementAmount,
            resolutionMessage: req.body.resolutionMessage
        })
}

getComplaintByType = (req) => {
    console.log(complaintsModel.find({complaintStatus: req.body.complaintStatus}))
    return ("ok");
}

getComplaintById = (req) => {
    console.log(complaintsModel.find({complaintStatus: req.body.data.complaintId}))
    return ("ok");
}

module.exports = {
    addResolution: addResolution,
    generateComplaintId: generateComplaintId,
    addComplaint: addComplaint,
    getComplaintByType: getComplaintByType,
    addCredits: addCredits
  };