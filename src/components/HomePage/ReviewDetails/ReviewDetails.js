import React, { useEffect, useState } from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import AppCard from '../../../utils/AppCard/AppCard';

const ReviewDetails = (props) => {
  const classes = useStyle();
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/all-review')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, [])
  return (
    <Container className={classes.root}>
      <Typography className={classes.typography} variant="h2" color="primary">Testimonials</Typography>
      <Grid container spacing={1} className={classes.cardContainer}>
        {
          reviews.map(review => (
            <Grid key={review._id} item md={3}>
              <AppCard avatarUrl={review.url} avatarTitle={review.userName}
                description={review.description} />
            </Grid>
          ))
        }
      </Grid>
    </Container>
  )
}
export default ReviewDetails;

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: 50,
    marginBottom: 50
  },
  typography: {
    marginBottom: 50,
    textAlign: "center"
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  }
}));