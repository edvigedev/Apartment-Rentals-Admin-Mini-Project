import React from "react";
import { useParams } from "react-router-dom";
import propertyDatas from "../assets/data/data.json";

const PropertyDetails = ({ property }) => {
  const { PropertyId } = useParams(); // Get the property ID from the URL
  const propertyDetail = propertyDatas.results.find(
    (prop) => prop.id == PropertyId
  ); // Find the property with the matching ID

  console.log(propertyDetail);

  if (!propertyDetail) {
    return (
      <div className="property-details-page">
        Property details not available.
      </div>
    );
  }

  return (
    <div className="property-details-page">
      <img
        src={propertyDetail.picture_url}
        className="property-details-image"
        alt={propertyDetail.name || "Property image"}
      />
      <h1 className="property-details-title">{propertyDetail.name}</h1>
      <h3 className="property-details-price">
        Price: {propertyDetail.price != null ? propertyDetail.price : "N/A"}
      </h3>
      <p></p>
    </div>
  );
};

export default PropertyDetails;
