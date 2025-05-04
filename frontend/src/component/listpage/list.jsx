import React from "react";
import "../listpage/list.css";
import Button from "react-bootstrap/Button";

export default function list() {
  return (
    <div class="centered">
      <div class="cards">
        <div class="card">
          <div class="border"></div>
          <a class="content" href="/Lorry">
            <div class="content">
              <img src="https://thumbs.dreamstime.com/b/close-up-lorry-truck-road-15533886.jpg" />
              <h2>Lorry</h2>
              <p> If you want to see lorry.please click Here  </p>
            </div>
          </a>
        </div>
        <div class="card">
          <div class="border"></div>
          <a href="/Truck" class="content">
            <div class="content">
              <img src="https://media.gettyimages.com/id/1156528620/photo/long-haul-semi-truck-on-a-rural-western-usa-interstate-highway.jpg?s=612x612&w=gi&k=20&c=MKD5Vz--2kKNyZc8U1C_KWGWkPuP9_nLfihhHvjto88=" />
              <h2>Truck</h2>
              <p> If you want to see truck.please click Here</p>
            </div>
          </a>
        </div>
        <div class="card">
          <div class="border"></div>
          <a href="/Van" class="content">
            <div class="content">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ZBtucYyqBbC9ulJAQge5EfGYyLEqJXzfJA&usqp=CAU" />
              <h2>Van</h2>
              <p> If you want to see van.please click Here </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
