import React from "react";

import { useContext } from "react";
import FavouritesContext from "../store/favourite-context";
import MeetupList from "../components/meetups/MeetupList";

function Favourites() {
  const favouriteCtx = useContext(FavouritesContext);

  return (
    <div>
      <h1>My Favourites</h1>
      <MeetupList meetups={favouriteCtx.favourites} />
    </div>
  );
}

export default Favourites;
