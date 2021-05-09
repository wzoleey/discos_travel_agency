import React, { useState, useEffect } from "react";
import axios from "axios";
import "./reservation.css";

const Reservation = () => {
  const [inputData, setInputData] = useState(false);

  useEffect(() => {
    if (inputData) {
      const userdata = document.querySelectorAll(".input");
      const userDataArr = {};

      for (let data of userdata) {
        userDataArr[data.name] = data.value;
      }

      console.log(userDataArr);
      let formData = new FormData();

      formData.append("userdata", JSON.stringify(userDataArr));
      axios({
        method: "post",
        url: "http://localhost:4000/upload",
        data: formData,
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (response) {
          console.log(response);
        });

      setInputData(false);
    }
  }, [inputData]);

  return (
    <div className="reservationForm">
      <h3>Reservation</h3>

      <input className="input" type="email" name="email" id="email" placeholder="Email address" required />

      <input className="input" type="text" name="city" id="city" placeholder="City" />

      <input className="input" type="text" name="hotelName" id="hotelName" placeholder="Hotel name" required />

      <div className="num">
        <input className="input" type="number" name="numberOfAdult" id="numberOfAdult" placeholder="Adult" required />
        <input className="input" type="number" name="numberOfChild" id="numberOfChild" placeholder="Child" required />
        <input className="input" type="number" name="numberOfRoom" id="numberOfRoom" placeholder="Room" required />
      </div>

      <label>Start of booking</label>
      <input className="input" type="date" name="datumStart" id="datum" placeholder="Datum" />

      <label>End of booking</label>
      <input className="input" type="date" name="datumEnd" id="datum" placeholder="Datum" />

      <input className="button" type="button" value="Submit" onClick={() => setInputData(true)} />
    </div>
  );
};

export default Reservation;
