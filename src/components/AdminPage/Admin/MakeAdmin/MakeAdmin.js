import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { makeStyles, TextField, Button } from '@material-ui/core';
import { userContext } from "../../../../App";


const MakeAdmin = (props) => {
  const classes = useStyle();
  const [userInfo, setUserInfo, isAdmin] = useContext(userContext);
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch('http://localhost:5000/add-admin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(result => console.log(result))
      .catch(res => console.log(res))
  };
  return (
    <>
      {
        isAdmin &&
        <form onSubmit={handleSubmit(onSubmit)}
          className={classes.root}>
          <Controller
            name="adminEmail"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField className={classes.inputField}
              id="filled-basic" label="Admin Email" {...field} variant="filled" required />}
          />
          <Button
            className={classes.btn}
            type="submit"
            variant="contained" color="primary" >
            Add Admin
          </Button>
        </form>
      }
    </>
  )
}
export default MakeAdmin;

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
    width: 150,
    margin: "0 0 0 auto",
    color: "white"
  }
}));