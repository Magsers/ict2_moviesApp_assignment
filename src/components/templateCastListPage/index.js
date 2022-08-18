import React from "react";
import Header from "../headerCastList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CastList from "../actorList";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#bfbfbf",
    paddingTop: theme.spacing(7),
  },
  fab: {
    marginTop: theme.spacing(8),
    position: "fixed",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function CastListPageTemplate({ cast, title, name }) {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Header title={title} name={name} />
        </Grid>
        <Grid item container spacing={5}>
          <CastList cast={cast} />
        </Grid>
      </Grid>
    </>
  );
}
export default CastListPageTemplate;
