import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { v4 as uuidv4 } from "uuid";

const AddProperty = ({ properties, setProperties }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [hostImage, setHostImage] = useState("");
  const [hostName, setHostName] = useState("");
  const [amenities, setAmenities] = useState("");

  const nav = useNavigate();

  const handleTitleInput = (event) => setTitle(event.target.value);
  const handlePriceInput = (event) => setPrice(event.target.value);
  const handleLocationInput = (event) => setLocation(event.target.value);
  const handleDescriptionInput = (event) => setDescription(event.target.value);
  const handleHostNameInput = (event) => setHostName(event.target.value);
  const handleAmenitiesInput = (event) => setAmenities(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProperty = {
      id: uuidv4(), // Unique ID
      name: title,
      location: location,
      description: description,
      price: `$${parseFloat(price).toFixed(2)}`,
      picture_url: image,
      host_picture_url: hostImage,
      host_name: hostName,
      amenities: amenities.split(",").map((amenity) => amenity.trim()), // Convert comma-separated string into an array
      host_identity_verified: true, // Example default value
    };
    console.log("New Property:", newProperty);

    // Update properties
    setProperties([newProperty, ...properties]);

    // Navigate back to the main page
    nav("/");

    // Clear form inputs
    setTitle("");
    setLocation("");
    setDescription("");
    setPrice("");
    setImage("");
    setHostImage("");
    setHostName("");
    setAmenities("");
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

  const {
    getRootProps: getPropertyRootProps,
    getInputProps: getPropertyInputProps,
  } = useDropzone({
    onDrop: (files) => handleFileChange(files, setImage),
    accept: "image/jpeg, image/png, image/gif",
    multiple: false,
  });

  const { getRootProps: getHostRootProps, getInputProps: getHostInputProps } =
    useDropzone({
      onDrop: (files) => handleFileChange(files, setHostImage),
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

        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={location}
          onChange={handleLocationInput}
          placeholder="Property location"
          required
        />

        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescriptionInput}
          placeholder="Property description"
          required
        />

        <label>Image:</label>
        <div
          {...getPropertyRootProps()}
          style={{
            border: "2px dashed #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <input {...getPropertyInputProps()} />
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
          value={price}
          min={0}
          onChange={handlePriceInput}
          placeholder="What is the price per night?"
          required
        />

        <label>Host Image:</label>
        <div
          {...getHostRootProps()}
          style={{
            border: "2px dashed #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <input {...getHostInputProps()} />
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

        <label>Host Name:</label>
        <input
          type="text"
          name="title"
          value={hostName}
          onChange={handleHostNameInput}
          placeholder="Host name"
          required
        />

        <label>Amenities:</label>
        <input
          type="text"
          name="description"
          value={amenities}
          onChange={handleAmenitiesInput}
          placeholder="Property amenities"
          required
        />

        <button type="submit">Add a Property</button>
      </form>
    </div>
  );
};

export default AddProperty;
