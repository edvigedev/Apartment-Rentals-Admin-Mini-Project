import React from "react";
import Property from "../Components/Property";

/**
 * PropertyList component renders a list of properties.
 */
const GreatDeals = ({ properties, setProperties }) => {
  // Initialize state with property data using useState hook

  const deleteProperty = (propertyId) => {
    // Filter out properties with the specified ID from state
    setProperties(properties.filter((property) => property.id !== propertyId));
  };

  return (
    // Render a div element to contain the property list
    <div>
      {properties.map((property) => {
        // Ignore properties with null or undefined price
        if (!property.price) return null;
        if (parseFloat(property.price.replace("$", "")) >= 50) return null;

        // Render Property component for each property in state
        // Use property ID as key for mapping
        return (
          <div key={property.id}>
            <Property
              property={property}
              deleteProperty={deleteProperty} // Pass deleteProperty function to Property component
            />
          </div>
        );
      })}
    </div>
  );
};

export default GreatDeals;
