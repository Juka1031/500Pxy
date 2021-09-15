import React from 'react';
class UserImageIndex extends React.Component {

    constructor(props){
        super(props)
        this.addImageToGallery = this.addImageToGallery.bind(this)
        
        
    }

    addImageToGallery(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append("galleriedimage[gallery_id]", this.props.galleryId.id)
        formData.append("galleriedimage[gallery_image_id]", e.currentTarget.id)
        this.props.createGalleriedImage(formData)
        setTimeout(function () {
            window.location.reload(false)
          }, 1)
        
    }

    renderImage(){
        if(this.props.gallery ==="true"){
            const galleriedImages = this.props.galleryId.images.map(x => x.id)
            const allImages = this.props.images.map(x=>x.id);
            const unique = allImages.filter(val=>!galleriedImages.includes(val))
            this.createGalleriedImage = this.props.createGalleriedImage.bind(this)
            let newarr = this.props.images.filter(image => unique.includes(image.id))
            return newarr.map( (image, idx) => {
                return (
                <li className = "image-container" key={idx}>
                    
                    <a id={image.id} onClick={this.addImageToGallery} className="user-index-images"><img className= "user-images" src={image.imageUrl}/></a>
                    <a className="image-title">{image.image_title}</a>
                </li>
                );
            })

            // return this.props.images.map( (image, idx) => {

            //     return (
            //     <li className = "image-container" key={idx}>
                    
            //         <a id={image.id} onClick={this.addImageToGallery} className="user-index-images"><img className= "user-images" src={image.imageUrl}/></a>
            //         <a className="image-title">{image.image_title}</a>
            //     </li>
            //     );
            // })
        }else if(this.props.gallery ==="home"){
            return this.props.images.map( (image, idx) => {
                
                return (
                <li className = "image-container" key={idx}>
                    <a href={`#/images/${image.id}`}><img className= "user-images" src={image.imageUrl} loading="lazy"/></a>
                    <a className="image-title"href={`#/images/${image.id}`}>{image.image_title}</a>
                </li>
                );
            }).sort(() => Math.random() - 0.5);
        }else {
            return this.props.images.map( (image, idx) => {

                return (
                <li className = "image-container" key={idx}>
                    <a href={`#/images/${image.id}`}><img className= "user-images" src={image.imageUrl}/></a>
                    <a className="image-title"href={`#/images/${image.id}`}>{image.image_title}</a>
                </li>
                );
            })
        }
    }
    redirectUpload(){
        window.location.replace('#/upload')
    }

    render(){
        if (this.props.images.length > 0) {
            return (
                <div className="image-index">

                    <ul className="user-home-gallery">
                        {this.renderImage()}
                    </ul>


                </div>
            )
        }
        else {
            return(
            <div>  
                <h1>You currently have no photos</h1>
                <button onClick={this.redirectUpload.bind(this)}>Upload photos</button>
            </div>
            )
        }
    }
}

export default UserImageIndex;