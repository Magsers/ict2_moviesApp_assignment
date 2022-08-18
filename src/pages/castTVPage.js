import React, { useEffect, useState } from "react";
import PageTemplate from '../components/templateCastListPage'
import { getTVCast, getTV } from "../api/tmdb-api";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const CastTVPage = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
    
  useEffect(() => {
    getTVCast(id).then((cast) => {
      setCast(cast);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, );

  const { data: tv, error, isLoading, isError } = useQuery(
    ["tv", { id: id }],
    getTV
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const name = tv.name;
  
  return (
    <PageTemplate
      title="Cast"
      cast={cast}
      name={name}
    />
);
};

export default CastTVPage;