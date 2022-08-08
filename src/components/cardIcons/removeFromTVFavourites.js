import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { TVContext } from "../../contexts/tvContext";

const RemoveFromTVFavouritesIcon = ({ tv }) => {
  const context = useContext(TVContext);

  const handleRemoveFromTVFavourites = (e) => {
    e.preventDefault();
    context.removeFromTVFavourites(tv);
  };
  return (
    <IconButton
      aria-label="remove from tv favorites"
      onClick={handleRemoveFromTVFavourites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromTVFavouritesIcon;