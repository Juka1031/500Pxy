import React from "react";
class ProfileEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.currentUser.username,
            firstName: this.props.xcurrentUser.firstName,
            lastName: this.props.currentUser.lastName,
            email: this.props.currentUser.email,
            id: this.props.currentUser.id
            // avatarimage
        };
        this.handleUpdate = this.handleUpdate.bind(this);
    }


    handleUpdate(e){

        e.preventDefault();
        this.props.updateUser(this.state).then(() => this.props.history.push(`/galleries/${this.state.id}`))

    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }
    render() {
        return(
            <div>
                <div className="empty-space"></div>
               <div>
                   <h1>Gallery Manager</h1>
               </div>


               <div>
                   
                    <form >
                        <div className="preview-container">
                            {/* <div className = "gallery-preview">{preview}</div> */}
                        </div>
                        <br/>
                        
                        <div className="stage2-right-side">
                        <h1>Edit Gallery</h1>

                            <div className="upload-right-container"> 
                                <label className= "upload-title-label">Title
                                    <br/>
                                    <input 
                                        type="text"
                                        value = {this.state.gallery_title}
                                        onChange = {this.update('gallery_title')}
                                        className = "upload-text-area"
                                    />
                                </label>
                                <br/>
                                <br/>
                                <label className="upload-description-label">Description
                                    <br/>

                                    <textarea 
                                    type="text"
                                    value = {this.state.gallery_description}
                                    onChange = {this.update('gallery_description')}
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

export default ProfileEdit