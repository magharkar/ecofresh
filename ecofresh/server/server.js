const express = require("express");
const mongoose = require("mongoose");
const ATLAS_URI = require("./config");
const app = express();
const port = process.env.PORT || 3001
const usersRoute = require("./routes/usersRoute");
const paymentRoute = require("./routes/paymentRoute");
const cors = require("cors");
app.use(express.json());
app.use(cors());

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

// app.use("/users", usersRoute);

// app.listen(port, () => {
//     console.log("App is listening on port " + port);
// });

app.use("/api", paymentRoute);

app.listen(port, () => {
    console.log("App is listening on port " + port);
});



module.exports = app;