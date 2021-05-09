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

      <input className="input" type="email" name="email" id="email" placeholder="Email" required />
      <input className="input" type="text" name="city" id="city" placeholder="City" required />
      <input className="input" type="text" name="address" id="address" placeholder="Street name" required />
      <div className="num">
        <input className="input" type="number" name="zipCode" id="zipCode" placeholder="Zip code" required />
        <input className="input" type="number" name="streetN" id="streetN" placeholder="Street num." required />
      </div>
      <input className="input" type="text" name="other" id="other" placeholder="Other" />
      <input className="button" type="button" value="Submit" onClick={() => setInputData(true)} />
    </div>
  );
};

export default Reservation;
