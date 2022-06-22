import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

import AccountCircle from "@mui/icons-material/AccountCircle";

export default function ButtonAppBar() {
  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{
        bgcolor: "transparent",
      }}
    >
      <Toolbar
        sx={{
          bgcolor: "inherit",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          // onClick={handleDrawerOpen}
          edge="center"
        >
          <MenuIcon />
        </IconButton>
        <IconButton>
          <img
            src="https://www.nagarro.com/hubfs/NagarroWebsiteRedesign-Aug2020/Assets/Images/Nagarro%20green%20logo%20with%20white%20title.svg"
            alt=""
            size="large"
            className="avatar"
            edge="right"
          />
        </IconButton>

        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />{" "}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
