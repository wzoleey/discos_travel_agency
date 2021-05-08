import React, { useState, useEffect } from "react";
import "./destination.css";
import DestinationTemplate from "../DestinationTemplate/DestinationTemplate";
import { v4 as uuidv4 } from "uuid";

const Destination = () => {
  const [data, setData] = useState([]);
  const [callData, setCallData] = useState(true);
  const [city, setCity] = useState("");

  const [response, setResponse] = useState(true);
  const [isShow, setIsShow] = useState(true);

  console.log(data);
  useEffect(() => {
    setData([]);

    fetch(`http://localhost:4000/destination/${city}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setData([]));
  }, [callData]);

  const searchButton = () => {
    setCallData(!callData);
    setIsShow(!isShow);

    fetch(`http://localhost:4000/destination/${city}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        city: city,
      }),
    })
      .then((response) => setResponse(response))
      .catch((error) => setResponse(false));
  };

  return (
    <div className="destination">
			<h3>Book a hotel with us from anywhere in the world.</h3>
      <div className="input-button">
        <input
          type="text"
          placeholder="search city"
          onChange={(e) => setCity(e.target.value)}
          onFocus={(e) => setCity((e.target.value = ""))}
        />
        <button onClick={searchButton}>Search</button>
      </div>

      <div className="destination-temp">
        {data.map((hotels) => (
          <DestinationTemplate key={uuidv4()} hotels={hotels} />
        ))}
      </div>
    </div>
  );
};

export default Destination;
