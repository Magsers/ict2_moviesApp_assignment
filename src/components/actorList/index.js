import React from "react";
import Actor from "../actorCard";
import Grid from "@material-ui/core/Grid";

const CastList = ({ cast }) => {
  let castCards = cast.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Actor key={m.id} actor={m} />
    </Grid>
  ));
  return castCards;
};

export default CastList;
