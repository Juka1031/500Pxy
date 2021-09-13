import React from "react";

class GalleryShow extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            modalOpen:false,
        }
        this.handleAddPhoto = this.handleAddPhoto.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)

    }

    componentDidMount(){
        this.props.fetchGallery(this.props.match.params.galleryId)
    }

    handleAddPhoto(e) {
        e.preventDefault();
        this.setState({modalOpen:true})
    }
    
    render(){
        if(this.props.gallery && this.props.galleryOwner) {
            if(this.state.modalOpen===false){
                return(
                <div>
                    <div className='empty-space'></div>
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
            }else{ 
                return(
                <div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    modal screen

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