const express = require("express");
const mongoose = require("mongoose");
const ATLAS_URI = require("./config");
const app = express();
const port = process.env.PORT || 3001
const usersRoute = require("./routes/usersRoute");
const complaintRoutes = require("./routes/complaintRoutes");
const uploadToS3 = require("./controllers/uploadToS3");
var sign_s3 = require('./controllers/uploadToS3');
cors = require("cors");

app.use(cors());
app.use(express.json());


mongoose.connect(ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on("error", () => {
    console.log("Error while connecting to the database");
});

db.once('open', () => {
    console.log("Database connected");
});

app.use("/users", usersRoute);
app.use("/complaints", complaintRoutes);
app.use('/uploadToS3', uploadToS3.sign_s3);

app.listen(port, () => {
    console.log("App is listening on port " + port);
});



module.exports = app;