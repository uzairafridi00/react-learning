import React from "react";
import classes from "./MeetupItems.module.css";
import Card from "../ui/Card";

function MeetupItems(props) {
  return (
    <div>
      <li className={classes.item}>
        <Card>
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
        </Card>
      </li>
    </div>
  );
}

export default MeetupItems;
