import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import PropertyList from "./Components/PropertyList";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <PropertyList />
      <Footer />
    </>
  );
}

export default App;
