import React, { useState, useEffect } from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import StarRate from "@material-ui/icons/StarRate";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";
import { getTVCast } from "../../api/tmdb-api";
import TVReviews from '../tvReviews'
import { Link } from "react-router-dom";

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
  fab: {  
    position: "fixed",
    top: theme.spacing(15),
    right: theme.spacing(2),
  },
}));

const TVDetails = ( props ) => {
  const classes = useStyles();
  const tv = props.tv
  const [cast, setCast] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false); 
  
useEffect(() => {
  getTVCast(tv.id).then((cast) => {
      setCast(cast);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {tv.overview}
      </Typography>
      <div className={classes.chipRoot}>

    {/* Genres */}
      <Paper component="ul" className={classes.chipSet}>
        <li>
          <Chip label="Genres" className={classes.chipLabel} color="primary" />
        </li>
        {tv.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </Paper>        

    {/* Cast */}
    <Paper component="ul" className={classes.chipSet}>
        <li>
        <Link to={`/cast/${tv.id}/${"tv"}`}>
          <Chip label="Full Cast" className={classes.chipLabel} color="primary" />
        </Link>
        </li>
        
          {cast.map((c) => (
          <li key={c.id}>
            <Link to={`/actor/${c.id}`}> <Chip label={c.name} className={classes.chip} /></Link>
          </li> 
        ))}
      </Paper>

      <Paper component="ul" className={classes.chipSet}>
        <Chip
          icon={<StarRate />}
          label={`${tv.vote_average} (${tv.vote_count}`}
        />
        <Chip label={`Released: ${tv.release_date}`} />
      </Paper>
      </div>
      
      <Fab    
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        className={classes.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <TVReviews tv={tv} />
      </Drawer>
      
    </>
  );
};
export default  TVDetails ;