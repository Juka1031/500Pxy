import React from 'react';
import SignupFormContainer from './session_form/signup_form_container';
import Header from './header/header_container'
import Splash from './splash/splash';
import HomeContainer from './home/home_container';
import EditUserForm from './onboarding/onboarding_container';

import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';

const App = () => (
    <div>

        <Route path="/" component={Header}/>
        <Route exact path ="/" component={Splash}/>
        <Route exact path ="/home" component={HomeContainer}/>
        <Route exact path = "/onboarding" component={EditUserForm}/>
        <Switch>
            
            <AuthRoute exact path = "/signup" component = {SignupFormContainer}/>
            <AuthRoute exact path = "/login" component = {LoginFormContainer}/>
            
            
        </Switch>
    </div>
)

export default App;