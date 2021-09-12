import { connect } from 'react-redux';
import React from 'react';
class UserImageIndex extends React.Component {


    renderImage(){
        return this.props.images.map( (image, idx) => {

          return (
           <li className = "image-container" key={idx}>
               <a href=""><img className= "user-images" src={image.imageUrl}/></a>
               <a className="image-title"href="">{image.image_title}</a>
           </li>
          );
        })
    }

    render(){

        return (
            <div>

            <ul className="user-home-gallery">
                {this.renderImage()}
            </ul>


            </div>
        )
    }
}

export default UserImageIndex;