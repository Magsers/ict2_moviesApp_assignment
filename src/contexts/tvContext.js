// Redundant for now

import React, { useState } from "react";

export const TVContext = React.createContext(null);

const TVContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} )
  const [tvFavourites, setFavourites] = useState([]);
  const [mustWatch, setMustWatch] = useState([]);

  const addToFavourites = (tv) => {
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

  const addReview = (tv, review) => {
    setMyReviews( {...myReviews, [tv.id]: review } )
  };

  const removeFromFavourites = (tv) => {
    setFavourites(tvFavourites.filter((mId) => mId !== tv.id));
  };

  return (
    <TVContext.Provider
      value={{
        tvFavourites,
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