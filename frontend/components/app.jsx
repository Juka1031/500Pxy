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
import ProfileContainer from './user/profile_container';
import ImageShowContainer from './image/image_show_container';

const App = () => (
    <div>

        <Route exact path ="/images/:imageId" component={ImageShowContainer}/>
        <Route exact path ="/" component={Splash}/>
        <Route path="/" component={Header}/>
        
        
        
        <Switch>
            
            <AuthRoute exact path = "/signup" component = {SignupFormContainer}/>
            <AuthRoute exact path = "/login" component = {LoginFormContainer}/>
            <ProtectedRoute exact path = "/upload" component={UploadContainer}/>
            <ProtectedRoute exact path = "/home" component={HomeContainer}/>
            <ProtectedRoute exact path = "/onboarding" component={EditUserForm}/>
            <ProtectedRoute path="/users/:userId" component={ProfileContainer}/>
        </Switch>
    </div>
)

export default App;