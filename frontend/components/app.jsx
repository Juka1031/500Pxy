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
import ProfileGalleryContainer from './user/profile_gallery_container';
import ImageShowContainer from './image/image_show_container';
import GalleryShowContainer from './gallery/gallery_show_container';
import CreateGalleryForm from './gallery/create_gallery_container';
import ImageEditContainer from './image/image_edit_container';
import GalleryEditContainer from './gallery/gallery_edit_container';
const App = () => (
    <div>

        <Route exact path ="/images/:imageId" component={ImageShowContainer}/>
        <Route exact path ="/galleries/:galleryId" component={GalleryShowContainer}/>
        <Route exact path ="/" component={Splash}/>
        <Route path="/" component={Header}/>
        
        
        
        <Switch>
            
            <AuthRoute exact path = "/signup" component = {SignupFormContainer}/>
            <AuthRoute exact path = "/login" component = {LoginFormContainer}/>
            <ProtectedRoute exact path = "/upload" component={UploadContainer}/>
            <ProtectedRoute exact path = "/home" component={HomeContainer}/>
            <ProtectedRoute exact path = "/onboarding" component={EditUserForm}/>
            <ProtectedRoute exact path = "/images/:imageId/edit" component={ImageEditContainer}/>
            <ProtectedRoute exact path = "/galleries/:galleryId/edit" component={GalleryEditContainer}/>
            <ProtectedRoute exact path="/users/:userId/images" component={ProfileContainer}/>
            <ProtectedRoute exact path="/users/:userId/galleries" component={ProfileGalleryContainer}/>
            <ProtectedRoute exact path="/galleries/create"  component={CreateGalleryForm}/>
        </Switch>
    </div>
)

export default App;