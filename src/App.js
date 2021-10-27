import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from './Home';
import LogIn from './LogIn';
import NewFeeling from './NewFeeling';
import Profile from './Profile';

function App() {
  return (
    <div class="app-wrapper">
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route> 
          <Route exact path="/LogIn">
            <LogIn/>
          </Route>
          <Route exact path="/NewFeeling">
            <NewFeeling/>
          </Route>
          <Route exact path="/Profile">
            <Profile/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
