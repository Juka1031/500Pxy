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
    // componentDidMount(){
    //     this.props.fetchOwnerGalleries(this.props.currentPageUserId)
    //     this.props.fetchUploaderImages(this.props.currentPageUserId)
    //     this.props.fetchUsers()
    // }

        componentDidMount(){
        
        
        this.props.fetchUsers()
            .then(()=>{
                this.props.fetchOwnerGalleries(this.props.currentPageUserId)
                .then(()=>{
                    this.props.fetchUploaderImages(this.props.currentPageUserId)
                })
            })
    }


    // componentDidMount(){
    //     this.props.fetchOwnerGalleries(this.props.currentPageUserId)
    //         .then(()=>{
    //             this.props.fetchUploaderImages(this.props.currentPageUserId)
    //             .then(()=>{
    //                 this.props.fetchUsers()
    //             })
    //         })
        
        
        
    // }

    follow(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append("follow[follower_id]", this.props.currentUserId)
        formData.append("follow[followed_id]", this.props.userPageId)
        this.props.createFollow(formData)
        // setTimeout(function () {
        //     window.location.reload(false)
        //   }, 1)
    }


    render(){
        // const { firstName, lastName, biography} = this.props.user
        if(this.props.user){
        const firstName = this.props.user.lastName
        const lastName = this.props.user.firstName
        const biography = this.props.user.biography
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
                        {/* <button onClick={this.follow.bind(this)}>Follow</button> */}
                        
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

export default Profile