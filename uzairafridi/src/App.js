import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Experiences from "./pages/Experiences"

import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/experiences" element={<Experiences />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
