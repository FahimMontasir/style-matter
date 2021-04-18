import React from 'react';
import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const drawerWidth = 240;
const SimpleNavBar = ({ handleDrawerToggle, hederName }) => {
  const classes = useStyle();
  return (
    <AppBar position="fixed" className={classes.appBar} color="transparent" elevation={1}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" noWrap className={classes.hederName}>
          {hederName}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
export default SimpleNavBar;

const useStyle = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));