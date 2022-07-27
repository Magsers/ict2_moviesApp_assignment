import React from "react";
import TVCard from "../components/tvCard";
import SampleTV from "./sampleTVData";
import { MemoryRouter } from "react-router";
// import MoviesContextProvider from "../contexts/moviesContext";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavourites";

export default {
  title: "TV Details Page/TVCard",
  component: TVCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    // (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <TVCard
      tv={SampleTV}
      action={(tv) => <AddToFavoritesIcon tv={tv} />}
      taging={(TV) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTV, poster_path: undefined };
  return (
    <TVCard
      tv={sampleNoPoster}
      action={(tv) => <AddToFavoritesIcon tv={tv} />}
      taging={(tv) => null}
    />
  );
};
Exceptional.storyName = "exception";
