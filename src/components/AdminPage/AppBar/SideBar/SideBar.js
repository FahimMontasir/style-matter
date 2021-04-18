import React, { useContext, useEffect, useState } from 'react';
import { Button, CssBaseline, Divider, Drawer, Hidden, List, ListItem, ListItemIcon, ListItemText, useTheme } from '@material-ui/core';
import SimpleNavBar from '../SimpleNavBar/SimpleNavBar';
import { useStyle } from './styleSideBar';
import { RateReview, PlaylistAddCheck, AddShoppingCart, FormatListNumbered, Add, RecentActors, Apps } from '@material-ui/icons';
import { useHistory } from 'react-router';
import SideBarRoute from '../../AdminRoute/SideBarRoute';
import { Link } from 'react-router-dom';
import { userContext } from '../../../../App';


const SideBar = (props) => {
  const classes = useStyle();
  const { window } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [routeName, setRoutName] = useState(null)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //dynamic routing function
  const history = useHistory()
  const handleRoute = (to) => {
    history.push(to)
    setRoutName(to)
  }

  const [userInfo, setUserInfo, isAdmin, setIsAdmin] = useContext(userContext);
  useEffect(() => {
    fetch(`http://localhost:5000/admin/${userInfo.email}`)
      .then(res => res.json())
      .then(data => setIsAdmin(data.length > 0));
  }, [setIsAdmin, userInfo.email])

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {isAdmin ?
          <>
            <ListItem button onClick={() => handleRoute("/dashboard/order-list")}>
              <ListItemIcon><FormatListNumbered /></ListItemIcon>
              <ListItemText primary="Order List" />
            </ListItem>
            <ListItem button onClick={() => handleRoute("/dashboard/add-service")}>
              <ListItemIcon><Add /></ListItemIcon>
              <ListItemText primary="Add service" />
            </ListItem>
            <ListItem button onClick={() => handleRoute("/dashboard/make-admin")}>
              <ListItemIcon><RecentActors /></ListItemIcon>
              <ListItemText primary="Make Admin" />
            </ListItem>
            <ListItem button onClick={() => handleRoute("/dashboard/manage-services")}>
              <ListItemIcon><Apps /></ListItemIcon>
              <ListItemText primary="Manage-Services" />
            </ListItem>
          </> :
          <>
            <ListItem button onClick={() => handleRoute("/dashboard/book/noValidIdFound")}>
              <ListItemIcon><AddShoppingCart /></ListItemIcon>
              <ListItemText primary="Book" />
            </ListItem>
            <ListItem button onClick={() => handleRoute("/dashboard/booking-list")}>
              <ListItemIcon><PlaylistAddCheck /></ListItemIcon>
              <ListItemText primary="Booking List" />
            </ListItem>
            <ListItem button onClick={() => handleRoute("/dashboard/review")}>
              <ListItemIcon><RateReview /></ListItemIcon>
              <ListItemText primary="Review" />
            </ListItem>
          </>
        }
        <ListItem>
          <Button variant="contained" color="primary">
            <Link to="/">Back to Home</Link>
          </Button>
        </ListItem>
      </List>
      <Divider />
    </div>
  );
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <SimpleNavBar
        hederName={routeName}
        handleDrawerToggle={handleDrawerToggle} />
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <SideBarRoute />
      </main>
    </div>
  );
}
export default SideBar;
