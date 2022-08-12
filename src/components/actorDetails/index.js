import React from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import StarRate from "@material-ui/icons/StarRate";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  chipRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipLabel: {
    margin: theme.spacing(0.5),
  },
}));

const ActorDetails = ( props) => {
  const classes = useStyles();
  const actor = props.actor;

  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>
      <Typography component="p">
        {actor.biography}
      </Typography>
         
      <div className={classes.chipRoot}>
      <Paper component="ul" className={classes.chipSet}>
        <Chip
          icon={<StarRate />}
          label={`${actor.popularity}`}
        />
      </Paper>
      </div>
      </>
  );
};
export default  ActorDetails ;