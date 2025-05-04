const express = require ('express');
const { addVehicle, getAllVehicles, getdeliverVehicle, updateDeliveryVehicles, deleteDeliveryVehicles} = require('../controllers/deliverVehicles');
const router = express.Router();


router.post("/add", addVehicle);
router.get("/", getAllVehicles);
router.get("/:id", getdeliverVehicle);
router.put("/:id", updateDeliveryVehicles);
router.delete("/:id", deleteDeliveryVehicles);

module.exports = router;