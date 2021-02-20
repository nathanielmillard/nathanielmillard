import React from 'react';

import './App.scss';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from '../NavBar/NavBar.js'
import Blurb from '../Blurb/Blurb.js'
import Resume from '../Resume/Resume.js'
import Work from '../Work/Work.js'
import {gsap} from 'gsap';
function App() {
  gsap.to('headshot', {
    duration: 3,
    opacity: .01,
    height: '20%',
  })
  return (
    <BrowserRouter>
      <main className="App">
        <NavBar/>
        <Switch>
          <Route path='/resume'>
            <Resume />
          </Route>
          <Route path='/work'>
            <Work />
          </Route>
          <Route path='/background'>
          </Route>
          <Route path='/contact'>
          </Route>
          <Route path='/'>
            <Blurb />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
