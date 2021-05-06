import React, { useState } from "react";
import "./destinationTemplate.css";

function DestinationTemplate({ hotels }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="card">
      <h2>{hotels.hotel_name}</h2>
      <h4>{hotels.city}</h4>
      <p className="price">
        Price: <span>{hotels.price}€</span> /day/person
      </p>
      <img src={hotels.image} />

      <button className="showButton" onClick={() => setShowMore((state) => !state)}>
        {showMore ? "Show less" : "Show more"}
      </button>

      {showMore && (
        <div className="moreInfo">
          <div className="leftSide">
            <p className="star">
              {hotels.rating} <i class="fas fa-star"></i>
            </p>
            <p>Parking: {hotels.parking ? <i class="fas fa-parking"></i> : <i class="far fa-frown"></i>}</p>
            <p>Wellness: {hotels.wellness ? <i class="fas fa-spa"></i> : <i class="far fa-frown"></i>}</p>
            <p>Wifi: {hotels.wifi ? <i class="fas fa-wifi"></i> : <i class="far fa-frown"></i>}</p>
          </div>
          <div className="rightSide">
            <p>Pets: {hotels.pets ? <i class="fas fa-paw"></i> : <i class="far fa-frown"></i>}</p>
            <p>Fitness: {hotels.fitness ? <i class="fas fa-dumbbell"></i> : <i class="far fa-frown"></i>}</p>
            <p>Restaurant: {hotels.restaurant ? <i class="fas fa-utensils"></i> : <i class="far fa-frown"></i>}</p>
            <p>Bar: {hotels.bar ? <i class="fas fa-glass-martini-alt"></i> : <i class="far fa-frown"></i>}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DestinationTemplate;
