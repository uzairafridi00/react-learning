import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/NavbarApp";
import Shop from "./components/Shop";

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <Shop />
      </div>
    </>
  );
}

export default App;
