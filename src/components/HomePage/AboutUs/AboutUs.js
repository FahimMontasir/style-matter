import React from 'react';
import { makeStyles, Typography, Container } from '@material-ui/core';

const AboutUs = (props) => {
  const classes = useStyle();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant='h2' color="primary"> About Us</Typography>
      <Typography variant="body1" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem at mollitia eaque impedit assumenda quas quibusdam numquam voluptates! Praesentium quasi, illum tempora facere voluptates ducimus soluta! Consequuntur, tempora dolore facilis nihil eligendi autem. Deleniti repudiandae recusandae, dolor dolore reiciendis ipsa totam modi, pariatur dolores aspernatur ipsum, ipsam expedita vitae ducimus.
        </Typography>
    </Container>
  )
}
export default AboutUs;

const useStyle = makeStyles((theme) => ({
  root: {
    textAlign: "justify",
    marginTop: 60
  }
}));