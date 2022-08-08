import React from "react";
import PageTemplate from "../components/templateTVListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTVSeries} from '../api/tmdb-api'
import AddToTVFavouritesIcon from '../components/cardIcons/addToTVFavourites'

const TVSeries = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('tv', getTVSeries)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvseries = data.results;

  const tvFavourites = tvseries.filter(m => m.favouurite)
  localStorage.setItem('tvFavourites', JSON.stringify(tvFavourites))
  // const addToFavourites = (movieId) => true 

  return (
    <PageTemplate
      title="Discover TV Series"
      tvseries={tvseries}
      action={(tv) => {
        return <AddToTVFavouritesIcon tv={tv} />
      }}
    />
);
};

export default TVSeries;