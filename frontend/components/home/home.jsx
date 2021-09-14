
import React from 'react';
import { Redirect } from 'react-router-dom';
import UserImageIndex from '../user/user_image_container';

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
    componentDidMount(){
        this.props.fetchImages();
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
            <div className="home">
                <div className="empty-space"></div>
                <div className="home-header">
                    <h2 className="home-feed-text">Home Feed</h2>
                    <h4 className="home-feed-text2">See images and published Galleries from people you follow</h4>
                    <h3 className="home-feed-text3"><a>Home</a></h3>
                </div>
                <div className="welcome-message">
                    <h3 className="home-feed-text4" style={{fontWeight: "bold"}}>Welcome to 500Pxy</h3>
                    <h3 className="home-feed-text5" style={{fontWeight: "normal"}}>Follow Artists to get started</h3>
                </div>
                <br />

                <div className="home-image-feed">
                    <UserImageIndex

                    images = {this.props.images}
                    gallery = "home"
                    />
                </div>

            </div>
            )
        }
        

    }
}

export default Home;


//top div random users with random images
//if you're not following anyone render preset links to editor's choice, photos, galleries, 
