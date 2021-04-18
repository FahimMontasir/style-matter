import React, { useContext, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { makeStyles, TextField, Button, Typography } from '@material-ui/core';
import PaymentProcess from "./PaymentProcess/PaymentProcess";
import { useParams } from "react-router";
import { userContext } from "../../../../App";

const BookNow = (props) => {
  const classes = useStyle();
  const [userInfo, setUserInfo, isAdmin] = useContext(userContext);
  const [paymentId, setPaymentId] = useState('');
  const { control, handleSubmit } = useForm();
  const [serviceInfo, setServiceInfo] = useState({})
  const { title, description } = serviceInfo;

  const onSubmit = (data) => {
    const checkoutData = { ...data, title, description, status: "pending", paymentId }
    fetch('https://enigmatic-waters-35472.herokuapp.com/checkout', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(checkoutData)
    })
      .then(result => console.log(result))
      .catch(res => console.log(res))
  };

  const { id } = useParams();
  useEffect(() => {
    if (id !== "noValidIdFound") {
      fetch(`https://enigmatic-waters-35472.herokuapp.com/service/${id}`)
        .then(res => res.json())
        .then(data => setServiceInfo(data));
    }
  }, [id])
  return (
    <>
      {
        isAdmin || !title ? <h1>You don't have any access of this page
          (either you didn't select any service or you're the wrong person)</h1> :
          <>
            {
              paymentId ?
                <form onSubmit={handleSubmit(onSubmit)}
                  className={classes.root}>
                  <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <TextField className={classes.inputField} id="standard-basic" label="name" {...field} />}
                  />

                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <TextField className={classes.inputField} id="standard-basic" label="email" {...field} required />}
                  />

                  <Typography variant="h6" color="primary">Service Name: {serviceInfo.title}</Typography>
                  <Button
                    className={classes.btn}
                    type="submit"
                    variant="outlined" color="primary" >
                    Submit
                  </Button>
                </form> :
                <div className="paymentMethod">
                  <h2>Pay with card</h2>
                  <h4>Total payable amount ${serviceInfo.money}</h4>
                  <PaymentProcess setPaymentId={setPaymentId} />
                </div>}
          </>
      }
    </>
  )
}
export default BookNow;

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: 500,
    height: 500
  },
  inputField: {
    marginBottom: 20
  },
  btn: {
    width: 50,
    margin: "0 0 0 auto"
  }
}));