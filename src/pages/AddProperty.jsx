import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { v4 as uuidv4 } from "uuid";

const AddProperty = ({ properties, setProperties }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const nav = useNavigate();

  const handleTitleInput = (event) => setTitle(event.target.value);
  const handlePriceInput = (event) => setPrice(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProperty = {
      id: uuidv4(), // Make sure to generate a unique ID
      name: title,
      price: `$${parseFloat(price).toFixed(2)}`,
      picture_url: image, // Map image to picture_url
      host_identity_verified: true, // Example default value
    };
    console.log("New Property:", newProperty);

    // Update properties
    setProperties([newProperty, ...properties]);

    // Navigate back to the main page
    nav("/");

    // Clear form inputs
    setTitle("");
    setPrice("");
    setImage("");
  };

  // Handle file drop
  const handleFileChange = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.onload = () => {
        setImage(reader.result); // Convert to Base64 for preview
      };

      reader.readAsDataURL(file); // Read the file
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleFileChange,
    accept: "image/jpeg, image/png, image/gif",
    multiple: false,
  });

  return (
    <div className="add-property">
      <h4>Property Details Below</h4>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleTitleInput}
          placeholder="Property name"
          required
        />

        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={price}
          min={0}
          onChange={handlePriceInput}
          placeholder="What is the price per night?"
          required
        />

        <label>Image:</label>
        <div
          {...getRootProps()}
          style={{
            border: "2px dashed #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <input {...getInputProps()} />
          <p>Drag and drop an image here, or click to select</p>
        </div>

        {image && (
          <div>
            <p>Preview:</p>
            <img
              src={image}
              alt="Property"
              style={{ width: "200px", height: "auto", marginTop: "10px" }}
            />
          </div>
        )}

        <button type="submit">Add a Property</button>
      </form>
    </div>
  );
};

export default AddProperty;
