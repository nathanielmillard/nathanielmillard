import React from 'react';
import './App.scss';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from '../NavBar/NavBar.js'
import Blurb from '../Blurb/Blurb.js'
function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <NavBar/>
        <Switch>
          <Route path='/resume'>
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
      </main>
    </BrowserRouter>
  );
}

export default App;
