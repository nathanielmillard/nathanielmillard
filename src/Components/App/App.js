import React from 'react';
import headshot from '../../headshot.png'
import './App.scss';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from '../NavBar/NavBar.js'
import Blurb from '../Blurb/Blurb.js'
import Resume from '../Resume/Resume.js'
function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <NavBar/>
        <Switch>
          <Route path='/resume'>
            <Resume />
          </Route>
          <Route path='/work'>
          </Route>
          <Route path='/background'>
          </Route>
          <Route path='/contact'>
          </Route>
          <Route path='/'>
            <Blurb />
          </Route>
        </Switch>
        <img src={headshot}/>
      </main>
    </BrowserRouter>
  );
}

export default App;
