import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useNavigate, NavLink } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// import { AuthContext } from "../../contexts/authContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../firebase";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  appbar: {
    // background: 'none',
  },
  inactiveLink: {
    color: "white",
    padding: theme.spacing(1),
    fontSize: "1.5rem",
  },
  activeLink: {
    color: "black",
    padding: theme.spacing(1),
    fontSize: "1.5rem",
    background: "#BFBFBF",
  },
}));
const signOut = () => {
  logout();
};
const SiteHeader = () => {
  const [user] = useAuthState(auth);
  const classes = useStyles();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const open = Boolean(anchorEl);
  const menuOptions = [
    { label: "Movies", path: "/movies" },
    { label: "Favourites", path: "/favourites" },
    { label: "Must Watch", path: "/mustwatch" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Top Rated", path: "/movies/toprated" },
    { label: "TV Series", path: "/tvseries" },
  ];
  const handleMenuSelect = (pageURL) => {
    navigate(pageURL);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <AppBar
        className={classes.appbar}
        position="fixed"
        elevation={0}
        color="primary"
      >
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            TMDB Client
          </Typography>
          <Typography
            variant="h6"
            className={classes.title}
            style={{ fontSize: 15 }}
          >
           Find the best Movies and TV Series!
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              {!user ? (
                <>
                  <Link to="/login" className="link">
                    <Button
                      variant="outlined"
                      size="small"
                      color="secondary"
                      style={{
                        background: "white ",
                        color: "blue",
                        fontSize: 13,
                      }}
                    >
                      Log In
                    </Button>
                  </Link>
                  <Link to={`/register`}>
                    <Button
                      variant="outlined"
                      size="small"
                      color="secondary"
                      style={{ background: "white ", color: "blue" }}
                    >
                      Register
                    </Button>
                  </Link>
                  <Typography
                    variant="h6"
                    className={classes.root}
                    style={{ fontSize: 12, paddingLeft: 6 }}
                  >
                    Please Login
                  </Typography>
                </>
              ) : (
                <>
                  <Typography variant="h6" className={classes.root}>
                    Logged in: {user.email}{" "}
                  </Typography>
                  <Button
                    variant="outlined"
                    size="medium"
                    color="inherit"
                    className="btn btn-primary w-full"
                    onClick={signOut}
                  >
                    Log Out
                  </Button>
                </>
              )}
              {menuOptions.map((opt) => (
                <NavLink
                  style={{ fontSize: 20 }}
                  key={opt.label}
                  to={opt.path}
                  className={({ isActive }) =>
                    isActive ? classes.activeLink : classes.inactiveLink
                  }
                  color="inherit"
                  // onClick={() => handleMenuSelect(opt.path)}
                >
                  {opt.label}
                </NavLink>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};
export default SiteHeader;
