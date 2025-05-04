const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/deliverVehicles");
//Middlewares
app.use(express.json());
app.use(cors());
app.use("/deliverVehicle", router);


dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Connected to MongoDB")).catch((err) => console.log(err));

app.listen(5000, () => {
    console.log(`Server is up and running on port number: 5000`);
  });
  