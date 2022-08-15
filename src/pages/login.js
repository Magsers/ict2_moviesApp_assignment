import LoginForm from "../components/forms/loginForm";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
      marginBottom: theme.spacing(1.5),
    },
  }));

const Login = () => {
    const classes = useStyles();
  return (
  <>
    <Typography variant="h4" className={classes.root}>
        Login Page
    </Typography>
    <LoginForm />;
    </>
  )
};

export default Login;