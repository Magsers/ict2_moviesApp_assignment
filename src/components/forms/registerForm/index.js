import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

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
function RegisterForm() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    registerWithEmailAndPassword(email, password);
    if (user) navigate("/movies", { replace: true });
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/movies", { replace: true });
  }, [user, loading, navigate]);
  return (
    <Box component="form" className={classes.root}>
      <Typography component="h2" variant="h3">
        Register
      </Typography>
      <div className="flex pt-6">
        <div className="card shadow-2xl bg-base-200 flex-1 justify-center p-12">
          <div className="card-header">
            <h2
              className="text-3xl"
              style={{ paddingTop: 60, fontFamily: "Verdana", color: "blue" }}
            >
              Register
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
            <Button className="btn btn-primary w-full" onClick={register}>
              Register
            </Button>
            <br></br>
            <div className="justify-end">
              Already have an account?{" "}
              <Link to="/login" className="link">
                Login now
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
export default RegisterForm;
