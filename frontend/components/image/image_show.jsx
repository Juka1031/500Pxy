import React from "react";

class ImageShow extends React.Component {

    componentDidMount(){
        this.props.fetchImage(this.props.match.params.imageId)
    }
    
    render(){
        if(this.props.image && this.props.uploader) {
            return(
            <div>
                <div className='empty-space'></div>
                <div className="image-show-container">
                    
                    <img className="image-show-image" src={this.props.image.imageUrl}/>
                </div>
                <div className="image-show-details">
                    <h1>{this.props.uploader[this.props.image.uploader_id].username}</h1>
                    <h1>Uploaded: {(this.props.image.created_at).slice(0,10)}</h1>
                    <h1>{this.props.image.image_description}</h1>
                </div>
            </div>
            )
        }
        else {
            return(
            null
            )
        }
    }
}

export default ImageShow