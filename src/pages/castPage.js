import React, { useEffect, useState } from "react";
import PageTemplate from '../components/templateCastListPage'
import { getCast } from "../api/tmdb-api";
import { useParams } from "react-router-dom";

const CastPage = () => {
  const { id, str } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCast(id, str).then((cast) => {
      setCast(cast);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, );

  return (
    <PageTemplate
      title="Cast"
      cast={cast}
    />
);
};


export default CastPage;