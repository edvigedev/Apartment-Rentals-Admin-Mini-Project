import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDropzone } from "react-dropzone";

const fileTypes = ["image/jpeg", "image/png", "image/gif"]; // Allowed file types

const Update = ({ properties, setProperties }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(""); // Base64 or file path
  const [price, setPrice] = useState("");

  const { propertyId } = useParams();
  const nav = useNavigate();

  // Load existing property data
  useEffect(() => {
    const foundProperty = properties.find(
      (oneProperty) => oneProperty.id == propertyId
    );

    if (foundProperty) {
      setName(foundProperty.name || "");
      setImage(foundProperty.picture_url || "");
      setPrice(foundProperty.price?.replace("$", "") || "");
    }
  }, [properties, propertyId]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProperty = {
      id: propertyId,
      name,
      picture_url: image, // Use updated image (drag-and-drop)
      price: `$${parseFloat(price).toFixed(2)}`, // Format price
    };

    const updatedArr = properties.map((oneProperty) => {
      if (oneProperty.id == propertyId) {
        return { ...oneProperty, ...updatedProperty };
      }
      return oneProperty;
    });

    setProperties(updatedArr);
    nav("/");
  };

  // Handle file drop
  const handleFileChange = (acceptedFiles) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result); // Convert to Base64 for display or saving
    };
    reader.readAsDataURL(acceptedFiles[0]); // Read the first file
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleFileChange,
    accept: "image/jpeg, image/png, image/gif",
    multiple: false,
  });

  return (
    <div>
      <h4>Update the Property</h4>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="title"
          value={name || ""}
          onChange={(event) => setName(event.target.value)}
          placeholder="Property Name"
        />

        <label>Image:</label>
        <div
          {...getRootProps()}
          style={{
            border: "2px dashed #ccc",
            padding: "10px",
            marginTop: "10px",
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

        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={price || ""}
          onChange={(event) => setPrice(event.target.value)}
          placeholder="Actual Price"
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
