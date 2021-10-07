import React from 'react';
import UserImageIndex from './user_image_container';
import { Link } from "react-router-dom"
import ModalContainer from '../modal/modal_container';
class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            images : [],
            view : "images",

        }


    }

        componentDidMount(){
        
        
        this.props.fetchUsers()
            .then(()=>{
                this.props.fetchOwnerGalleries(this.props.currentPageUserId)
                .then(()=>{
                    this.props.fetchUploaderImages(this.props.currentPageUserId)
                })
            })
    }




    render(){
        // const { firstName, lastName, biography} = this.props.user
        if(this.props.user){
        const firstName = this.props.user.lastName
        const lastName = this.props.user.firstName
        const biography = this.props.user.biography
        let background
        let ava
        this.props.user.avatar ? ava = this.props.user.avatar : ava = avatar2
        if(this.props.images.length>0){
            
            background = <img src={this.props.images[Math.floor(Math.random()*this.props.images.length)].imageUrl} className="user-profile-top-img"/>
        }
         return (
                <div className="profile-container">
                    <ModalContainer follows={this.props.user.follows} currentUserId = {this.props.currentPageUserId}/>
                   <div className="empty-space"></div>
                   <br />
                    <div className="user-profile-top-background">
                        {background}
                        
                    </div>
                    <div className="user-profile-information-container">
                        <a href="#/profile/edit"><img className = "user-profile-avatar ignore" src={ava}/></a>

                        <br />
                        <h1 className="profile-name">{firstName} {lastName}</h1>
                        <h1 className="profile-biography">{biography}</h1>
                        <h2 className="profile-stats"><a onClick={() => this.props.openModal('follows')}>Following {this.props.user.follows.length}</a> Followers {this.props.user.followers.length}</h2>
                        
                    </div>

                    <div className="user-profile-image-gallery-link">
                        <span><Link className="active-profile" to={`images`}>Photos  <span className="profile-image-count">{this.props.images.length}</span></Link></span> 
                        <span><Link className="inactive-profile"to={`galleries`}> Galleries <span className="profile-image-count">{this.props.galleries.length}</span></Link></span>
                    </div>

                    <div className="user-home-image-container">
                        <UserImageIndex
                            gallery = "home"
                            currentUser ={this.props.user}
                            images = {this.props.images}
                        />
                    </div>
                </div>
                
            )
        }
        else{
            return(
                null
            )
        }
    }
}
import follow_modal_container from '../follow/follow_modal_container';

export default Profile