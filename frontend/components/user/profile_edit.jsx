import React from "react";
class ProfileEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.currentUser.username,
            firstName: this.props.currentUser.firstName,
            lastName: this.props.currentUser.lastName,
            email: this.props.currentUser.email,
            id: this.props.currentUser.id,
            avatar: null,
            avatarUrl:null,
            coverImg:null,
            coverUrl:null

        };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleUpload = this.handleUpload.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUpload(e){
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({avatar: file, avatarUrl: fileReader.result})
        }
        if (file){
            fileReader.readAsDataURL(file)
        }
        
        
    }

    handleSubmit(e){
        e.preventDefault()
        const formData = new FormData();
            formData.append("user[id]", this.state.id)
            formData.append("user[firstName]", this.state.firstName)
            formData.append("user[lastName]", this.state.lastName)
            formData.append("user[email]", this.state.email)
            if (this.state.avatar) {
                formData.append("user[avatar]", this.state.avatar)
            }else{
            }
            this.props.updateUser(formData)
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
                   
               </div>


               <div>
                   
                    <form >
                        <div className="preview-container">
                            {/* <div className = "gallery-preview">{preview}</div> */}
                        </div>
                        <br/>
                        
                        <div className="edit-container">
                        <h1 className="edit-profile-text">Edit Profile</h1>
                        <input 
                            id="upload-image" 
                            type="file" 
                            style={{ display: "none" }} 
                            onChange={this.handleUpload} 
                            className="input-file-button" 
                            accept="image/jpeg, image/png"
                            />
                        <label className="upload-label-button2" htmlFor="upload-image"><p>Select Avatar</p></label>
                            <div className="upload-right-container"> 
                                <label className= "upload-title-label">First Name
                                    <br/>
                                    <input 
                                        type="text"
                                        value = {this.state.firstName}
                                        onChange = {this.update('firstName')}
                                        className = "upload-text-area"
                                    />
                                </label>
                                <br/>
                                <br/>
                                <label className="upload-description-label">Last Name
                                    <br/>

                                    <textarea 
                                    type="text"
                                    value={this.state.lastName}
                                    onChange= {this.update('lastName')}
                                    className = "upload-text-area2"
                                    >
                                    </textarea>
                                </label>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        {/* <button className= "delete-button" onClick={this.handleDelete}>Delete</button> */}
                        <button className = "upload-button2" onClick={this.handleSubmit}>Save Change</button>
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