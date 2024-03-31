import {Home} from './Components/JSX/Home/Home';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import React from 'react';
import { MainPage } from './Components/JSX/Feed/Mainpage';
import MyApp from './Components/JSX/GroupsBackground/app';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Mainpage' element={<MainPage />}/>
        <Route path='/Groupspage' element={<MyApp/>}/>
      </Routes>
    </div>
  );
}

export default App;
