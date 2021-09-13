import React from 'react';
import UserImageIndex from './user_image_container';
import { Link } from "react-router-dom"

class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            images : [],
            view : "images",

        }


    }
    componentDidMount(){
        this.props.fetchUploaderImages(this.props.currentUserId)
    }



    render(){
        const firstname = this.props.user.lastName
        const lastname = this.props.user.firstName
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="user-profile-top-background">

                </div>
                <div className="user-profile-information-container">
                    <img className = "user-profile-avatar" src={avatar}/>
                    <h1>{firstname} {lastname}</h1>
                    <h1>some biography</h1>
                    <h2>1<a>Following</a> { }Photo Likes</h2>
                    
                    
                </div>

                <div className="user-profile-image-gallery-link">
                    <span><Link to={`images`}>Photos</Link></span> <span><Link to={`galleries`}>Galleries</Link></span>
                </div>

                <div className="user-home-image-container">
                    <UserImageIndex
                        currentUser ={this.props.user}
                        images = {this.props.images}
                    />
                </div>
            </div>
            
        )
    }
}

export default Profile