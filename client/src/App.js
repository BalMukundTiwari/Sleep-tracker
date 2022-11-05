import './App.css';
import Homepage from './components/Homepage/Homepage';
import Sleeptrack from './components/Sleeptrack/Sleeptrack';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Userinfo from './components/Userinfo/Userinfo';
import Stats from './components/Stats/Stats';
import Header from './components/Header/Header';
import Login from './components/Login/Login';

import { signOut } from "firebase/auth";
import { auth } from './firebase-config'
import { useState } from 'react';
import Community from './components/Community/Community';

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <BrowserRouter>
      <div>
      <Header/>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/" element={<Homepage />}/>
          <Route path='/userinfo' element={<Userinfo />} />
          <Route path='/stats' element={<Stats />} />
          <Route path='/community' element={<Community />} />
          <Route path='/sleeptracker' element={<Sleeptrack />} />
          <Route path='/profile' element={<Login />} />
        </Routes>
      </div>
  </BrowserRouter>
  );
}

export default App;
