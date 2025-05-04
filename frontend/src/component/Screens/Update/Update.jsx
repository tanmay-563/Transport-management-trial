import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Input, Button } from "antd";

function UpdateLorry() {
  const [vehicleID, setvehicleID] = useState("");
  const [vehicleType, setvehicleType] = useState("Lorry");
  const [vehicleNumber, setvehicleNumber] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [driverID, setdriverID] = useState("");
  const [unitFee, setunitFee] = useState("");
  const [deliverArea, setdeliverArea] = useState("");
  const [mapUrl, setmapUrl] = useState("");
  const [reload, setReload] = useState(false);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/deliverVehicle/${params.id}`)
      .then((res) => {
        setvehicleID(res.data.vehicleID);
        setdriverID(res.data.driverID);
        setvehicleType(res.data.vehicleType);
        setvehicleNumber(res.data.vehicleNumber);
        setphoneNumber(res.data.phoneNumber);
        setunitFee(res.data.unitFee);
        setdeliverArea(res.data.deliverArea);
        setmapUrl(res.data.mapUrl);
      });
  }, [reload]);

  const changeOnClick = (e) => {
    axios
      .put(`http://localhost:5000/deliverVehicle/${params.id}`, {
        vehicleID,
        driverID,
        vehicleType,
        vehicleNumber,
        phoneNumber,
        unitFee,
        deliverArea,
        mapUrl,
      })
      .then((res) => {
        setvehicleID(res.data.vehicleID);
        setdriverID(res.data.driverID);
        setvehicleType(res.data.vehicleType);
        setvehicleNumber(res.data.vehicleNumber);
        setphoneNumber(res.data.phoneNumber);
        setunitFee(res.data.unitFee);
        setdeliverArea(res.data.deliverArea);
        setmapUrl(res.data.mapUrl);
        setReload(true);
      });
  };

  return (
    <div className="updatelorry">
      <h1> Update {vehicleType} Details</h1>
      <Form className="updateform">
        <label htmlFor="">Vehicle ID </label>
        <Input
          type="text"
          value={vehicleID}
          onChange={(e) => {
            setvehicleID(e.target.value);
          }}
          name="vehicleID"
          placeholder="vehicleID "
        />
        <label htmlFor="">Vehicle Number</label>
        <Input
          type="text"
          value={vehicleNumber}
          onChange={(e) => {
            setvehicleNumber(e.target.value);
          }}
          name="vehicleNumber"
          placeholder="vehicleNumber"
        />
        <label htmlFor="">Phone Number</label>
        <Input
          type="Number"
          value={phoneNumber}
          onChange={(e) => {
            setphoneNumber(e.target.value);
          }}
          name="phoneNumber"
          placeholder="phoneNumber"
        />
        <label htmlFor="">Driver ID</label>
        <Input
          type="text"
          value={driverID}
          onChange={(e) => {
            setdriverID(e.target.value);
          }}
          name="driverID"
          placeholder="driverID"
        />
        <label htmlFor="">Unit Fee</label>
        <Input
          type="text"
          value={unitFee}
          onChange={(e) => {
            setunitFee(e.target.value);
          }}
          name="unitFee"
          placeholder="unitFee"
        />
        <label htmlFor="">Deliver Area</label>
        <Input
          type="text"
          value={deliverArea}
          onChange={(e) => {
            setdeliverArea(e.target.value);
          }}
          name="deliverArea"
          placeholder="deliverArea"
        />
        <label htmlFor="">Map Url</label>
        <Input
          type="text"
          value={mapUrl}
          onChange={(e) => {
            setmapUrl(e.target.value);
          }}
          name="mapUrl"
          placeholder="mapUrl"
        />
        <Button className="update-btn" onClick={changeOnClick}>
          Update
        </Button>
      </Form>
    </div>
  );
}

export default UpdateLorry;
