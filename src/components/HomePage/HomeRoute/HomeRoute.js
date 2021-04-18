import React from 'react';
import { makeStyles } from '@material-ui/core';
import TopBanner from '../TopBanner/TopBanner';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import Projects from '../Projects/Projects';
import Advantages from '../Advantages/Advantages';
import AboutUs from '../AboutUs/AboutUs';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import Footer from '../Footer/Footer';

const HomeRoute = (props) => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <TopBanner />
      <ServiceDetails />
      <Projects />
      <Advantages />
      <AboutUs />
      <ReviewDetails />
      <Footer />
    </div>
  )
}
export default HomeRoute;

const useStyle = makeStyles((theme) => ({
  root: {
  }
}));