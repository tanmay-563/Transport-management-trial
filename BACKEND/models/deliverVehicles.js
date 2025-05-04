const mongoose = require("mongoose");

const deliverVehiclesSchema = new mongoose.Schema({
    vehicleID: {
        type : String,
        required: true,
        unique: true,
    },
    vehicleType:{
        type : String,
        required: true,
    },
    vehicleNumber: {
        type : String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type : Number,
        required: true,
    },
    driverID: {
        type : String,
        required: true,
    },
    unitFee: {
        type : String,
        required: true,
    },
    deliverArea: {
        type : String,
        required: true,
    },
    mapUrl:{
        type : String,
        required: true,
    }

});

const deliver_vehicles = mongoose.model("delivery_vehicles", deliverVehiclesSchema);

module.exports = deliver_vehicles;