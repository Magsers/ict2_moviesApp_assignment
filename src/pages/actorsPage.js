// Redundant for now

import React from "react";

import { getActors } from "../api/tmdb-api";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
// import ActorList from "../components/actorList";

import PageTemplate from "../components/templateMoviePage";
import ReviewForm from "../components/reviewForm";

const ActorsPage = (props) => {
   const { data, error, isLoading, isError }  = useQuery('actors', getActors)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;

  return (
    // <ActorList actors={actors} />
    <PageTemplate actors={actors}>
    <ReviewForm actors={actors} />
  </PageTemplate>

  );
};

export default ActorsPage;