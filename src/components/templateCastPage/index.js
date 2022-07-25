import React from "react";  // useState/useEffect redundant 
import ActorHeader from "../headerActor";
import ActorCard from "../actorCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
// import { getMovieImages } from "../../api/tmdb-api";
// import { useQuery } from "react-query";
// import Spinner from '../spinner'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(7),
  },
  imageListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  imageList: {
    width: 450,
    height: '100vh',
  },
}));

const TemplateActorPage = ({ actor, children }) => {
  const classes = useStyles();
//   const { data , error, isLoading, isError } = useQuery(
//     ["images", { id: cast.id }],
//     getMovieImages
//   );

//   if (isLoading) {
//     return <Spinner />;
//   }

//   if (isError) {
//     return <h1>{error.message}</h1>;
//   }
//   const images = data.posters 

  return (
    <div className={classes.root}>
    
      <ActorHeader actor={actor} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <ActorCard actor={actor} />
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default TemplateActorPage;