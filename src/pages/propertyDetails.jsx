import React from "react";

const propertyDetails = ({ property }) => {
  return (
    <div className="property-details-page">
      <img src={property.picture_url} classname="property-details-image" />
      <h1 className="property-details-title">{property.name}</h1>
      <h3 className="property-details-price">Price: {property.price} </h3>
      <p></p>
    </div>
  );
};

export default propertyDetails;
