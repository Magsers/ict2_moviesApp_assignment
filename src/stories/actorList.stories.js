import React from "react";
import CastList from "../components/actorList";
import SampleActor from "./sampleActorData";
import { MemoryRouter } from "react-router";
// import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavourites";
import Grid from "@material-ui/core/Grid";

export default {
  title: "Actor Page/ActorList",
  component: CastList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => {
  const cast = [
    { ...SampleActor, id: 1 },
    { ...SampleActor, id: 2 },
    { ...SampleActor, id: 3 },
    { ...SampleActor, id: 4 },
    { ...SampleActor, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <CastList
        cast={cast}
        action={(actor) => <AddToFavoritesIcon actor={actor} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
