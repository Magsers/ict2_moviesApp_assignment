import React from "react";
import RateReviewIcon from "@material-ui/icons/RateReview";
import { Link } from "react-router-dom";

const WriteTVReview = ({ tv }) => {
  return (
    <Link
      to={'/reviews/tvseries/form'}
      state={{
          tvId: tv.id,
        }}
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default WriteTVReview;