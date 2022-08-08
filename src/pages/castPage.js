import React, { useEffect, useState } from "react";
import PageTemplate from '../components/templateCastListPage'
import { getCast } from "../api/tmdb-api";
import { useParams } from "react-router-dom";

const CastPage = () => {
  const { id } = useParams();
  console.log(id)
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCast(id).then((cast) => {
      setCast(cast);
      console.log(cast)
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, );

  return (
    <PageTemplate
      title="Cast"
      cast={cast}
      // action={(movie) => {
      //   return <AddToFavouritesIcon movie={movie} />
      // }}
    />
);
};


export default CastPage;