import React from 'react';
import UserGalleryIndex from './user_gallery_container';
import { Link } from "react-router-dom"

class ProfileGallery extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            images : [],


        }


    }
    componentDidMount(){
        this.props.fetchOwnerGalleries(this.props.currentUserId)
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
                    <UserGalleryIndex
                        currentUser ={this.props.user}
                        galleries = {this.props.galleries}
                    />
                </div>
            </div>
            
        )
    }
}

export default ProfileGallery