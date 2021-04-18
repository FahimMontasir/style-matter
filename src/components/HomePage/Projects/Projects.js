import React from 'react';
import { makeStyles, Typography, Container, Grid } from '@material-ui/core';
import project1 from "../../../images/project1.jpg"
import project2 from "../../../images/project2.jpg"
import project3 from "../../../images/project3.jpg"

const Projects = () => {
  const classes = useStyle();

  return (
    <Container className={classes.root}>
      <Typography variant="h3" color="primary"> Our Works</Typography>
      <Grid container justify="center" spacing={2}>
        <Grid item><img src={project1} alt="" className={classes.image} /></Grid>
        <Grid item className={classes.middleImg}><img src={project2} alt="" className={classes.image} /></Grid>
        <Grid item><img src={project3} alt="" className={classes.image} /></Grid>
      </Grid>
    </Container>
  )
}
export default Projects;

const useStyle = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  image: {
    width: 400,
    height: 300,
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  middleImg: {
    marginTop: 30,
    [theme.breakpoints.down("md")]: {
      marginTop: 0
    }
  }
}));