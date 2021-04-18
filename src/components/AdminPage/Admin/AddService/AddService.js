import React, { useContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { makeStyles, TextField, Button } from '@material-ui/core';
import ImgUploadBtn from "./ImgUploadBtn"
import { userContext } from "../../../../App";
const axios = require('axios');

const AddService = (props) => {
  const classes = useStyle();
  const [userInfo, setUserInfo, isAdmin] = useContext(userContext);
  const [imgUrl, setImgUrl] = useState();
  const { control, handleSubmit } = useForm();


  const onSubmit = (data) => {
    const serviceData = { ...data, imgUrl }
    fetch('http://localhost:5000/add-service', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(serviceData)
    })
      .then(result => console.log(result))
      .catch(res => console.log(res))
  };


  const handleImg = e => {
    const imgData = new FormData();
    imgData.set('key', '4ee92500539aec53d74737b7e5955151');
    imgData.append('image', e.target.files[0])
    axios.post('https://api.imgbb.com/1/upload', imgData)
      .then(function (response) {
        setImgUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      {
        isAdmin &&
        <form onSubmit={handleSubmit(onSubmit)}
          className={classes.root}>
          <Controller
            name="title"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField className={classes.inputField}
              id="filled-basic" label="Service Title" {...field} variant="filled" required />}
          />
          <Controller
            name="money"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField className={classes.inputField}
              id="filled-basic" label="Money" {...field} variant="filled" required />}
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
          <ImgUploadBtn handleImg={handleImg} />
          <Button
            className={classes.btn}
            type="submit"
            variant="contained" color="primary" >
            submit
          </Button>
        </form>
      }
    </>
  )
}
export default AddService;

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
    width: 80,
    margin: "0 0 0 auto",
    color: "white"
  }
}));