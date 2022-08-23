import React, { Component, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./features/userSlice";
import './scss/style.scss';
import Login from './views/pages/login/Login';
import Register from './views/pages/register/Register';
import Page404 from './views/pages/page404/Page404';
import Page500 from './views/pages/page500/Page500';
import TheLayout from './containers/TheLayout';

const App = () => {
  const user = useSelector( selectUser );
  
  return (
    <Router>
          <Switch>      
            {user ? (
            <>
                  <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
                  <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
                  <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
                  <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
                  <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
              </>
        ) : (
             <Login />
            )}
            </Switch>
    </Router>
  );
}

export default App;
