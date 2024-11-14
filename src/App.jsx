import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { Route, Routes } from "react-router-dom";
import PropertyList from "./Components/PropertyList";
import PropertyDetails from "./pages/propertyDetails";
import AboutUs from "./pages/aboutUs";
import propertyDatas from "./assets/data/data.json";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<PropertyList />} />
          <Route path="/propertyDetails" element={<PropertyDetails />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;
