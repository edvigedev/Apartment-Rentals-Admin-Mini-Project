import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import PropertyList from "./Components/PropertyList";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <PropertyList />
      </div>
      <Footer />
    </div>
  );
}
export default App;
