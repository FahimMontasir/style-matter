import React, { useContext } from 'react';
import { Toolbar, IconButton, Button, ButtonGroup, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import logo from "../../../images/logo.png"
import { useStyle } from './styleTopBanner';
import { useHistory } from 'react-router';
import { userContext } from '../../../App';

const TopBanner = () => {
  const history = useHistory()
  const classes = useStyle();
  const handleRoute = (to) => {
    history.push(to)
  }
  const [userInfo, setUserInfo] = useContext(userContext)
  const handleLogOUt = () => {
    setUserInfo(null)
  }
  return (
    <div className={classes.root}>
      <Toolbar>
        <IconButton
          className={classes.home}
          onClick={() => handleRoute("/")}
        >
          <HomeIcon fontSize="large" color="primary" />
        </IconButton>
        <ButtonGroup variant="text" color="inherit">
          <Button onClick={() => handleRoute("/service")}>Services</Button>
          <Button onClick={() => handleRoute("/dashboard")}>DashBoard</Button>
          {userInfo?.email ? <Button onClick={handleLogOUt}
            variant="contained" color="primary">Logout</Button> :
            <Button onClick={() => handleRoute("/login")}
              variant="contained" color="secondary">Login</Button>
          }
        </ButtonGroup>
      </Toolbar>
      <div className={classes.heroContainer}>
        <img
          className={classes.logo}
          src={logo} alt="logo" />
        <Typography variant="h2" color="primary">Individuality of your Style</Typography>
        <Typography variant="caption" color="primary">#style_matter</Typography>
      </div>
    </div>
  )
}
export default TopBanner;

