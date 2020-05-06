import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './core/Home';
import Menu from './core/Menu';
import Signup from './user/Signup';
import Signin from './user/Signin';
<<<<<<< Updated upstream

import Profile from './user/Profile';
=======
import Feed from './core/Feed';
import Feed from './user/Profile';
>>>>>>> Stashed changes


const MainRouter = () => (
  <div>
    <Menu />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signin" component={Signin} />
<<<<<<< Updated upstream
      <Route exact path="/user/:userID" component={Profile} />
=======
      <Route exact path="/user" component={Profile} />
      <Route exact path="/feed" component={Feed} />
>>>>>>> Stashed changes
    </Switch>
  </div>
)

export default MainRouter;
