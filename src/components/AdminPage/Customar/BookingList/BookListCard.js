import React from 'react';
import { Button, Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core';

const BookListCard = ({ title, description, processStatus }) => {
  const classes = useStyle();

  return (
    <Card className={classes.root}>
      <CardActions >
        <Button
          className={classes.btn}
          variant="outlined"
          color={processStatus === "Done" ? "secondary" : "primary"}>{processStatus}</Button>
      </CardActions>
      <CardContent>
        <Typography variant="h5" color="primary" gutterBottom>{title}</Typography>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
    </Card>
  )
}
export default BookListCard;

const useStyle = makeStyles((theme) => ({
  root: {
    width: 200,
    margin: 20
  },
  btn: {
    margin: "0 auto"
  }
}));