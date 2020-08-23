import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

const Login = () => {
  const [{ user }, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({ type: actionTypes.SET_USER, user: result.user });
        console.log(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://cdn0.iconfinder.com/data/icons/social-media-2127/48/social_media_social_media_logo_whatsapp-512.png'
          alt=''
        />
        <div className='login__text'>
          <h1>Sign in to CatchUp</h1>
          <p>Stay connected from anywhere!</p>
        </div>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
};

export default Login;
