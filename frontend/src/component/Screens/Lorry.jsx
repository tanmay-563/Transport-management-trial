import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import "./css.css";
import { Form, Input } from "antd";
import jsPDF from "jspdf";
import "jspdf-autotable";

function Lorry() {
  const [Data, setData] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [vehicleID, setvehicleID] = useState("");
  const [vehicleType, setvehicleType] = useState("Lorry");
  const [vehicleNumber, setvehicleNumber] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [driverID, setdriverID] = useState("");
  const [unitFee, setunitFee] = useState("");
  const [deliverArea, setdeliverArea] = useState("");
  const [mapUrl, setmapUrl] = useState("");
  const [reload, setReload] = useState(false);

  const [filteredproduct, setFilteredproduct] = useState([]);
  const [searchinput, setSearchinput] = useState("");
  const [productlist, setProductlist] = useState([]);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    axios
      .post("http://localhost:5000/deliverVehicle/add", {
        vehicleID,
        vehicleType,
        vehicleNumber,
        phoneNumber,
        driverID,
        unitFee,
        deliverArea,
        mapUrl,
      })
      .then((res) => {
        setvehicleNumber("");
        setVehicle("");
        setvehicleID("");
        setphoneNumber("");
        setdriverID("");
        setunitFee("");
        setdeliverArea("");
        setmapUrl("");
        console.log(res);
        setIsModalOpen(false);
        setReload(true);
      });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    (async () =>
      await axios.get("http://localhost:5000/deliverVehicle/").then((res) => {
        setData(res.data.filter((veh) => veh.vehicleType === "Lorry"));
        console.log(Data);
        setReload(false);
      }))();
  }, [reload]);

  const Delete = (id) => {
    axios
      .delete(`http://localhost:5000/deliverVehicle/${id}`)
      .then((res) => {});
    setReload(true);
  };

  const searchItems = (searchValue) => {
    setSearchinput(searchValue);
    if (searchinput !== "") {
      const filteredData = Data.filter((list) => {
        return Object.values(list.vehicleID)
          .join("")
          .toLowerCase()
          .includes(searchinput.toLowerCase());
      });
      console.log(searchValue);
      setFilteredproduct(filteredData);
    } else {
      setFilteredproduct(Data);
    }
  };

  //pdf generate
  const genPDF = () => {
    const doc = new jsPDF({
      orientation: "landscape",
    });
    doc.setFontSize(20);
    doc.text("Lorry Details", 10, 10);

    doc.autoTable({
      html: "#content",
    });
    doc.save("Lorry Details.pdf");
  };

  

  return (
    <div className="lorry">
      <div className="title">
        <h1>Available Lorry List</h1>
        <Button className="van-btn" onClick={showModal}>
          Add Lorry Details
        </Button>
      </div>
      <div className="searchinput">
        <Input
          className="home-input"
          type="search"
          placeholder="Search"
          onChange={(e) => searchItems(e.target.value)}
          name="searchitem"
        />
        <Button onClick={genPDF}>Download All Lorry Details</Button>
      </div>
      <table class="table" id="content">
        <thead>
          <tr>
            <th scope="col">vehicle ID</th>
            <th scope="col">vehicle Number</th>
            <th scope="col">phone Number</th>
            <th scope="col">driver ID</th>
            <th scope="col">unit Fee</th>
            <th scope="col">deliver Area</th>
            <th scope="col">map Url</th>
          </tr>
        </thead>
        <tbody>
          {searchinput.length > 1
            ? filteredproduct.map((data) => {
                return (
                  <tr>
                    <td>{data.vehicleID}</td>
                    <td>{data.vehicleNumber}</td>
                    <td>{data.phoneNumber}</td>
                    <td>{data.driverID}</td>
                    <td>{data.unitFee}</td>
                    <td>{data.deliverArea}</td>
                    <td className="texts">{data.mapUrl}</td>
                    <td>
                      <Button
                        className="delete-btn"
                        onClick={() => Delete(data._id)}
                      >
                        Delete
                      </Button>
                    </td>
                    <td>
                      {" "}
                      <Button
                        className="updatee-btn"
                        href={`/Lorryupdate/${data._id}`}
                      >
                        Update
                      </Button>
                    </td>
                  </tr>
                );
              })
            : Data?.map((data) => {
                return (
                  <tr>
                    <td>{data.vehicleID}</td>
                    <td>{data.vehicleNumber}</td>
                    <td>{data.phoneNumber}</td>
                    <td>{data.driverID}</td>
                    <td>{data.unitFee}</td>
                    <td>{data.deliverArea}</td>
                    <td className="texts">{data.mapUrl}</td>
                    <td>
                      <Button
                        className="delete-btn"
                        onClick={() => Delete(data._id)}
                      >
                        Delete
                      </Button>
                    </td>
                    <td>
                      {" "}
                      <Button
                        className="updatee-btn"
                        href={`/Lorryupdate/${data._id}`}
                      >
                        Update
                      </Button>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
      <Modal
        okText={"Add Lorry"}
        title="Add New Lorry 😊"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="admin-right">
          <Form className="modal-form">
            <Input
              required="true"
              type="text"
              value={vehicleID}
              onChange={(e) => {
                setvehicleID(e.target.value);
              }}
              name="vehicleID"
              placeholder="vehicle ID "
            />
            <Input
              required="true"
              type="text"
              value={vehicleNumber}
              onChange={(e) => {
                setvehicleNumber(e.target.value);
              }}
              name="vehicleNumber"
              placeholder="vehicle Number"
            />
            <Input
              required="true"
              type="Number"
              value={phoneNumber}
              onChange={(e) => {
                setphoneNumber(e.target.value);
              }}
              name="phoneNumber"
              placeholder="phone Number"
            />
            <Input
              required="true"
              type="text"
              value={driverID}
              onChange={(e) => {
                setdriverID(e.target.value);
              }}
              name="driverID"
              placeholder="driver ID"
            />
            <Input
              required="true"
              type="text"
              value={unitFee}
              onChange={(e) => {
                setunitFee(e.target.value);
              }}
              name="unitFee"
              placeholder="unit Fee"
            />
            <Input
              required="true"
              type="text"
              value={deliverArea}
              onChange={(e) => {
                setdeliverArea(e.target.value);
              }}
              name="deliverArea"
              placeholder="deliver Area"
            />
            <Input
              required="true"
              type="text"
              value={mapUrl}
              onChange={(e) => {
                setmapUrl(e.target.value);
              }}
              name="mapUrl"
              placeholder="map Url"
            />
          </Form>
        </div>
      </Modal>
    </div>
  );
}

export default Lorry;
