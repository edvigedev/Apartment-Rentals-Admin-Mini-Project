import React from "react";
import { useState } from "react";
import propertyDatas from "../assets/data/data.json";

const PropertyList = () => {
  const [properties, setProperties] = useState(propertyDatas.results);
  console.log(properties);
  return (
    <div className="all-properties">
      {properties.map((property) => (
        <div className="property-container" key={property.id}>
          <img src={property.picture_url} />
          <h1>{property.name}</h1>
          <h3>{property.price} $</h3>
          <div>
            Host Identity Verified
            {property.host_identity_verified === true ? "✅" : "❌"}
          </div>
          <button
            className=" delete-button"
            onClick={() =>
              setProperties(
                properties.filter((currProperty) => currProperty !== property)
              )
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
