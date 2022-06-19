import React, { useState } from "react";
import ComponentC from "./ComponentC";

function ComponentB() {
  const [name, setName] = useState("Michael");

  return (
    <>
      <h2>Component B</h2>
      <p>Name is: {name}</p>
      <ComponentC />
    </>
  );
}

export default ComponentB;
