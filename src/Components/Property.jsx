import React from "react";
import { useState } from "react";
import PropertyList from "./PropertyList";

/**
 * A single property component that displays its details and allows deletion.
 *
 * @param {object} property - The property object to be displayed.
 * @param {function} deleteProperty - The function to handle property deletion.
 */
const Property = ({ property, deleteProperty }) => {
  return (
    <div>
      <div className="property-container" key={property.id}>
        <img src={property.picture_url} />
        <h1>{property.name}</h1>
        <h3>Price: {property.price} </h3>
        <div id="verified">
          Verified Host {property.host_identity_verified === true ? "✅" : "❌"}
        </div>
        <button
          className="delete-button"
          onClick={() => deleteProperty(property.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Property;
