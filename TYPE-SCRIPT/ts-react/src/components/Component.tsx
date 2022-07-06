import React from "react";

import './App.css';

function Component() {

  const user = [
    {name: "Ali", school: {name: "PMS School", location:"Gulbahar"}},
    {name: "Umair", school: {name: "Forward School", location:"Dalazak"}},
    {name: "Ahmad", school: null},
  ]

  return (
    <>
    <div className="App">
      {user.map((user)=> {
        return (
          <div>
            <h1>Name: {user.name}</h1>
            <h3>School: {user.school?.name} {user.school?.location}</h3>
          </div>
        )
      })}
    </div>
    </>
  );
}

export default Component;
