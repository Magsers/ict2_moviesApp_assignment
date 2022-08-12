import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import { getTopRatedMovies } from "../api/tmdb-api";
import AddToMustWatchIcon from '../components/cardIcons/addToMustWatch'

const TopRatedMoviesPage = (props) => {
  const { data, error, isLoading, isError }  = useQuery('upcoming', getTopRatedMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  const mustWatch = movies.filter(m => m.mustWatchMovie)
  localStorage.setItem('must-watch', JSON.stringify(mustWatch))
  // const addToMustWatch = (movieId) => true 

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}
      action={(movie) => {
        return <AddToMustWatchIcon movie={movie} />
      }}
    />
);
};

export default TopRatedMoviesPage;