import React from "react";
import classes from "./MeetupItems.module.css";

function MeetupItems(props) {
  return (
    <div>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>To Favourites</button>
        </div>
      </li>
    </div>
  );
}

export default MeetupItems;
