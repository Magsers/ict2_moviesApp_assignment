import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import WelcomePage from "./pages/welcomePage";
import MoviePage from "./pages/movieDetailsPage";
import TVSeriesPage from "./pages/tvSeriesPage";
import TVDetailsPage from "./pages/tvSeriesDetailsPage";
import ActorPage from "./pages/actorPage";
// import LoginPage from "./pages/loginPage";
import CastPage from "./pages/castPage";
// import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import FavouritesPage from "./pages/favouritesPage";
import MustWatchMoviesPage from "./pages/mustWatchPage";
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import SiteHeader from "./components/siteHeader";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import TVContextProvider from "./contexts/tvContext";
import AuthContextProvider from "./contexts/authContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import ProtectedRoute from "./components/protectedRoute";
import Login from "./pages/login";
import Logout from "./pages/logout";
import Register from "./pages/register";
import Reset from "./pages/reset";
// import Navigation from "./components/nav/navigation";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      {/* <Navigation /> */}
      <AuthContextProvider>
        <SiteHeader />
        <MoviesContextProvider>
        <TVContextProvider>
          <Routes>
            {/* <Route path="/movies/favourites" element={<FavouriteMoviesPage />} /> */}
            <Route path="/favourites" element={
                <ProtectedRoute>
                  <FavouritesPage />
                </ProtectedRoute>
               }
              />
            <Route path="/mustwatch" element={
                <ProtectedRoute>
                  <MustWatchMoviesPage />
                </ProtectedRoute>
               }
              />
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<WelcomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />              
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/tvseries/:id" element={<TVDetailsPage />} />
            <Route path="/reviews/:id" element={<MovieReviewPage />} />
            <Route path="/actor/:id" element={<ActorPage />} />
            <Route path="/cast/:id/:str" element={<CastPage />} />
            <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
            <Route path="/movies/toprated" element={<TopRatedMoviesPage />} />
            <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
            <Route path="/tvseries" element={<TVSeriesPage />} />
          </Routes>
        </TVContextProvider>
        </MoviesContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
