import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
});

function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);

  function addFavouriteHandler(favouriteMeetup) {
    setUserFavourites(userFavourites.concat(favouriteMeetup));
  }

  function removeFavouriteHandler() {}

  function itemIsFavouriteHandler() {}

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
  };
  return (
    <>
      <FavouritesContext.Provider value={context}>
        {props.children}
      </FavouritesContext.Provider>
    </>
  );
}
