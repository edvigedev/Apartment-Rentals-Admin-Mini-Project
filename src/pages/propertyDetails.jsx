import React from "react";

const PropertyDetails = ({ property }) => {
  if (!property) {
    return (
      <div className="property-details-page">
        Property details not available.
      </div>
    );
  }

  return (
    <div className="property-details-page">
      <img
        src={property.picture_url}
        className="property-details-image"
        alt={property.name || "Property image"}
      />
      <h1 className="property-details-title">{property.name}</h1>
      <h3 className="property-details-price">
        Price: {property.price != null ? property.price : "N/A"}
      </h3>
      <p></p>
    </div>
  );
};

export default PropertyDetails;
