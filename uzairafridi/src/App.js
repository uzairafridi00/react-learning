import React, { useEffect } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Animation Library
import AOS from "aos";
import "aos/dist/aos.css";

// All the Components and Pages
import Home from "./pages/Home";
import Work from "./pages/Work";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Footer from "./pages/Footer";
import Blog from "./pages/Blog";
// import Particle from "./components/Particle";

function App() {
  // AOS library Configuration
  useEffect(() => {
    AOS.init({
      delay: 1000,
      duration: 500,
      easing: "ease-in",
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="App">
        <Router>
          {/* <Particle /> */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/work" element={<Work />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
