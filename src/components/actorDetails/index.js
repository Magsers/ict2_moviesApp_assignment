import React from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
// import AccessTimeIcon from "@material-ui/icons/AccessTime";
// import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import StarRate from "@material-ui/icons/StarRate";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import CardMedia from "@material-ui/core/CardMedia";
// import Card from "@material-ui/core/Card";

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
        Name
      </Typography>

      <Typography variant="h6" component="p">
        {actor.name}
      </Typography>
    
      {/* <Paper component="ul" className={classes.chipSet}>
        <li>
          <Chip label="Genres" className={classes.chipLabel} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </Paper> */}
      
      <div className={classes.chipRoot}>
      <Paper component="ul" className={classes.chipSet}>
        <Chip label={`${actor.character}`} />
        {/* <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        /> */}
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