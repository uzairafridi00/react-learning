import React from "react";
import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
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
        {modalIsOpen && (
          <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
        )}
        {/* onClick will not work bcz its our builtin component, we will use props and configure it. 
        Its our component so we can name it anything i.e onClick or onCacnel */}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      </div>
    </div>
  );
}

export default Todo;
