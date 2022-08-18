import React, { useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getMovies } from "../api/tmdb-api";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../firebase";

const HomePage = (props) => {
  // const [user, loading] = useAuthState(auth);
  // const navigate = useNavigate();
  const { data, error, isLoading, isError } = useQuery("discover", getMovies);

  // useEffect(() => {
  //   if (loading) return;
  //   if (!user) return navigate("/movies");
  // }, [user, loading, navigate]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const movies = data.results;

  const favourites = movies.filter((m) => m.favouurite);
  localStorage.setItem("favourites", JSON.stringify(favourites));
  // const addToFavourites = (movieId) => true

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        // return <AddToFavouritesIcon movie={movie} user={user} />;
        return <AddToFavouritesIcon movie={movie} />;
      }}
    />
  );
};

export default HomePage;
