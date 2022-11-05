import React, { Component } from "react";
import './Homepage.css'
import { useNavigate } from "react-router-dom";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import sleepingBear from '../../assets/images/sleeping-bear.gif'
import sleepingDog from '../../assets/images/sleeping-dog.gif'
import sleepingGirl from '../../assets/images/sleeping-girl.gif'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? 'rgb(148 163 184)' : 'rgb(64 64 64)',
    ...theme.typography.body2,
    padding: theme.spacing(1.5),
    textAlign: 'center',
    fontFamily: "verdana",
    fontSize: "30px",
    color: "white",
}));

const Homepage = () => {

    const [isAuth, setIsAuth] = React.useState(localStorage.getItem("isAuth"));

    let navigate = useNavigate();

    const handleFirst = () => {
        navigate(`/userinfo`);
    }

    const statsHandler = () => {
        navigate(`/stats`);
    }

    const communityHandler = () => {
        navigate(`/community`);
    }

    const handleSleepTracker = () => {
        navigate(`/sleeptracker`);
    }
   
    return (
         !isAuth ? 
         <div>
            <Box sx={{ flexGrow: 2 }}>
                <Grid align="center" justify="center" spacing={2}>

                    <Grid item lg={4} md={6} sm={12} className="pt-5">
                        <p className="text-2xl mt-5">You need to sign in to access all features.</p>
                    </Grid>
                </Grid>
            </Box>
        </div> : 
        <Box sx={{ flexGrow: 1 }} className="px-5 my-10">
            <Grid container spacing={2}>
                <Grid item lg={4} md={6} sm={12} align="center" className="gridBox" onClick={handleSleepTracker}>
                    <Card sx={{ maxWidth: 450 }}>
                        <CardMedia
                            component="img"
                            height="50"
                            image={sleepingBear}
                            alt="Track Sleep"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Track Sleep
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            By monitoring your sleep patterns, you can see how much quality sleep you're getting.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {/* <Button size="small">Share</Button> */}
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item lg={4} md={6} sm={12} align="center" className="gridBox" onClick={statsHandler}>
                    <Card sx={{ maxWidth: 450 }}>
                        <CardMedia
                            component="img"
                            height="50"
                            image={sleepingGirl}
                            alt="Stats"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Stats
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            See your sleep pattern in graphical representation. You can also see the monthly data in line chart.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {/* <Button size="small">Share</Button> */}
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item lg={4} md={6} sm={12} align="center" className="gridBox" onClick={communityHandler}>
                    <Card sx={{ maxWidth: 450 }}>
                        <CardMedia
                            component="img"
                            height="50"
                            image={sleepingDog}
                            alt="Track Sleep"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Community
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            This community has valuable information that will empower you to take control of yourself and sleep better.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {/* <Button size="small">Share</Button> */}
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
      );
  };

export default Homepage;
