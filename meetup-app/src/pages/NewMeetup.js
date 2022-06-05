import React from "react";
import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    // By Default Fetch sends the GET request
    fetch("https://meetup-app-1c629-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        // Some API's require this to tell them that app is carrying JSON data
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/");
    });
  }
  return (
    <>
      <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </section>
    </>
  );
}

export default NewMeetup;
