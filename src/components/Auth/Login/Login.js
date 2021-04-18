import React, { useContext } from 'react';
import { makeStyles, Typography, Container, IconButton } from '@material-ui/core';
import logo from "../../../images/logo.png"
import googleImg from "../../../images/google.png"
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../config/firebase.config';
import { userContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}


const Login = (props) => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const [userInfo, setUserInfo] = useContext(userContext)
  const classes = useStyle();
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = () => {
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        const userData = { email: user.email, name: user.displayName, url: user.photoURL }
        setUserInfo(userData)
        history.replace(from);
      }).catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage)
      });

  }
  return (
    <Container className={classes.root} maxWidth="md">
      <img className={classes.image} src={logo} alt="" />
      <Typography variant="h4" color="primary">Continue with Google</Typography>
      <IconButton aria-label="Google Sing in" onClick={handleSignIn}>
        <img
          className={classes.googleImg}
          src={googleImg} alt="" />
      </IconButton>
    </Container>
  )
}
export default Login;

const useStyle = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginTop: 50,
    padding: 20,
    backgroundColor: "#353535",
    borderRadius: 20,
    width: 400
  },
  image: {
    width: 200
  },
  googleImg: {
    width: 50
  }
}));