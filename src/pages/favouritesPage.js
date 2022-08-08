import React, { useContext } from "react";
import MoviePageTemplate from "../components/templateMovieListPage";
import TVPageTemplate from "../components/templateTVListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { TVContext } from "../contexts/tvContext";
import { useQueries } from "react-query";
import { getMovie, getTV } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import RemoveFromTVFavourites from "../components/cardIcons/removeFromTVFavourites";
import WriteReview from "../components/cardIcons/writeReview";

const FavouritesPage = () => {
  const { favourites: movieIds } = useContext(MoviesContext);
  const { tvFavourites: tvIds } = useContext(TVContext);

  // Create an array of queries and run in parallel.
  const favouriteMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );

  // Create an array of queries and run in parallel.
  const favouriteTVQueries = useQueries(
    tvIds.map((tvId) => {
      return {
        queryKey: ["tv", { id: tvId }],
        queryFn: getTV,
      };
    })
  );

  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteMovieQueries.find((m) => m.isLoading === true) || favouriteTVQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = favouriteMovieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map((g) => g.id);
    return q.data;
  });

  const tvseries = favouriteTVQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map((g) => g.id);
    return q.data;
  });

  // const toDo = () => true;

  return (
    <><MoviePageTemplate
      title="Favourite Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromFavourites movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      } } /><TVPageTemplate
        title="Favourite TV Series"
        tvseries={tvseries}
        action={(tv) => {
          return (
            <>
              <RemoveFromTVFavourites tv={tv} />
              {/* <WriteReview tv={tv} /> */}
            </>
          );
        } } /></>
  );
};

export default FavouritesPage;