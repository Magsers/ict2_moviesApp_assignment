import React from "react";
import TVList from "../components/tvList";
import SampleTV from "./sampleTVData";
import { MemoryRouter } from "react-router";

import AddToFavoritesIcon from "../components/cardIcons/addToFavourites";
import Grid from "@material-ui/core/Grid";
import TVContextProvider from "../contexts/tvContext";

export default {
  title: "TV Page/TVList",
  component: TVList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TVContextProvider>{Story()}</TVContextProvider>,
  ],
};

export const Basic = () => {
  const tvSeries = [
    { ...SampleTV, id: 1 },
    { ...SampleTV, id: 2 },
    { ...SampleTV, id: 3 },
    { ...SampleTV, id: 4 },
    { ...SampleTV, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <TVList
        tvSeries={tvSeries}
        action={(tv) => <AddToFavoritesIcon tv={tv} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
