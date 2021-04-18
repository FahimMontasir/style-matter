import React from 'react';
import { makeStyles, Typography, Container } from '@material-ui/core';
import AppCard from '../../../utils/AppCard/AppCard';
import money from "../../../images/money.png"
import express from "../../../images/express-delivery.png"
import repair from "../../../images/settings.png"

const Advantages = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Typography variant='h3' color="secondary" c>Our Advantages</Typography>
      <Container maxWidth="md" className={classes.cardContainer}>
        <AppCard imageUrl={money} title="100% Money Back Guarantee"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, sapiente?" />

        <AppCard imageUrl={express} title="Express Service for Shortening Trousers"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, sapiente?" />

        <AppCard imageUrl={repair} title="24/7 service | Repair anyTime"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, sapiente?" />
      </Container>
    </div>
  )
}
export default Advantages;

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center"
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  }
}));