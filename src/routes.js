import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './screens/home';
import Edit from './screens/users/edit'
import Notes from './screens/notes/index'
import Login from './screens/auth/login'
import Register from './screens/auth/register'
import PrivateRouter from './components/auth/private_router'

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <PrivateRouter exact path='/notes' component={Notes} />
        <PrivateRouter exact path='/users/edit' component={Edit} />
      </Switch>
    </BrowserRouter>
  )

}
export default routes;