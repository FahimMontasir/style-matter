import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { makeStyles, TextField, Button } from '@material-ui/core';
import { userContext } from "../../../../App";

const AddReview = (props) => {
  const classes = useStyle();
  const { control, handleSubmit } = useForm();
  const [userInfo] = useContext(userContext);

  const onSubmit = (data) => {
    const reviewData = { ...data, ...userInfo };
    fetch('https://enigmatic-waters-35472.herokuapp.com/add-review', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewData)
    })
      .then(result => console.log(result))
      .catch(res => console.log(res))
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className={classes.root}>
      <Controller
        name="userName"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField className={classes.inputField}
          id="filled-basic" label="Your name" {...field} variant="filled" required />}
      />

      <Controller
        name="description"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField className={classes.inputField}
          id="standard-multiline-static" label="Description" {...field}
          multiline
          rows={4} required variant="filled" />}
      />
      <Button
        className={classes.btn}
        type="submit"
        variant="outlined" color="secondary" >
        submit
      </Button>
    </form>
  )
}
export default AddReview;

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: 500,
    height: 400
  },
  inputField: {
    marginBottom: 20
  },
  btn: {
    width: 50,
    marginTop: 10
  }
}));