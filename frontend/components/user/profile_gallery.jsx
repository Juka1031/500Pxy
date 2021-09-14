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
        this.props.fetchUploaderImages(this.props.currentUserId)
        this.props.fetchOwnerGalleries(this.props.currentUserId)
    }



    render(){
        const { firstName, lastName, biography} = this.props.user
        return (
            <div className="profile-container">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="user-profile-top-background">

                </div>
                <div className="user-profile-information-container">
                    <img className = "user-profile-avatar" src={avatar}/>
                    <h1 className="profile-name">{firstName} {lastName}</h1>
                    <h1 className="profile-biography">testtestest{biography}</h1>
                    <h2 className="profile-stats">1<a>Following</a> { }Photo Likes</h2>
                    
                    
                </div>

                <div className="user-profile-image-gallery-link">
                    <span><Link className="inactive-profile" to={`images`}>Photos  <span className="profile-image-count">{this.props.images.length}</span></Link></span> 
                    <span><Link className="active-profile"to={`galleries`}> Galleries <span className="profile-image-count">{this.props.galleries.length}</span></Link></span>
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