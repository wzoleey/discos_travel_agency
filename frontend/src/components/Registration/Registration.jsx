import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./registration.css";

const Registration = () => {
  const [inputData, setInputData] = useState(false);

  useEffect(() => {
    if (inputData) {
      const userData = document.querySelectorAll(".input");
      const userDataArr = {};
      for (let data of userData) {
        userDataArr[data.name] = data.value;
      }

      //console.log(userDataArr);
      let formData = new FormData();

      formData.append("userdata", JSON.stringify(userDataArr));

      fetch("http://localhost:4000/app/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDataArr),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.log("Error:", error);
        });

      setInputData(false);
    }
  }, [inputData]);

  return (
    <div className="registration">
      <div className="picture">
        <img src="../../../images/registration.jpg" alt="" />
      </div>
      <div className="registrationForm">
        <h3>Registration</h3>
        <input
          className="input"
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          onFocus={(e) => setInputData((e.target.value = ""))}
        />

        <input
          className="input"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onFocus={(e) => setInputData((e.target.value = ""))}
        />

        <input
          className="input"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onFocus={(e) => setInputData((e.target.value = ""))}
        />

        <input className="button" type="button" value="Submit" onClick={() => setInputData(true)} />
      </div>
    </div>
  );
};

export default Registration;
