import React, { useState } from "react";

function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");
  const handleChange = (event) => {
    setUserInput(event.currentTarget.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userInput}
            onChange={handleChange}
            placeholder="Enter Task ..."
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default ToDoForm;
