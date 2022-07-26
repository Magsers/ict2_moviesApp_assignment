import React from "react";
import PageTemplate from '../components/templateCastListPage'
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import { getCast } from "../api/tmdb-api";

const CastPage = (props) => {
  const { data, error, isLoading, isError }  = useQuery('cast', getCast)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const cast = data.results;

  return (
    <PageTemplate
      title="Cast"
      cast={cast}
    />
);
};

export default CastPage;