import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../../../firebase";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

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

function ResetPasswordForm() {
  const classes = useStyles();    
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/reset", { replace: true });
  }, [user, loading, navigate]);
  return (
    <Box component="form" className={classes.root}>
    <div className="flex pt-6">
      <div className="card shadow-2xl bg-base-200 flex-1 justify-center p-12">
        <div className="card-header">
          <h2 className="text-3xl">Reset Password</h2>
        </div>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
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
          <button
            className="btn btn-primary w-full"
            onClick={() => sendPasswordReset(email)}
          >
            Send password reset Email
          </button>
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

export default ResetPasswordForm;