import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update = ({ properties, setProperties }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  //   const handleTitleInput = (event) => setTitle(event.target.value);
  //   const handlePriceInput = (event) => setPrice(event.target.value);
  //   const handleImageInput = (event) => setImage(event.target.value);

  const { propertyId } = useParams();

  useEffect(() => {
    const foundProperty = properties.find(
      (oneProperty) => oneProperty.id == propertyId
    );
    console.log(foundProperty, propertyId);

    console.log(foundProperty.name);

    setName(foundProperty.name);
    setImage(foundProperty.image);
  }, [properties, propertyId]); // Dependency array ensures useEffect runs only when properties or propertyId change

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProperty = {
      name,
      price,
      image,
    };
    const updatedArr = properties.map((oneProperty) => {
      if (oneProperty.id == propertyId) {
        return updatedProperty;
      } else {
        return oneProperty;
      }
    });
    setProperties(updatedArr);
  };

  return (
    <div>
      <h4>Property details below</h4>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={name}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Property name"
        />
        <label>Image:</label>
        <input
          type="url"
          name="image"
          value={image}
          onChange={(event) => setImage(event.target.value)}
          placeholder="Put some image of the house!"
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
