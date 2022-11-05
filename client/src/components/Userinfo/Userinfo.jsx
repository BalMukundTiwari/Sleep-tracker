import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './Userinfo.css';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const Userinfo = () => {
  return <UserPost/>;
};

const Headline = () => {
  const [greeting, setGreeting] = useState(
    'Hello Function Component!'
  );

  return (
    <div>
      <h1>User Information</h1>
      <p>{greeting}</p>

      <input
        type="text"
        value={greeting}
        onChange={event => setGreeting(event.target.value)}
      />
    </div>
  );
};

// const User = () => {

//   const [totalSolved, setTotalSolved] = React.useState(null);
//   const [reputation, setReputation] = React.useState(null);

//   React.useEffect(() => {
//     fetch('https://leetcode-stats-api.herokuapp.com/kiranpalsingh1806')
//       .then(results => results.json())
//       .then(data => {
//         setTotalSolved(data.totalSolved);
//         setReputation(data.reputation);
//       });
//   }, []);

//   return (
//     <div>
//       <h3>
//         Total Problems Solved : {!totalSolved ? 'Loading...' : `${totalSolved}`}
//         <br />
//         Total Reputation : {!reputation ? 'Loading...' : `${reputation}`}
//       </h3>
//     </div>
//   );
// }

const UserPost = () => {

  const [uid, setUid] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState(null);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const UserInfoHandler = () => {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ "uid": uid })
      };
      fetch('http://localhost:4444/api/get_user_info_by_uid', requestOptions)
      .then(response => response.json())
      .then((data) => {
        console.log("User Email : ", data.data[0]["userEmail"]);
        if (data.data[0]["userEmail"] !== null) {
          setOpen(true); 
        }
        setUserEmail(data.data[0]["userEmail"]);
        setUserName(data.data[0]["userName"])
      });
  }

  let navigate = useNavigate();

  const dashboardHandler = () => {
      navigate(`/`);
  }

  return (
    <div className="ml-4">
      <h3 className="text-3xl mt-6">Enter uid to get user information</h3>
      <input 
        className="userid border-2 border-gray-500/75 p-2 rounded"
        type="text"
        size={50}
        onChange={event => setUid(event.target.value)}/>
        <br />
      <button 
        type="button" 
        className="mt-2 p-1 bg-indigo-400 text-white rounded-md"
        onClick={UserInfoHandler}>
          Get Info
      </button>
      <br />
      <h2 className="mt-10 text-4xl">User Information</h2>
      <h3>
         {!userName ? '' : `User Name : ${userName}`}
        <br />
         {!userEmail ? '' : `User Email : ${userEmail}`}
      </h3>

      <button 
        type="button" 
        className="mt-20 ml-2 p-1 text-xl bg-gray-600 text-white rounded-md"
        onClick={dashboardHandler}>
          <HomeIcon/>
          Return To Dashboard
      </button>

    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          User information has been fetched!
        </Alert>
      </Snackbar>
    </Stack>
    </div>
  );
}

export default Userinfo;