import React from "react";
import { Link, useParams } from "react-router-dom";

const PropertyDetails = ({ properties }) => {
  const { propertyId } = useParams();

  // Find the property in the updated properties state
  const propertyDetail = properties.find(
    (prop) => String(prop.id) === propertyId
  );

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
        Price: {propertyDetail.price ? propertyDetail.price : "N/A"} q.d.
      </h3>
      <div className="property-details-host-info">
        <img
          src={propertyDetail.host_picture_url || "default-host.jpg"}
          alt={propertyDetail.host_name || "Host Name"}
          style={{ width: "150px", height: "150px", borderRadius: "50%" }}
        />
        <h4>Your host, {propertyDetail.host_name || "Unknown"}</h4>
        <p>{propertyDetail.host_is_superhost ? "Superhost" : "Regular Host"}</p>
        <div id="property-detail-verified">
          Verified{" "}
          {propertyDetail.host_identity_verified ? <p>✅</p> : <p>❌</p>}
        </div>
      </div>
      <div className="property-details-amenities">
        <h4>Amenities:</h4>
        <ul>
          {Array.isArray(propertyDetail.amenities) &&
          propertyDetail.amenities.length > 0 ? (
            propertyDetail.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))
          ) : (
            <p>No amenities listed</p>
          )}
        </ul>
        <Link to={`/Update/${propertyId}`}>
          <button className="update-button">Update</button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyDetails;
