import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { Route, Routes } from "react-router-dom";
import PropertyList from "./Components/PropertyList";
import PropertyDetails from "./pages/propertyDetails";
import AboutUs from "./pages/aboutUs";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<PropertyList />} />
          <Route
            path="/PropertyDetails/:PropertyId"
            element={<PropertyDetails />}
          />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;
