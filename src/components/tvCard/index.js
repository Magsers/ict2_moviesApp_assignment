import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
// import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { TVContext } from "../../contexts/tvContext";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function TVCard( tv, action ) {
  const classes = useStyles();
  const { tvFavourites } = useContext(TVContext);

  if (tvFavourites.find((id) => id === tv.id)) {
    tv.fav = true;
  } else {
    tv.fav = false
  }

  // if (mustWatch.find((id) => id === tv.id)) {
  //   mustwatchTV = true;
  // } else {
  //   mustwatchTV = false
  // }

  return (
    <Card className={classes.card}>
     <CardHeader
      className={classes.header}
      avatar={
        tv.fav ? (
          <Avatar className={classes.avatar}>
            <FavoriteIcon />
          </Avatar>
        ) : null
      }
      title={
        <Typography variant="h5" component="p">
          {tv.title}{" "}
        </Typography>
      }
    />
      <CardMedia
        className={classes.media}
        image={
          tv.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tv.poster_path}`
            : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {tv.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {tv.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
      {action(tv)}
        <Link to={`/tvseries/${tv.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}