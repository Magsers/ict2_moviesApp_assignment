import React, { useEffect, useState } from "react";
import PageTemplate from '../components/templateCastListPage'
import { getCast, getMovie } from "../api/tmdb-api";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const CastPage = () => {
  const { id, str } = useParams();
  const [cast, setCast] = useState([]);
  // const [movie, setMovie] = useState([]);
  
  useEffect(() => {
    getCast(id, str).then((cast) => {
      setCast(cast);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, );

  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const name = movie.title;
  
  return (
    <PageTemplate
      title="Cast"
      cast={cast}
      name={name}
    />
);
};

export default CastPage;