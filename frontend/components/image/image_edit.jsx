import React from "react";
class ImageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            image_title : this.props.image.image_title,
            image_description :this.props.image.image_description,
            id: this.props.image.id
            // uploaderId : props.currentUser.id,
            // imageFile: null,
            // stage : 1,
            // imageUrl : null
        }
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteImage().then(() => this.props.history.push(`/users/${this.props.currentUserId}/images`));
    }
    handleUpdate(e){

        e.preventDefault();
        // const formData = new FormData();
        // formData.append("image[image_title]", this.state.title)
        // formData.append("image[image_description]", this.state.description)
        this.props.updateImage(this.state)
        this.props.history.push(`#/images/${this.state.id}`)

    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }
    render() {
        return(
            <div>
                <div className="empty-space"></div>
               <div>
                   <h1>Image Manager</h1>
               </div>

               <div>
                    <img className="image-edit-preview" src={this.props.image.imageUrl}  />
               </div>

               <div>
                   
                    <form >
                        <div className="preview-container">
                            {/* <div className = "image-preview">{preview}</div> */}
                        </div>
                        <br/>
                        
                        <div className="stage2-right-side">
                        <h1>Edit Image</h1>

                            <div className="upload-right-container"> 
                                <label className= "upload-title-label">Title
                                    <br/>
                                    <input 
                                        type="text"
                                        value = {this.state.image_title}
                                        onChange = {this.update('image_title')}
                                        className = "upload-text-area"
                                    />
                                </label>
                                <br/>
                                <br/>
                                <label className="upload-description-label">Description
                                    <br/>

                                    <textarea 
                                    type="text"
                                    value = {this.state.image_description}
                                    onChange = {this.update('image_description')}
                                    placeholder = "e.g. Fantasy night sky riddled with stars as a comet passes by"
                                    className = "upload-text-area2"
                                    cols="30" 
                                    rows="10">
                                    </textarea>
                                </label>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <button className= "delete-button" onClick={this.handleDelete}>Delete</button>
                        <button className = "upload-button" onClick={this.handleUpdate}>Save Change</button>
                        <br/>
                        <br/>
                        <br/>
                        </div>

                    </form>

               </div>
            </div>
        )
    }


}

export default ImageForm