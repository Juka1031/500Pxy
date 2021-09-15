import React from 'react';

class GalleryImageIndex extends React.Component {


    renderImage(){
        return this.props.galleryImage.map( (image, idx) => {
            return (
            <li className = "image-container" key={image.id}>
                <button className="delete-image-from-gallery">...</button>
                <a href={`#/images/${image.id}`} id={image.id} onClick={this.addImageToGallery} className="user-index-images"><img className= "user-images" src={image.imageUrl}/></a>
                <a  href={`#/images/${image.id}`} className="image-title">{image.image_title}</a>
            </li>
            );
        })
    }

    render(){

        return (
            <div className="image-index">

            <ul className="user-home-gallery">
                {this.renderImage()}
            </ul>


            </div>
        )
            
        
    }
}
export default GalleryImageIndex;