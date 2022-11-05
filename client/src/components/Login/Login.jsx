import React, { useState } from 'react';
import { auth, provider } from "../../firebase-config";
import { signInWithPopup } from "firebase/auth"
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import './Login.css'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';


function Login() {

    let navigate = useNavigate();

    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
    const [displayName, setDisplayName] = useState(localStorage.getItem("displayName"));
    const [email, setEmail] = useState(localStorage.getItem("email"));
    const [uid, setUid] = useState(localStorage.getItem("uid"));
    const [photoURL, setPhotoURL] = useState(localStorage.getItem("photoURL"));

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            console.log(result.user);
            setDisplayName(result.user.displayName);
            setEmail(result.user.email);
            setPhotoURL(result.user.photoURL);
            localStorage.setItem("displayName", result.user.displayName);
            localStorage.setItem("email", result.user.email);
            localStorage.setItem("uid", result.user.uid);
            localStorage.setItem("photoURL", result.user.photoURL);
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
        })
    }

    const logoutHandler = () => {
        signOut(auth).then(() => {
          localStorage.clear();
          setIsAuth(false);
          window.location.pathname = "/login"
        })
      }

    return (
        <div>
            {
                isAuth ? 
                <div>
                    <Box sx={{ flexGrow: 2 }}>
                        <Grid align="center" justify="center" spacing={2}>

                            <Grid item lg={4} md={6} sm={12} className="pt-5">
                                <p className="text-2xl mt-5">You are already signed in as <b>{displayName}</b></p>
                            </Grid>

                            {/* {email ? <Grid item lg={4} md={6} sm={12} className="pt-5">
                                <p className="text-2xl mt-5">Email : {email}</p>
                            </Grid> : ''} */}

                            <Grid item lg={4} md={6} sm={12} className="pt-5">
                                <button className='login-with-google-btn' onClick={logoutHandler}> Sign Out</button>
                            </Grid>
                        </Grid>
                    </Box>
                </div> :
                
                <div>
                    <Box sx={{ flexGrow: 2 }}>
                        <Grid align="center" justify="center" spacing={2}>

                            <Grid item lg={4} md={6} sm={12} className="pt-5">
                                <h1 className="header-top mt-5">Sign In</h1>
                                <p className="text-2xl mt-5">Access all features of this website</p>
                            </Grid>

                            <Grid item lg={4} md={6} sm={12} className="pt-5">
                                <button className='login-with-google-btn' onClick={signInWithGoogle}> Sign In With Google</button>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
                
            }
        </div>
    );
}

export default Login;