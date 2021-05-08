import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./HamburgerMenu.css";

const useStyles = makeStyles({
  menuH: {
    position: "absolute",
    top: "12px",
    right: "20px",
    zIndex: "9999",
  },
  iconB: {
    width: "70px",
    height: "70px",
    color: "rosybrown",
    backgroundColor: "white",
  },
  icon: {
    fontSize: 55,
    "&:hover": {
      color: "white",
    },
  },
});

const options = [
  <Link to="/login">
    <li className="rightLink">Login</li>
  </Link>,
  <Link to="/registration">
    <li className="rightLink">Registration</li>
  </Link>,
  <Link to="/destination">
    <li className="rightLink">Destination</li>
  </Link>,
];

function HamburgerMenu() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.menuH}>
      <IconButton className={classes.iconB} aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon className={classes.icon} />
      </IconButton>

      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            minWidth: "150px",
            maxHeight: "150px",
            color: "rosybrown",
            backgroundColor: "white",
            position: "absolute",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={uuidv4()} selected={option === "Pyxis"} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default HamburgerMenu;
