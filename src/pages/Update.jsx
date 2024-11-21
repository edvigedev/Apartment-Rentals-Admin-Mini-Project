import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDropzone } from "react-dropzone";

const fileTypes = ["image/jpeg", "image/png", "image/gif"]; // Allowed file types

const Update = ({ properties, setProperties }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(""); // Base64 or file path
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [hostImage, setHostImage] = useState("");
  const [hostName, setHostName] = useState("");
  const [amenities, setAmenities] = useState([]);

  const { propertyId } = useParams();
  const nav = useNavigate();

  // Load existing property data
  useEffect(() => {
    const foundProperty = properties.find(
      (oneProperty) => String(oneProperty.id) === propertyId
    );

    if (foundProperty) {
      setName(foundProperty.name || "");
      setImage(foundProperty.picture_url || "");
      setPrice(foundProperty.price?.replace("$", "") || "");
      setLocation(foundProperty.location || "");
      setDescription(foundProperty.description || "");
      setHostName(foundProperty.host_name || "");
      setHostImage(foundProperty.host_picture_url || "");
      setAmenities(foundProperty.amenities || []); // Ensure amenities is always an array
    }
  }, [properties, propertyId]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProperty = {
      id: propertyId,
      name,
      picture_url: image,
      price: `$${parseFloat(price).toFixed(2)}`,
      location,
      description,
      host_name: hostName,
      host_picture_url: hostImage,
      amenities: Array.isArray(amenities)
        ? amenities
        : amenities.split(",").map((item) => item.trim()), // Split only if it's a string
    };

    const updatedArr = properties.map((oneProperty) => {
      if (String(oneProperty.id) === propertyId) {
        return { ...oneProperty, ...updatedProperty };
      }
      return oneProperty;
    });

    setProperties(updatedArr);
    nav("/");
  };

  // Handle file drop
  const handleFileChange = (acceptedFiles, setter) => {
    const reader = new FileReader();
    reader.onload = () => {
      setter(reader.result); // Convert to Base64 for display or saving
    };
    reader.readAsDataURL(acceptedFiles[0]); // Read the first file
  };

  const { getRootProps: getImageRootProps, getInputProps: getImageInputProps } =
    useDropzone({
      onDrop: (files) => handleFileChange(files, setImage),
      accept: fileTypes.join(", "),
      multiple: false,
    });

  const {
    getRootProps: getHostImageRootProps,
    getInputProps: getHostImageInputProps,
  } = useDropzone({
    onDrop: (files) => handleFileChange(files, setHostImage),
    accept: fileTypes.join(", "),
    multiple: false,
  });

  return (
    <div>
      <h4>Update the Property</h4>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name || ""}
          onChange={(event) => setName(event.target.value)}
          placeholder="Property Name"
        />

        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={location || ""}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Property Location"
        />

        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={price || ""}
          onChange={(event) => setPrice(event.target.value)}
          placeholder="Price"
        />

        <label>Image:</label>
        <div
          {...getImageRootProps()}
          style={{
            border: "2px dashed #ccc",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          <input {...getImageInputProps()} />
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

        <label>Description:</label>
        <textarea
          name="description"
          value={description || ""}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Property Description"
          rows="4"
        />

        <label>Host Image:</label>
        <div
          {...getHostImageRootProps()}
          style={{
            border: "2px dashed #ccc",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          <input {...getHostImageInputProps()} />
          <p>Drag and drop a host image here, or click to select</p>
        </div>
        {hostImage && (
          <div>
            <p>Preview:</p>
            <img
              src={hostImage}
              alt="Host"
              style={{ width: "200px", height: "auto", marginTop: "10px" }}
            />
          </div>
        )}

        <label>Host Name:</label>
        <input
          type="text"
          name="hostName"
          value={hostName || ""}
          onChange={(event) => setHostName(event.target.value)}
          placeholder="Host Name"
        />

        <label>Amenities:</label>
        <textarea
          name="amenities"
          value={Array.isArray(amenities) ? amenities.join(", ") : amenities} // Convert array to string for input
          onChange={(event) => setAmenities(event.target.value)} // Save as string
          placeholder="Amenities (comma-separated)"
          rows="3"
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
