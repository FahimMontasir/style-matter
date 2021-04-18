import React from 'react';
import { makeStyles, Typography, Grid, Container } from '@material-ui/core';

const Footer = (props) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid container spacing={3} justify="center">
          <Grid item md={4}>
            <Typography variant="h4" color="primary">Address</Typography>
            <Typography variant="h6" color="primary">603,KochuKhet road, KhilKhet</Typography>
            <Typography variant="h6" color="primary">Dhaka,Bangladesh</Typography>
          </Grid>
          <Grid item md={4}>
            <Typography variant="h4" color="primary">Important Links</Typography>
            <Typography variant="h6" color="primary"><u>Trending fashion</u></Typography>
            <Typography variant="h6" color="primary"><u>Latest style news</u></Typography>
          </Grid>
          <Grid item md={4}>
            <Typography variant="h4" color="primary">Style Matter</Typography>
            <Typography variant="body1" color="primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem commodi officia tenetur ipsum qui accusantium ullam facilis iusto numquam soluta.</Typography>
          </Grid>
        </Grid>
        <p className={classes.copyright}>All rights reserved | #styleMatter {new Date().getFullYear()}</p>
      </Container>

    </div>
  )
}
export default Footer;

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
  },
  copyright: {
    color: "white",
    padding: 20,
    textAlign: "center"
  }
}));