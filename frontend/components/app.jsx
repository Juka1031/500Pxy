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
import UploadContainer from './upload/upload_container';

const App = () => (
    <div>

        <Route path="/" component={Header}/>
        <Route exact path ="/" component={Splash}/>
        
        
        
        
        <Switch>
            
            <AuthRoute exact path = "/signup" component = {SignupFormContainer}/>
            <AuthRoute exact path = "/login" component = {LoginFormContainer}/>
            <ProtectedRoute exact path = "/upload" component={UploadContainer}/>
            <ProtectedRoute exact path = "/home" component={HomeContainer}/>
            <ProtectedRoute exact path = "/onboarding" component={EditUserForm}/>
            
        </Switch>
    </div>
)

export default App;