import React, { useContext } from "react";
import { TVContext } from "../../contexts/tvContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const AddToTVFavouritesIcon = ({ tv }) => {
  const context = useContext(TVContext);

  const handleAddToTVFavourites = (e) => {
    e.preventDefault();
    context.addToTVFavourites(tv);
  };
  return (
    <IconButton aria-label="add to tv favorites" onClick={handleAddToTVFavourites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToTVFavouritesIcon;