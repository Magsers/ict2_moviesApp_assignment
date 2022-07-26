import React from "react";
import TV from "../tvCard";
import Grid from "@material-ui/core/Grid";

const TVList = ( {tvseries, action }) => {
  let tvCards = tvseries.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TV key={m.id} tv={m} action={action} />
    </Grid>
  ));
  return tvCards;
};

export default TVList;