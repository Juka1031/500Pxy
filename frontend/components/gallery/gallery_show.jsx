import React from "react";
import UserImageIndex from "../user/user_image_container";

class GalleryShow extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            modalOpen:false,
        }
        this.handleAddPhoto = this.handleAddPhoto.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
        this.closeModal = this.closeModal.bind(this)

    }

    componentDidMount(){
        this.props.fetchGallery(this.props.match.params.galleryId)
        this.props.fetchUploaderImages(this.props.currentUserId)
        this.props.fetchUsers()
    }

    handleAddPhoto(e) {
        e.preventDefault();
        this.setState({modalOpen:true})
    }

    closeModal(e){
        e.preventDefault();
        this.setState({modalOpen:false})
    }
    
    render(){
        if(this.props.gallery && this.props.galleryOwner && this.props.gallery.created_at &&this.props.galleryOwner[this.props.gallery.gallery_owner_id-1]) {
            if(this.state.modalOpen===false){
                let hidden
                
                (this.props.currentUserId === this.props.gallery.gallery_owner_id) ? hidden = "visible" : hidden = "hidden"
                    return(
                    <div>
                        <div className='empty-space'></div>
                        <div className="gallery-show-container">
                            
                            {/* <img className="gallery-show-gallery" src={this.props.gallery.imageUrl}/> */}
                        </div>
                        <div className="gallery-show-details">
                            <h1>{this.props.galleryOwner[this.props.gallery.gallery_owner_id-1].username}</h1>
                            <h1>Uploaded: {(this.props.gallery.created_at).slice(0,10)}</h1>
                            <h1>{this.props.gallery.gallery_title}</h1>
                            <button style={{visibility: hidden }} onClick={this.handleAddPhoto}>Add Photos</button>
                            {/* open modal that calls index on all user photos */}
                        </div>
                        <div>
                            <h1>gallery index will go here</h1>
                        </div>
                    </div>
                    )
                }else{ 
                return(
                    <div>
                        <div className='empty-space'></div>
                        <div className="gallery-modal-screen" onClick={this.closeModal}>  
                        </div>
                        <div className="gallery-modal-form">
                            <button onClick={this.closeModal} >X</button>
                            <h1>Select an Image to add to your Gallery</h1>
                            <div className="gallery-modal-images">
                                <UserImageIndex
                                    createGalleriedImage = {this.props.createGalleriedImage}
                                    images = {this.props.images}
                                    galleryId = {this.props.gallery}
                                    gallery = "true"
                                />
                            </div>
                        </div>
                        <div className="gallery-show-container">
                            
                            {/* <img className="gallery-show-gallery" src={this.props.gallery.imageUrl}/> */}
                        </div>
                        <div className="gallery-show-details">
                            <h1>{this.props.galleryOwner[this.props.gallery.gallery_owner_id].username}</h1>
                            <h1>Uploaded: {(this.props.gallery.created_at).slice(0,10)}</h1>
                            <h1>{this.props.gallery.gallery_title}</h1>
                            <button onClick={this.handleAddPhoto}>Add Photos</button>
                            {/* open modal that calls index on all user photos */}
                        </div>

                    </div>
                )
            }
        }
        else {
            return(
            null
            )
        }
    }
}

export default GalleryShow