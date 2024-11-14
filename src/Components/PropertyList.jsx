// Import React library and useState hook from react library
import React from "react";
// Import useState hook from react library
import { useState } from "react";
// Import property data from assets/data/data.json file
import propertyDatas from "../assets/data/data.json";
// Import Property component from properties/Property.js file
import Property from "./Property";

/**
 * PropertyList component renders a list of properties.
 */
const PropertyList = () => {
  // Initialize state with property data using useState hook
  const [properties, setProperties] = useState(propertyDatas.results);

  const deleteProperty = (propertyId) => {
    // Filter out properties with the specified ID from state
    setProperties(properties.filter((property) => property.id !== propertyId));
  };

  return (
    // Render a div element to contain the property list
    <div>
      {properties.map((property) => (
        // Render Property component for each property in state
        // Use property ID as key for mapping
        <div key={property.id}>
          <Link to={`/propertyDetails/${property.id}`}>
            <h2>{property.name}</h2> {/* Clickable link to PropertyDetails */}
          </Link>
          <Property
            property={property}
            deleteProperty={deleteProperty} // Pass deleteProperty function to Property  component
          />
        </div>
      ))}
    </div>
  );
};

// Export PropertyList component as default export
export default PropertyList;
