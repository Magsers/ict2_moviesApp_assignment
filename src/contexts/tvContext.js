// Redundant for now

import React, { useState } from "react";

export const TVContext = React.createContext(null);

const TVContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} )
  const [favourites, setFavourites] = useState([]);
  const [mustWatch, setMustWatch] = useState([]);

  const addToFavourites = (tv) => {
    if (!favourites.includes(tv.id)) {
      let newFavourites = [...favourites, tv.id];
      setFavourites(newFavourites);
    }
  };

  const addToMustWatch = (tv) => {
    if (!mustWatch.includes(tv.id)) {
      let newMustWatch = [...mustWatch, tv.id];
      setMustWatch(newMustWatch);
    }
  };

  const addReview = (tv, review) => {
    setMyReviews( {...myReviews, [tv.id]: review } )
  };

  // We will use this function in a later section
  const removeFromFavourites = (tv) => {
    setFavourites(favourites.filter((mId) => mId !== tv.id));
  };

  return (
    <TVContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        mustWatch,
        addToMustWatch,
        addReview,
      }}
    >
      {props.children}
    </TVContext.Provider>
  );
};

export default TVContextProvider;