import React from 'react';

import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from '../NavBar/NavBar.js'
import Blurb from '../Blurb/Blurb.js'
import Resume from '../Resume/Resume.js'
import Work from '../Work/Work.js'
import HomeButton from '../HomeButton/HomeButton.js'

const App = () => {

  return (
    <BrowserRouter>
      <main className="App">
        <HomeButton />
        <Routes>
          <Route path='/resume' element={<Resume />} />
          <Route path='/work' element={<Work />} />
          <Route path='/background' />
          <Route path='/contact' />
          <Route path='/' element={<Work />}/>
        </Routes>
        <NavBar/>
      </main>
    </BrowserRouter>
  );
}

export default App;
