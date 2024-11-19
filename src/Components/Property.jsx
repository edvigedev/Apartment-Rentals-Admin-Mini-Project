import React from "react";
import { Link } from "react-router-dom";

const Property = ({ property, deleteProperty }) => {
  return (
    <div>
      <div className="property-container" key={property.id}>
        <img
          src={property.picture_url || "/path/to/default-image.jpg"}
          alt={property.name}
          style={{ width: "200px", height: "auto" }}
        />
        <div className="infos-text">
          <Link
            to={`/propertyDetails/${property.id}`}
            className="property-links"
          >
            <h1>{property.name}</h1> {/* Clickable link to PropertyDetails */}
          </Link>
          <h3>Price: {property.price} night </h3>
          <div id="verified">
            Verified Host{" "}
            {property.host_identity_verified === true ? <p>✅</p> : <p>❌</p>}
          </div>

          <div id="labels">
            {parseFloat(property.price.replace("$", "")) <= 50 ? (
              <label className="great-deals">Great Deal</label>
            ) : parseFloat(property.price.replace("$", "")) <= 150 ? (
              <label className="premium">Premium</label>
            ) : (
              <label className="vip">VIP</label>
            )}
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
