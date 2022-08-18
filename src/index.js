import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import TVSeriesPage from "./pages/tvSeriesPage";
import TVDetailsPage from "./pages/tvSeriesDetailsPage";
import ActorPage from "./pages/actorPage";
import CastPage from "./pages/castPage";
import FavouritesPage from "./pages/favouritesPage";
import MustWatchMoviesPage from "./pages/mustWatchPage";
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import SiteHeader from "./components/siteHeader";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MoviesContextProvider from "./contexts/moviesContext";
import TVContextProvider from "./contexts/tvContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import AddTVReviewPage from "./pages/addTVReviewPage";
import ProtectedRoute from "./components/protectedRoute";
import Login from "./pages/login";
import Logout from "./pages/logout";
import Register from "./pages/register";
import Reset from "./pages/reset";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <TVContextProvider>
            <Routes>
              <Route
                path="/favourites"
                element={
                  <ProtectedRoute>
                    <FavouritesPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/mustWatch"
                element={
                  <ProtectedRoute>
                    <MustWatchMoviesPage />
                  </ProtectedRoute>
                }
              />
              <Route path="/movies" element={<HomePage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/tvseries/:id" element={<TVDetailsPage />} />
              <Route path="/reviews/:id" element={<MovieReviewPage />} />
              <Route path="/actor/:id" element={<ActorPage />} />
              <Route path="/cast/:id/:str" element={<CastPage />} />
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route path="/movies/toprated" element={<TopRatedMoviesPage />} />
              <Route path="/reviews/form" element={<AddMovieReviewPage />} />
              <Route path="/reviews/tv/form" element={<AddTVReviewPage />} />
              <Route path="/tvseries" element={<TVSeriesPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/register" element={<Register />} />
              <Route path="/reset" element={<Reset />} />
            </Routes>
          </TVContextProvider>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
