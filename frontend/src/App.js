import {Home} from './Components/JSX/Home/Home';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import React from 'react';
import { MainPage } from './Components/JSX/Feed/Mainpage';
import{GroupsPage} from './Components/JSX/GroupsBackground/mainbackground';
import MyApp from './Components/JSX/GroupsBackground/app';
import { useNavigate } from "react-router-dom";
import { Contactus } from './Components/JSX/ContactUs/contactus';
import { Aboutus } from './Components/JSX/AboutUs/Aboutus';
import Login from './Components/JSX/Login/Login';
function App() {
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SignUp' element={<Login />}/>
        <Route path='/ContactUs' element={<Contactus/>}/>
        <Route path='/AboutUs' element={<Aboutus/>}/>
        <Route path='/MainPage' element={<MainPage/>}/>
        <Route path='/createGroup' element={<GroupsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
