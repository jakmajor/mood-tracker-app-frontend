import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from './Home';
import LogIn from './LogIn';
import NewFeeling from './NewFeeling';
import Profile from './Profile';

function App() {
  const [user, setUser] = useState({})

  return (
    <div class="app-wrapper">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/LogIn">
          <LogIn setUser={setUser} user={user} />
        </Route>
        <Route exact path="/NewFeeling">
          <NewFeeling user={user}/>
        </Route>
        <Route exact path="/Profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
