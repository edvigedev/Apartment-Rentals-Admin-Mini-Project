import React from "react";
import { useParams } from "react-router-dom";
import propertyDatas from "../assets/data/data.json";

const PropertyDetails = () => {
  const { propertyId } = useParams(); // Obtenez l'ID depuis l'URL
  const propertyDetail = propertyDatas.results.find(
    (prop) => prop.id === Number(propertyId)
  ); // Trouvez la propriété correspondante

  if (!propertyDetail) {
    return (
      <div className="property-details-page">
        <h2>Property details not available.</h2>
      </div>
    );
  }

  return (
    <div className="property-details-container">
      <h1 className="property-details-title">
        {propertyDetail.name || "Property"}
      </h1>
      <p className="property-details-location">
        {propertyDetail.host_location || "Location not available"}
      </p>
      <div className="property-details-summary">
        {propertyDetail.description || "No description available"}
      </div>
      <img
        src={propertyDetail.picture_url || "default-image.jpg"}
        className="property-details-image"
        alt={propertyDetail.name || "Property Image"}
      />
      <h3 className="property-details-price">
        Price: {propertyDetail.price != null ? propertyDetail.price : "N/A"}
      </h3>
      <div className="property-details-host-info">
        <img
          src={propertyDetail.host_picture_url || "default-host.jpg"}
          alt={propertyDetail.host_name || "Host Name"}
        />
        <h4>Your host, {propertyDetail.host_name || "Unknown"}</h4>
        <p>{propertyDetail.host_is_superhost ? "Superhost" : "Regular Host"}</p>
      </div>
      <div className="property-details-amenities">
        <h4>Amenities:</h4>
        <ul>
          {propertyDetail.amenities && propertyDetail.amenities.length > 0
            ? propertyDetail.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))
            : "No amenities listed"}
        </ul>
      </div>
    </div>
  );
};

export default PropertyDetails;
