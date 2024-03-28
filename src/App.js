import {Home} from './Components/JSX/Home/Home';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import React from 'react';
import { MainPage } from './Components/JSX/Feed/Mainpage';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Mainpage' element={<MainPage />}/>
      </Routes>
    </div>
  );
}

export default App;
