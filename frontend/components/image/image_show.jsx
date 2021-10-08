import React from "react";
import Follow from "../follow/follow_container";
import Unfollow from "../follow/unfollow_container";

class ImageShow extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            fullscreen: false,
            following: null,
        }
        this.changeFollow.bind(this)
    }




    openFullscreen(){
        const ele = document.getElementById('fullscreen');


        if(this.state.fullscreen ===false){ 
            if(ele.requestFullscreen){
                ele.requestFullscreen();
                this.setState({fullscreen:true})
            }else if(ele.webkitRequestFullscreen){
                ele.webkitRequestFullscreen();
                this.setState({fullscreen:true})
            }
            
        }else if (this.state.fullscreen===true){
            if(document.exitFullscreen){
                document.exitFullscreen()
                this.setState({fullscreen:false})
            }else if(document.webkitExitFullscreen){
                document.webkitExitFullscreen();
                this.setState({fullscreen:false})
            } 
            
        }
        
    }
    routeChange(){
        window.location.replace(`#/images/${this.props.match.params.imageId}/edit`)
    }
    componentDidUpdate(){
    }

    // changeFollow(e){
    //     e.preventDefault();
    //     if(this.props.users[this.props.currentUserId].follows.find(user => user.id === this.props.image.uploader_id)){
    //         this.props.deleteFollow({follower_id:this.props.currentUserId, followed_id:this.props.image.uploader_id})
    //         this.setState({following:false})
    //         return
    //     }else{
    //         this.props.createFollow({follower_id:this.props.currentUserId, followed_id:this.props.image.uploader_id})
    //         this.setState({following:true})
    //         return
    //     }
    // }

    changeFollow(e){
        e.preventDefault();
        if(this.props.users[this.props.currentUserId].follows.find(user => user.id === this.props.image.uploader_id)){
            this.props.deleteFollow({follower_id:this.props.currentUserId, followed_id:this.props.image.uploader_id})
            this.setState({following:false})
        }
        else{
        // this.props.createFollow({follower_id:this.props.currentUserId, followed_id:this.props.image.uploader_id});
        const formData = new FormData();
            formData.append("follow[follower_id]", this.props.currentUserId)
            formData.append("follow[followed_id]", this.props.image.uploader_id)
        this.props.createFollow(formData)
        this.setState({following:true})
        }
        this.props.fetchUsers()

    }

    // componentDidUpdate(e){
    //     window.location.reload();
    // }


    
 

    render(){
        if(!this.props.image){
            return null
        }
 
        const control = this.state.fullscreen ? min : max
        let featured = this.props.images.sort(() => 0.5 - Math.random()).slice(0,3)
        featured = featured.map( (image, idx) => {
            return (
            <li className = "featured-image-cont" key={idx}>
                <a href={`#/images/${image.id}`}><img className= "user-images-featured" src={image.imageUrl} loading="lazy"/></a>
                <a className="image-title"href={`#/images/${image.id}`}>{image.image_title}</a>
                <div><h3>{image.image_title}</h3></div>
            </li>
            )
        })
        let deleteButton
        let followButton
        if (this.props.currentUserId){
            deleteButton = this.props.users[this.props.image.uploader_id].id === this.props.currentUserId ?
            <button className="edit-button" onClick={this.routeChange.bind(this)}>...</button> : null
            const heartButton = this.props.users[this.props.image.uploader_id].id != this.props.currentUserId ?
            <button className="edit-button" onClick={this.changeFollow.bind(this)}><img className="follow-heart"src={heart2}/></button> : null
            const found = this.props.users[this.props.currentUserId].follows.find(user => user.id===this.props.image.uploader_id)
            followButton = found ? <button className="edit-button" onClick={this.changeFollow.bind(this)}><img className="follow-heart"src={heart3}/></button>
            :heartButton
        }


        const buttons = this.props.currentUserId ? <div>{followButton}{deleteButton}</div> : null

        return(
            <div>
                <div className='empty-space'></div>
                <div className="image-show-container" id='fullscreen'>
                   
                    <img className="image-show-image" src={this.props.image.imageUrl} loading="lazy"/>
                     <img className="expand-button"onClick={this.openFullscreen.bind(this)} src={control}/>
                    
                </div>
                <div className="image-show-bottom">
                    <div className="image-show-details">
                        <div className="button-container">{buttons}</div>
                        
                        <div className="image-show-top">
                            <img src={avatar}/>
                            <div>
                                <h1 className="image-show-title">{this.props.image.image_title}</h1>
                                <h1 className="uploaded-by">by <span className="show-username">{this.props.users[this.props.image.uploader_id].username}</span></h1>
                            </div>
                        
                        
                        </div>
                        
                        
                        <div>
                            <h1 className="uploaded-at">Uploaded: <span className="date-uploaded">{(this.props.image.created_at).slice(0,10)}</span></h1>
                            
                            <h1 className="detail-text">{this.props.image.image_description}</h1>
                        </div>

                        <div>
                            <h1 className="show-featured-image-text"> Featured Images</h1>
                            <div className="featured-cont">
                                <ul className="featured-image-container">
                                    {featured}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="comment-box">
                        <div>
                            <h1 className="coming-soon">Comments coming soon</h1>
                            <input className="comment-input"type="text" placeholder="Add a comment" />
                        </div>
                    </div>

                    <div>

                    </div>
                </div>
               
            </div>
            )

    }
}

export default ImageShow

