import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
// import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useNavigate, NavLink } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// import { AuthContext } from "../../contexts/authContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../firebase";
// import { Link } from "react-router-dom";
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
    background: "#bfbfbf",
  },
}));

const signOut = () => {
  logout();
};

const SiteHeader = () => {
  const [user, loading] = useAuthState(auth);
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
  }, [user, loading, navigate]);

  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  // const { token, signout } = useContext(AuthContext);

  const open = Boolean(anchorEl);
  const menuOptions = [
    { label: "Movies", path: "/movies" },
    { label: "Favourites", path: "/favourites" },
    { label: "Must Watch", path: "/mustwatch" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Top Rated", path: "/movies/toprated" },
    { label: "TV Series", path: "/tvseries" },
    // { label: "Sign Out", path: "/logout" },
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
          <Typography variant="h4" className={classes.title}>
            TMDB Client
          </Typography>
          <Typography variant="h6" className={classes.title}>
            All you ever wanted to know about Movies!
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
                <Typography variant="h6" className={classes.root}>
                  Please Log In
                </Typography>
              ) : (
                <Typography variant="h6" className={classes.root}>
                  Logged in : {user.email} 
                  <Button
                    variant="outlined"
                    size="medium"
                    color="inherit"
                    className="btn btn-primary w-full"
                    onClick={signOut}
                  >
                    Log Out
                  </Button>
                </Typography>
              )}

              {menuOptions.map((opt) => (
                <NavLink
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
