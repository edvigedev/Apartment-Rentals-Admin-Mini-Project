import React from "react";
import { useState } from "react";
import PropertyList from "./PropertyList";
import { Link } from "react-router-dom";

const Property = ({ property, deleteProperty }) => {
  return (
    <div>
      <div className="property-container" key={property.id}>
        <img src={property.picture_url} />
        <div className="infos-text">
          <Link
            to={`/propertyDetails/${property.id}`}
            className="property-links"
          >
            <h1>{property.name}</h1> {/* Clickable link to PropertyDetails */}
          </Link>
          <h3>Price: {property.price} </h3>
          <div id="verified">
            Verified Host{" "}
            {property.host_identity_verified === true ? "✅" : "❌"}
          </div>
          <button
            className="delete-button"
            onClick={() => deleteProperty(property.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Property;
