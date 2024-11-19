import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { Route, Routes } from "react-router-dom";
import PropertyList from "./Components/PropertyList";
import AboutUs from "./pages/aboutUs";
import AddProperty from "./pages/AddProperty";
import React, { useState } from "react";
import PropertyDatas from "./assets/data/data.json";
import PropertyDetails from "./pages/propertyDetails";
import GreatDeals from "./pages/GreatDeals";
import Premium from "./pages/Premium";
import Vip from "./pages/Vip";
import Update from "./pages/Update";

function App() {
  const [properties, setProperties] = useState(PropertyDatas.results);

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={
              <PropertyList
                properties={properties}
                setProperties={setProperties}
              />
            }
          />
          <Route
            path="/PropertyDetails/:propertyId"
            element={<PropertyDetails />}
          />
          <Route
            path="/AddProperty"
            element={
              <AddProperty
                properties={properties}
                setProperties={setProperties}
              />
            }
          />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route
            path="/GreatDeals"
            element={
              <GreatDeals
                properties={properties}
                setProperties={setProperties}
              />
            }
          />
          <Route
            path="/Premium"
            element={
              <Premium properties={properties} setProperties={setProperties} />
            }
          />
          <Route
            path="/Vip"
            element={
              <Vip properties={properties} setProperties={setProperties} />
            }
          />

          <Route
            path="/Update/:propertyId"
            element={
              <Update properties={properties} setProperties={setProperties} />
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;
