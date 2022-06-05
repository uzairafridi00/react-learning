import React from "react";
import MeetupItems from "./MeetupItems";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <div>
      <ul className={classes.list}></ul>
      {props.meetups.map((meetup) => (
        <MeetupItems
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </div>
  );
}

export default MeetupList;
