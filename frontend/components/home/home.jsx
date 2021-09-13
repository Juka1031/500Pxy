
import React from 'react';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            firstName: '',
            lastName: '',
            // avatarimage
        };
    }



    render(){
        let redirect
        if(this.props.currentUser.firstName === "" && this.props.currentUser.lastName === ""){
            redirect = true;

        }

        if(redirect){
            return(
                <div><Redirect to="/onboarding"/></div>
            )
        }else{
            return(
            <div>
                <div className="empty-space"></div>
                <div>
                    <h1>Home Feed</h1>
                    <h3>See images and published Galleries from people you follow</h3>
                </div>
                <div className="welcome-message">
                    <h3 style={{fontWeight: "bold"}}>Welcome to 500Pxy</h3>
                    <h3 style={{fontWeight: "normal"}}>Follow Artists to get started</h3>
                </div>

            </div>
            )
        }
        

    }
}

export default Home;


//top div random users with random images
//if you're not following anyone render preset links to editor's choice, photos, galleries, 
