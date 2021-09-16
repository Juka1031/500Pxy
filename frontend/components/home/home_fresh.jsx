import React from 'react';
import UserImageIndex from '../user/user_image_container';

class HomeFresh extends React.Component {



    componentDidMount(){
        this.props.fetchUsers()
        .then(()=>{
            this.props.fetchImages();
        })
    }

    // renderImages(){
    //     return this.props.images.map( (gallery, idx) => {
    //     let thumbnail
    //     let imagelink = `#/images/${gallery.id}`
    //     gallery.images.length>0 ? thumbnail = gallery.images[0].imageUrl: thumbnail = default_thumb
    //     return (
            
    //        <li className = "gallery-home-container" key={idx}>
    //             <a className="image-title" href={imagelink}>{gallery.gallery_title}</a>
    //             <a href={imagelink}><img src={thumbnail} className="gallery-thumbnail" /></a>
    //             <div className="gallery-home-description">
    //                 {gallery.gallery_title}
    //                 <p className="curated-by"><span className="curated-by">Curated by</span>{this.props.users[gallery.gallery_owner_id].username}</p>
    //             </div>
    //        </li>
    //       );
    //     })
    // }





    render(){
        return(
            <div>
                <div className="empty-space"></div>
                <div className="top-message">
                    <h1 className="featured-galleries-text">The newest uploads</h1>
                    <h3 className="browse-galleries-text">Be one of the first to discover the photos just added to 500pxy.</h3>
                </div>
                <div className="home-links">
                    <span className="home-link-text"><a href="#/popular" className="home-visited">POPULAR</a></span>
                    {/* <span className="home-link-text2"><a className="home-visited">UPCOMING</a></span> */}
                    <span className="home-link-text-active"><a href="#/fresh"className="home-visited">FRESH</a></span>
                    <span className="home-link-text"><a href="#/galleries" className="home-visited">GALLERIES</a></span>
                </div>
                <div className="home-gallery-container">
                    <ul className="user-home-gallery-2">
                        <UserImageIndex
                        currentUser ={this.props.user}  
                        images = {this.props.images}
                        gallery = "fresh"

                        />
                    </ul>
                </div>
            </div>
        )
    }
}
export default HomeFresh