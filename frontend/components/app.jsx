import React from 'react';
import SignupFormContainer from './session_form/signup_form_container';
import Header from './header/header_container'
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';

const App = () => (
    <div>
        <h1>500Pxy</h1>
       
        <Switch>
            
            <AuthRoute exact path = "/signup" component = {SignupFormContainer}/>
            <AuthRoute exact path = "/login" component = {LoginFormContainer}/>
            <Route path="/" component={Header}/>
            
        </Switch>
    </div>
)

export default App;