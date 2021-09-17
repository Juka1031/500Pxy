import React from 'react';
import { Link } from 'react-router-dom';
class UserGalleryIndex extends React.Component {

    

    renderGalleries(){
        return this.props.galleries.map( (gallery, idx) => {
        let thumbnail
        let gallerylink = `#/galleries/${gallery.id}`
        gallery.images.length>0 ? thumbnail = gallery.images[0].imageUrl: thumbnail = default_thumb
        return (
            
           <li className = "image-container" key={idx}>
               <a className="image-title" href={gallerylink}>{gallery.gallery_title}</a>
               <a href={gallerylink}><img src={thumbnail} className="gallery-thumbnail" /></a>
           </li>
          );
        })
    }
    com

    render(){
        const test = this.props.galleries.length
        if (this.props.galleries.length > 0) {
            return (
                <div>
                    
                    
                    <ul className="user-home-gallery">
                        <li className="create-gallery-div">
                            <div ><Link to="/create/gallery">
                                <img className="curate-image" src={curate}/><br/>
                                <span className="curate-message">Curate images using Galleries</span>
                                <button className="create-button-gallery">Create a Gallery</button></Link>
                                
                            </div></li>
                        {this.renderGalleries()}
                    </ul>


                </div>
            )
        }
        else {
            return(
            <div>  
                <h1 className="no-galleries">You currently have no galleries</h1>
                <div className="create-gallery-div">
                            <div ><Link to="/create/gallery">
                                <img className="curate-image" src={curate}/><br/>
                                <span className="curate-message">Curate images using Galleries</span>
                                <button className="create-button-gallery">Create a Gallery</button></Link>
                                
                            </div></div>
            </div>
            )
        }
    }
}

export default UserGalleryIndex;