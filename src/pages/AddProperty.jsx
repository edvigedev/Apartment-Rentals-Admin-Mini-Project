import React, { useState } from "react";

const AddProperty = ({ properties, setProperties }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleTitleInput = (event) => setTitle(event.target.value);
  const handlePriceInput = (event) => setPrice(event.target.value);
  const handleImageInput = (event) => setImage(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProperty = { title, price, image };
    console.log(newProperty);
    setProperties([newProperty, ...properties]);

    setTitle("");
    setPrice("");
    setImage("");
  };

  return (
    <div className="add-property">
      <h4>Property details below</h4>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleTitleInput}
          placeholder="Property name"
        />
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={handlePriceInput}
          placeholder="What is the price per day ?"
        />
        <label>Image:</label>
        <input
          type="url"
          name="image"
          value={image}
          onChange={handleImageInput}
          placeholder="Put some image of the house !"
        />
        <button type="submit">Add a Property</button>
      </form>
    </div>
  );
};

export default AddProperty;
