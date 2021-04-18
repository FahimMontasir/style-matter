import React, { useContext, useEffect, useState } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import BookListCard from './BookListCard';
import { userContext } from '../../../../App';

const BookingList = (props) => {
  const classes = useStyle();
  const [userInfo] = useContext(userContext);
  const [bookedList, setBookedList] = useState([]);

  useEffect(() => {
    fetch(`https://enigmatic-waters-35472.herokuapp.com/checkout/${userInfo.email}`)
      .then(res => res.json())
      .then(data => setBookedList(data));
  }, [userInfo])
  return (
    <Container className={classes.root}>
      {bookedList?.map(booked => (
        <BookListCard
          key={booked._id}
          processStatus={booked.status}
          title={booked.title}
          description={booked.description} />
      ))}
    </Container>
  )
}
export default BookingList;

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  }
}));