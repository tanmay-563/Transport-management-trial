const DeliveryVehicles = require("../models/deliverVehicles");

const addVehicle = async (req, res) => {
    try{
        const {vehicleID, vehicleType, vehicleNumber, phoneNumber, driverID, unitFee, deliverArea, mapUrl } = req.body;
        const delivery_vehicles = new DeliveryVehicles({
            vehicleID,
            vehicleType,
            vehicleNumber,
            phoneNumber,
            driverID,
            unitFee,
            deliverArea,
            mapUrl,

        })
        await delivery_vehicles.save();
        return res.status(201).json({delivery_vehicles});
    } catch (error){
        return res.status(500).json({message: error.message});
    }
}


const getAllVehicles = async (req, res, next) => {
    let deliverVehicles;
    try {
        deliverVehicles = await DeliveryVehicles.find();
    } catch (err) {
      console.log(err);
    }
  
    if (!deliverVehicles) {
      return res.status(404).json({ message: "No vehicles found" });
    }
    return res.status(200).json( deliverVehicles );
  };

  const getdeliverVehicle = async (req, res) => {
    try{
        const id = req.params.id;
        const deliverVehicle = await DeliveryVehicles.findById(id);
        return res.status(200).json(deliverVehicle);
    }catch(error) {
        return res.status(404).json({message: error.message});
    }
}



const updateDeliveryVehicles = async (req, res) => {
    try{
        const id = req.params.id;
        const {vehicleID, vehicleNumber, phoneNumber, driverID, unitFee, deliverArea, mapUrl } = req.body;
        const deliverVehicle = await DeliveryVehicles.findByIdAndUpdate(id, {
            vehicleID,
            vehicleNumber,
            phoneNumber,
            driverID,
            unitFee,
            deliverArea,
            mapUrl,
        })
        await deliverVehicle.save();
        return res.status(200).json( deliverVehicle );
    }catch(error){
        return res.status(404).json({message: error.message});
    }
}

const deleteDeliveryVehicles = async (req, res) => {
    try{
        const id = req.params.id;
        const deliveryVehicles = await DeliveryVehicles.findByIdAndRemove(id)
        return res.status(200).json({message:"Successfully deleted"});
    } catch(error){
        return res.status(404).json({message: error.message})
    }
}

module.exports = {
    addVehicle,
    getAllVehicles,
    getdeliverVehicle,
    updateDeliveryVehicles,
    deleteDeliveryVehicles,

    
}