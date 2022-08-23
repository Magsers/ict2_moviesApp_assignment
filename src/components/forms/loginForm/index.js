import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
// import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    "& > * ": {
      marginTop: theme.spacing(2),
    },
  },
  textField: {
    width: "40ch",
  },
  submit: {
    marginRight: theme.spacing(2),
  },
  snack: {
    width: "50%",
    "& > * ": {
      width: "100%",
    },
  },
}));
function LoginForm() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const login = () => {
    logInWithEmailAndPassword(email, password);
    if (user) navigate("/movies", { replace: true });
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/movies", { replace: true });
  }, [loading, navigate, user]);
  return (
    <Box component="form" className={classes.root}>
      <div className="flex pt-6">
        <div className="card shadow-2xl bg-base-200 flex-1 justify-center p-12">
          <div className="card-header">
            <h2
              className="text-3xl"
              style={{ paddingTop: 60, fontFamily: "Verdana", color: "blue" }}
            >
              Login
            </h2>
          </div>
          <div className="card-body">
            <div className="form-control">
              <label className="label" style={{ paddingRight: 50 }}>
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail Address"
              />
            </div>
            <br></br>
            <div className="form-control">
              <label className="label" style={{ paddingRight: 26 }}>
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <br></br>
            <Button
              variant="outlined"
              size="medium"
              color="primary"
              className="btn btn-primary w-full"
              onClick={login}
            >
              Log in
            </Button>
            <div>
              <br></br>
              <Link to="/reset" className="btn btn-ghost w-full">
                Forgot Password
              </Link>
            </div>
            <br></br>
            <div className="justify-end">
              Don't have an account?{" "}
              <Link to="/register" className="link">
                Register now
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
export default LoginForm;
