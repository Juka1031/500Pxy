import React from 'react';

class GalleryImageIndex extends React.Component {


    deleteGallImage(e){
        e.preventDefault();
        let target
        for (let i = 0; i < this.props.galleriedImages.length; i++) {
            if (this.props.galleriedImages[i].gallery_id === this.props.gallery.id && this.props.galleriedImages[i].gallery_image_id === parseInt(e.currentTarget.id)){
                target = this.props.galleriedImages[i].id
            }
        }

        this.props.deleteGalleriedImage(target).then(()=> window.location.reload(false))
    }

    renderImage(){

        return this.props.galleryImage.map( (image, idx) => {
            return (
            <li className = "image-container" key={image.id}>
                <button id={image.id} className="delete-image-from-gallery" onClick={this.deleteGallImage.bind(this)}>
                    <img src={xbut} className="x-image"/>
                </button>
                <a href={`#/images/${image.id}`} id={image.id} onClick={this.addImageToGallery} className="user-index-images">
                    <img className= "user-images" src={image.imageUrl}/>
                </a>
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