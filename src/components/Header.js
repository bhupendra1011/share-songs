import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { HeadsetMicTwoTone } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(2),
  },
}));
function Header() {
  const classes = useStyles();
  return (
    <AppBar color="primary" position="fixed">
      <Toolbar>
        <HeadsetMicTwoTone />
        <Typography className={classes.title} variant="h6" component="h1">
          My Music Share
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
