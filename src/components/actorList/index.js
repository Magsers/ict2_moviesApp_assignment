import React, { useEffect, useState }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { getCredits } from "../../api/tmdb-api";

const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
});

export default function MovieActors({ movie }) {
  const classes = useStyles();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getCredits(movie.id).then((credits) => {
        setCredits(credits);
        console.log(credits);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="actors table">
        <TableHead>
          <TableRow>
            <TableCell >Actor</TableCell>
            <TableCell align="center">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {credits.map((a) => (
            <TableRow key={a.cast.id}>
              <TableCell component="th" scope="row">
                {a.cast.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}