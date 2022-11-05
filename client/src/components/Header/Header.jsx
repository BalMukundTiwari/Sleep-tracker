import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import HotelIcon from '@mui/icons-material/Hotel';
import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from '../../firebase-config'

// Report bug, request a feature.
const pages = [
  {name: 'Home', href: "/"}, 
  {name: 'Profile', href: "/profile"}
];

const settings = ['Profile', 'Stats'];

const Header = () => {

  const [isAuth, setIsAuth] = React.useState(localStorage.getItem("isAuth"));
  const [photoURL, setPhotoURL] = useState(localStorage.getItem("photoURL"));

  const navigate = useNavigate();
  const location = useLocation();

  const homeHandler = () => {
    navigate("/");
  }

  const profileHandler = () => {
    setAnchorElUser(null);
    navigate("/profile");
  }

  const bugHandler = () => {
    navigate("/bug");
  }

  const statsHandler = () => {
    navigate("/stats");
  }

  const communityHandler = () => {
    navigate("/community");
  }

  const leaderboardHandler = () => {
    navigate("/leaderboard");
  }

  const requestFeatureHandler = () => {
    navigate("/requestfeature");
  }

  const logoutHandler = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login"
    })
  }

  const loginHandler = () => {
    navigate('/login');
  }
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="100%">
        <Toolbar disableGutters>
          <HotelIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'roboto',
              fontWeight: 700,
              fontSize: 25,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SLEEP TRACKER
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              <MenuItem key="Home" onClick={homeHandler}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem key="Profile" onClick={profileHandler}>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SLEEP TRACKER
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

              <Button
                key="Home"
                onClick={homeHandler}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: '17px' }}>
                  Home
              </Button> 
              <Button
                key="Profile"
                onClick={profileHandler}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: '17px' }}>
                  Profile
              </Button> 
              <Button
                key="Community"
                onClick={communityHandler}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: '17px' }}>
                  Community
              </Button>
               <Button
                  key="Stats"
                  onClick={statsHandler}
                  sx={{ my: 2, color: 'white', display: 'block', fontSize: '17px' }}>
                    Stats
               </Button> 
               <Button
                  key="Leaderboard"
                  onClick={leaderboardHandler}
                  sx={{ my: 2, color: 'white', display: 'block', fontSize: '17px' }}>
                    Leaderboard
               </Button> 
          </Box>

          <Box sx={{ flexGrow: 0 }}>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Kiranpal Singh" src={photoURL} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key="Profile" onClick={profileHandler}>
                  <Typography textAlign="center">Profile</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
