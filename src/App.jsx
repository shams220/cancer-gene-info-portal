import { Routes, Route } from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import CancerDataPortal from "./CancerDataPortal";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CancerDataPortal />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Global Toast Container */}
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
