// Redundant for now

import React, { useState } from "react";

export const TVContext = React.createContext(null);

const TVContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} )
  const [tvFavourites, setFavourites] = useState([]);
  const [mustWatch, setMustWatch] = useState([]);

  const addToTVFavourites = (tv) => {
    if (!tvFavourites.includes(tv.id)) {
      let newFavourites = [...tvFavourites, tv.id];
      setFavourites(newFavourites);
    }
  };

  const addToMustWatch = (tv) => {
    if (!mustWatch.includes(tv.id)) {
      let newMustWatch = [...mustWatch, tv.id];
      setMustWatch(newMustWatch);
    }
  };

  const addTVReview = (tv, review) => {
    setMyReviews( {...myReviews, [tv.id]: review } )
  };

  const removeFromTVFavourites = (tv) => {
    setFavourites(tvFavourites.filter((tId) => tId !== tv.id));
  };

  return (
    <TVContext.Provider
      value={{
        tvFavourites,
        addToTVFavourites,
        removeFromTVFavourites,
        mustWatch,
        addToMustWatch,
        addTVReview,
      }}
    >
      {props.children}
    </TVContext.Provider>
  );
};

export default TVContextProvider;