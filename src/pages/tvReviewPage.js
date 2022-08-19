import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateTVPage";
import TVReview from "../components/tvReviews";

const TVReviewPage = (props) => {
  const { state : {tv, review } } = useLocation()
  return (
    <PageTemplate tv={tv}>
      <TVReview review={review} />
    </PageTemplate>
  );
};

export default TVReviewPage;