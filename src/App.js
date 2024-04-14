import {Home} from './Components/JSX/Home/Home';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import React from 'react';
import { MainPage } from './Components/JSX/Feed/Mainpage';
import MyApp from './Components/JSX/GroupsBackground/app';
import { Contactus } from './Components/JSX/ContactUs/contactus';
import { Aboutus } from './Components/JSX/AboutUs/Aboutus';
import Login from './Components/JSX/Login/Login';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SignUp' element={<Login />}/>
        <Route path='/ContactUs' element={<MyApp/>}/>
        <Route path='/AboutUs' element={<Aboutus/>}/>
      </Routes>
    </div>
  );
}

export default App;
