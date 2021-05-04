import React from "react";
import "./destinationTemplate.css";

function DestinationTemplate(props) {
  return (
    <div className="card">
      <h2>{props.item.city}</h2>
      <p>Hotel: {props.item.hotel_name}</p>
      <p>Rooms:{props.item.number_of_rooms}</p>
      <p>Price: {props.item.price} $</p>
      <img src="../../images/Paris.jpg" />
			<img src="{props.item.image}" />
    </div>
  );
}

export default DestinationTemplate;
