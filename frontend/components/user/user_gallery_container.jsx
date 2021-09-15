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

    render(){
        const test = this.props.galleries.length
        if (this.props.galleries.length > 0) {
            return (
                <div>
                    <h1>I have {test} galleries</h1>
                    <Link to="/create/gallery"><button>Create a Gallery</button></Link>
                <ul className="user-home-gallery">
                    {this.renderGalleries()}
                </ul>


                </div>
            )
        }
        else {
            return(
            <div>  
                <h1>You currently have no galleries</h1>
                <Link to="/create/gallery"><button>Create a Gallery</button></Link>
            </div>
            )
        }
    }
}

export default UserGalleryIndex;