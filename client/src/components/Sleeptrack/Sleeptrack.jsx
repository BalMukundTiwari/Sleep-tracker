import React, { useEffect, useState } from "react";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';

import './Sleeptrack.css'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Homepage = () => {

    const [disabled, setDisabled] = useState(false);
    const [bedTime, setBedTime] = useState(0);
    const [wakeupTime, setWakeupTime] = useState(0);

    const [open, setOpen] = React.useState(false);
    const [openWarn, setOpenWarn] = React.useState(false);

    const [todayData, setTodayData] = React.useState(localStorage.getItem("todayData"));

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleCloseWarn = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenWarn(false);
    };

    const submitHandler = () => {

        if (bedTime === 0 || wakeupTime === 0) {
            setOpenWarn(true);
            return;
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "uid": localStorage.getItem("uid"), "startTime": bedTime, "endTime": wakeupTime })
        };
        fetch('http://localhost:4200/api/session', requestOptions)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            if (data.status === "success") {
                setOpen(true);
                setDisabled(true);
            }
        });
    }

    useEffect(()=> {
        if (localStorage.getItem("todayData") !== "set") {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "uid": localStorage.getItem("uid")})
            };
            fetch('http://localhost:4200/api/getUserInfo', requestOptions)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                if (data.status === "success" && data.stored === true) {
                    localStorage.setItem("todayData", "set");
                    setDisabled(true);
                }
            });
        } else {
            console.log("API has been already called and data has been stored in local.");
            setDisabled(true);
        }
    }, [])

    return (
        <>
        <Box sx={{ flexGrow: 2 }}>
            <h1 className="header-top mt-5">Sleep Tracker</h1>
            <Grid align="center" justify="center" spacing={2}>

                <Grid item lg={4} md={6} sm={12} className="pt-5">
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={timeSlots}
                        sx={{ width: 300 }}
                        onChange={(event, item) => {
                            setBedTime(item);
                        }}
                        renderInput={(params) => <TextField {...params} label="Bed Time" />}
                    />
                </Grid>

                <Grid item lg={4} md={6} sm={12} className="pt-5">
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={timeSlots}
                        sx={{ width: 300 }}
                        onChange={(event, item) => {
                            setWakeupTime(item);
                        }}
                        renderInput={(params) => <TextField {...params} label="Wake Up" />}
                    />
                </Grid>

                
                <Grid item lg={4} md={6} sm={12} className="pt-5">
                    <Button
                        className="h-12"
                        variant="contained" 
                        disabled = {disabled}
                        onClick={submitHandler}>
                        Submit
                    </Button>
                </Grid>

            </Grid>

            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        User sleep time has been recorded!
                    </Alert>
                </Snackbar>
            </Stack>

            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={openWarn} autoHideDuration={2000} onClose={handleCloseWarn}>
                    <Alert onClose={handleCloseWarn} severity="error" sx={{ width: '100%' }}>
                        Please enter valid bed and wake up time.
                    </Alert>
                </Snackbar>
            </Stack>
        </Box>
        </>
    );
};

// One time slot every 30 minutes.
const timeSlots = Array.from(new Array(24 * 2)).map(
    (_, index) =>
      `${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${
        index % 2 === 0 ? '00' : '30'
      }`,
  );

export default Homepage;
