import React from 'react';
import { Link } from 'react-router-dom';
class UserGalleryIndex extends React.Component {

    

    // renderImage(){
    //     return this.props.galleries.map( (gallery, idx) => {

    //       return (
    //        <li className = "image-container" key={idx}>
    //            <a>{gallery.gallery_title}</a>
    //            <a className="image-title"href="">{gallery.gallery_title}</a>
    //        </li>
    //       );
    //     })
    // }

    render(){
        const test = this.props.galleries.length
        if (this.props.galleries.length > 0) {
            return (
                <div>
                    <h1>I have {test} galleries</h1>
                    <Link to="/galleries/create"><button>Create a Gallery</button></Link>
                <ul className="user-home-gallery">
                    {/* {this.renderGalleries()} */}
                </ul>


                </div>
            )
        }
        else {
            return(
            <div>  
                <h1>You currently have no galleries</h1>
                <Link to="/galleries/create"><button>Create a Gallery</button></Link>
            </div>
            )
        }
    }
}

export default UserGalleryIndex;