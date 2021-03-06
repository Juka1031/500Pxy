import React from "react";
import UserImageIndex from "../user/user_image_container";
import GalleryImageIndex from "./gallery_image_index";

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

        // this.props.fetchGallery(this.props.match.params.galleryId)
        // this.props.fetchUploaderImages(this.props.currentUserId)
        // this.props.fetchUsers()

        
        this.props.fetchUsers()
            .then(()=>{
                this.props.fetchGallery(this.props.match.params.galleryId)
                .then(()=>{
                    this.props.fetchGalleriedImages()
                    .then(()=>{
                        this.props.fetchUploaderImages(this.props.currentUserId)
                    })
                    
                })
            })

    }

    handleAddPhoto(e) {
        e.preventDefault();
        this.setState({modalOpen:true})
    }

    closeModal(e){
        e.preventDefault();
        this.setState({modalOpen:false})
    }

    routeChange(){
        window.location.replace(`#/galleries/${this.props.match.params.galleryId}/edit`)
    }


    
    
    render(){
        if(this.props.gallery && this.props.galleryOwner && this.props.gallery.created_at &&this.props.galleryOwner[this.props.gallery.gallery_owner_id]) {
            
            if(this.state.modalOpen===false){
                let hidden
                let topBackground
                this.props.gallery.images.length > 0 ? topBackground = this.props.gallery.images[Math.floor(Math.random()*this.props.gallery.images.length)].imageUrl: 
                (this.props.currentUserId === this.props.gallery.gallery_owner_id) ? hidden = "visible" : hidden = "hidden"
                
                const deleteButton = this.props.galleryOwner[this.props.gallery.gallery_owner_id].id === this.props.currentUserId ?
                <button onClick={this.routeChange.bind(this)} className="pencil-button-2"><img src={pencil2} className="pencil-img"/></button> : <div></div> 

                const addButton =this.props.galleryOwner[this.props.gallery.gallery_owner_id].id === this.props.currentUserId ?
                <button onClick={this.handleAddPhoto} className="plus-button"><img src={plus} className="plus-img" /></button> : <div></div> 
                return(
                    <div>
                        <div className='empty-space'></div>
                        <div className="gallery-show-top-background">
                            < img src={topBackground} className="gallery-show-top-background-image"/>
                            <img className="gallery-show-gallery" src={this.props.gallery.imageUrl}/>
                        </div>
                        <div className="gallery-show-details-2">
                            <h1 className="gallery-title">{this.props.gallery.gallery_title}</h1>
                            <h1 className="gallery-description">{this.props.gallery.gallery_description}</h1>
                            <h1 className="gallery-uploader">Curated by: {this.props.galleryOwner[this.props.gallery.gallery_owner_id].username}</h1>
                            {deleteButton}
                            
                            {addButton}
                            {/* open modal that calls index on all user photos */}
                        </div>
                        <div>
                            <ul>
                                <GalleryImageIndex
                                    galleriedImages = {this.props.galleriedImages}
                                    deleteGalleriedImage = {this.props.deleteGalleriedImage}
                                    galleryImage = {this.props.gallery.images}
                                    gallery = {this.props.gallery}
                                />
                            </ul>
                        </div>
                    </div>
                    )
                }else{ 
                let topBackground
                let hidden
                this.props.gallery.images.length > 0 ? topBackground = this.props.gallery.images[Math.floor(Math.random()*this.props.gallery.images.length)].imageUrl: 
                (this.props.currentUserId === this.props.gallery.gallery_owner_id) ? hidden = "visible" : hidden = "hidden"
                return(
                    
                    <div>
                        <div className='empty-space'></div>
                        <div className="gallery-show-top-background" >
                            < img src={topBackground} className="gallery-show-top-background-image"/>
                        </div>
                        <div className="gallery-modal-screen" onClick={this.closeModal}>  
                        </div>
                        <div className="gallery-modal-form">
                            <button onClick={this.closeModal} className="close-select-image-button"><img className="close-button-image"src={close1}/></button>
                            <h1 className="select-image-text">Select an Image to add to your Gallery</h1>
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