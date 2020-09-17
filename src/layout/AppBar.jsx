import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function Appbar() {
  return (
    <AppBar position="static">
      <ToolBar>
        <Typography variant="h6">
					<Link 
					style={{ textDecoration: "none", color: "white" }}
					to ={"/"}
					>
            Rick and Morty Characters
          </Link>
        </Typography>
      </ToolBar>
    </AppBar>
  );
}

export default Appbar;
