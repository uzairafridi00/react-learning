import React from "react";
import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm() {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    console.log(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title: </label>
          <input type="text" id="title" required ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image: </label>
          <input type="url" id="image" required ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address : </label>
          <input type="text" id="address" required ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description </label>
          <textarea
            rows="5"
            id="description"
            required
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
