import React from "react";
import { Redirect } from "react-router-dom";

class GalleryForm extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            title : "",
            description :"",
            galleryOwnerId : props.currentUser.id,
        }
        this.handleCancel = this.handleCancel.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleCancel(e){
        e.preventDefault();
        const url = this.props.currentUser.id
        window.location.replace(`#/users/${url}/galleries`)
    }

    handleSubmit(e) {
        const formData = new FormData();
        formData.append("gallery[gallery_title]", this.state.title)
        formData.append("gallery[gallery_description]", this.state.description)
        formData.append("gallery[gallery_owner_id]", this.state.galleryOwnerId)
        this.props.createGallery(formData)
        //needs to redirect to said galleries showpage
        window.location.replace(`#/users/${this.state.galleryOwnerId}/galleries`)
    }

    render(){
        return(
            <div className="create-gallery-container">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="create-gallery-form-container">
                <form >
                    <label className= "create-gallery-label">Title
                        <br/>
                        <input 
                            type="text"
                            value = {this.state.title}
                            onChange = {this.update('title')}
                            className = "create-gallery-text-area"
                        />
                    </label>
                    <br/>
                    <br/>
                    <label className="create-gallery-label">Description
                        <br/>

                        <textarea 
                        type="text"
                        value = {this.state.description}
                        onChange = {this.update('description')}
                        cols="30" 
                        rows="10">
                        </textarea>
                    </label>

                    <br/>
                    <br/>
                    <br/>
                    <button className= "upload-cancel-button" onClick={this.handleCancel}>Cancel</button>
                    <button className = "upload-button" onClick={this.handleSubmit}>Create</button>
                    <br/>
                    <br/>
                    <br/>


                </form>
            </div>
        </div>
        )
    }
}

export default GalleryForm