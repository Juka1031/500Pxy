import React from 'react';
import { Redirect } from 'react-router-dom';

class HomeGallery extends React.Component {



    componentDidMount(){
        this.props.fetchGalleries();
    }

    renderGalleries(){

    }



    render(){
        return(
            <div>
                <br />
                <br />
                <br />
                <br />
                <h1>THIS IS THE GALLERY HOME PAGE</h1>
            </div>
        )
    }
}
export default HomeGallery