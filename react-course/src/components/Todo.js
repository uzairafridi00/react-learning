import React from "react";
import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }
  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
        {/* {modalIsOpen ? <Modal /> : null} */}
        {/* Here modalIsOpen initially is false when we click on deleteHandler it change its state to true */}
        {modalIsOpen && <Modal />}
        {modalIsOpen && <Backdrop />}
      </div>
    </div>
  );
}

export default Todo;
