// import React, { useContext } from "react";
// import { AuthContext } from "../contexts/authContext";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";

// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: "flex",
//       justifyContent: "space-around",
//       alignItems: "center",
//       flexWrap: "wrap",
//       marginBottom: theme.spacing(1.5),
//     },
//   }));

// const LoginPage = () => {
//   const {authenticate } = useContext(AuthContext);
//   const classes = useStyles();

//   const login = () => {
//     const password = Math.random().toString(36).substring(7);
//     authenticate('user1', password);
//   };

//   return (
//     <>
//     <Typography variant="h4" className={classes.root}>
//         Login Page
//     </Typography>
//     <Typography variant="h4" className={classes.root}>
//         You must log in to view the protected pages </Typography>
//       {/* Login web form  */}
//       <Button variant="outlined" size="medium" color="primary" onClick={login}>Submit
//     </Button>
//     </>
//     )
// };

// export default LoginPage;
