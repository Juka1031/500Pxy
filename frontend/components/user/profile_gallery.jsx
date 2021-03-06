import React from 'react';
import UserGalleryIndex from './user_gallery_container';
import { Link } from "react-router-dom"
import ModalContainer from '../modal/modal_container';

class ProfileGallery extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            images : [],


        }


    }
    componentDidMount(){
        this.props.fetchUsers()
            .then(()=>{
            this.props.fetchOwnerGalleries(this.props.currentUserId) 
                .then(()=>{
                    this.props.fetchUploaderImages(this.props.currentUserId)
            })
        })
    }



    render(){
        if (this.props.user){
            let background
            if(this.props.images.length>0){
            
                background = <img src={this.props.images[Math.floor(Math.random()*this.props.images.length)].imageUrl} className="user-profile-top-img"/>
            }
            let ava
            this.props.user.avatar ? ava = this.props.user.avatar : ava = avatar2
            return (
                <div className="profile-container">
                    <ModalContainer follows={this.props.user.follows} currentUserId = {this.props.currentPageUserId} users={this.props.users}/>
                    
                    <div className="empty-space"></div>
                    <br />
                    <div className="user-profile-top-background">
                        {background}
                    </div>
                    <div className="user-profile-information-container">
                        <a href="#/profile/edit"><img className = "user-profile-avatar" src={ava}/></a>
                        <a href="#/profile/edit"><img className="pencil-image"src={pencil2}/></a>
                        <br />
                        <h1 className="profile-name">{this.props.user.firstName} {this.props.user.lastName}</h1>
                        <h1 className="profile-biography">{this.props.user.biography}</h1>
                        <h2 className="profile-stats"><a onClick={() => this.props.openModal('follows')}><h3 className="following-button">Following {this.props.user.follows.length}</h3> </a> </h2>
                        
                        
                    </div>

                    <div className="user-profile-image-gallery-link">
                        <span><Link className="inactive-profile" to={`images`}>Photos  <span className="profile-image-count">{this.props.images.length}</span></Link></span> 
                        <span>&nbsp;&nbsp;</span>
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
        }else{
            return(
                <div>
                    <br />
                    <br />
                    <br />
                    <br />

                    <h1>this aint yo page</h1></div>
            )
        }
    }
}

export default ProfileGallery