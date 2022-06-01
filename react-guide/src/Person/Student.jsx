import React from "react";

function Student(props) {
  return (
    <>
      {/* Now we will Use React props (properties) to pass data dynamically */}
      <h4>
        I am {props.name}, student of {props.school} and I am {props.age} years
        old.
      </h4>
      {/* props.children render all the things which is wrap
       between Student component tag in App.js file i.e between closing and opening tag*/}
      <p>{props.children}</p>
    </>
  );
}

export default Student;
