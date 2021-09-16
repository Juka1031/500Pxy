import React from 'react';

class GalleryImageIndex extends React.Component {


    deleteGallImage(e){
        e.preventDefault();
        // const formData = new FormData();
        // formData.append("galleriedimage[gallery_id]", this.props.gallery.id)
        // formData.append("galleriedimage[gallery_image_id]", e.currentTarget.id)
        // this.props.deleteGalleriedImage(formData)sds
        // this.props.deleteGalleriedImage({gallery_id:this.props.gallery.id, gallery_image_id:e.currentTarget.id});
        this.props.deleteGalleriedImage(this.props.gallery.id,  e.currentTarget.id)
    }

    renderImage(){

        return this.props.galleryImage.map( (image, idx) => {
            return (
            <li className = "image-container" key={image.id}>
                <button id={image.id} className="delete-image-from-gallery" onClick={this.deleteGallImage.bind(this)}>...</button>
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