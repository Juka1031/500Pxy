import { connect } from 'react-redux';
import React from 'react';
class UserImageIndex extends React.Component {


    renderImage(){
        return this.props.images.map( (image, idx) => {

          return (
           <li key={idx}>
               <img className= "user-images" src={image.imageUrl}/>
               <h5>{image.image_title}</h5>
           </li>
          );
        })
    }

    render(){

        return (
            <div>

            <ul>
                {this.renderImage()}
            </ul>


            </div>
        )
    }
}

export default UserImageIndex;