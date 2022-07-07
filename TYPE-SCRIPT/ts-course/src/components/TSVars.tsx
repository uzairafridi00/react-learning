import React from "react";

function TSVars() {
  const name: string = "Uziar";
  const age: number = 20;
  const isMarried: boolean = false;

  const getName = (name: string) => {
    if (name === "Uzair") {
      return 22;
    } else {
      return 20;
    }
  };
  return (
    <>
      <h1>Variables with Typed</h1>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{isMarried ? "Married" : "Not Married"}</p>
    </>
  );
}

export default TSVars;
