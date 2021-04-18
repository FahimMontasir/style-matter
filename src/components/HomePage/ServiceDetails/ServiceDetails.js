import React, { useEffect, useState } from 'react';
import { makeStyles, Typography, Container } from '@material-ui/core';
import AppCard from '../../../utils/AppCard/AppCard';
import { useHistory } from 'react-router';
const ServiceDetails = (props) => {
  const classes = useStyle();
  const history = useHistory();

  const [serviceData, setServiceData] = useState([])
  useEffect(() => {
    fetch('https://enigmatic-waters-35472.herokuapp.com/all-services')
      .then(res => res.json())
      .then(data => setServiceData(data));
  }, [])

  const handleRout = (id) => {
    history.push(id)
  }
  return (
    <div className={classes.root}>
      <Typography variant='h3' color="secondary">Services</Typography>
      <Typography variant='h4' >What we offer of Clients</Typography>
      <Container maxWidth="md" className={classes.cardContainer}>
        {serviceData.map(service =>
        (<AppCard
          key={service._id}
          imageUrl={service.imgUrl} title={service.title}
          description={service.description}
          onClick={() => handleRout(`/dashboard/book/${service._id}`)}
          money={service.money} />))}
      </Container>
    </div>
  )
}
export default ServiceDetails;

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