import React from "react";

class Upload extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            title : "",
            description :"",
            uploaderId : props.currentUser.id,
            imageFile: null,
            stage : 2
        }
        this.handleUpload = this.handleUpload.bind(this)
    }

    handleUpload(e){
        this.setState({imageFile: e.currentTarget.files[0], stage:2})
    }

    handleSubmit(e) {
        e.preventDefault();
            const formData = new FormData();
            formData.append("image[title]", this.state.title)
            formData.append("image[description]", this.state.description)
            formData.append("image[ownerId]", this.state.uploaderId)
            formData.append("image[photo]", this.state.imageFile)

    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    renderErrors(){
        return(
            <ul>
                {this.props.errors.imageErrors.map((error,idxKey) =>(
                    <li className ="errors" key={`${idxKey}`}>{error}</li>
                ))}
            </ul>
        )
    }

    render(){
        
    
            return (
                this.state.stage === 1 ?
                <div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1>Upload Images</h1>
                    <input id="upload-image" type="file" style={{ display: "none" }} onChange={this.handleUpload} className="input-file-button" accept="image/jpeg, image/png"/>
                    <label htmlFor="upload-image">Select Image</label>
                </div>
                :
                <div>
                    <br/>
                        <br/>
                        <br/><br/>
                        <br/>
                        <br/><br/>
                        <br/>
                        <br/>
                    <form>
                    <span className="error-messages">{this.renderErrors()}</span>
                        <label>Title
                            <br/>
                            <input 
                                type="text"
                                value = {this.state.title}
                                onChange = {this.update('title')}
                            />
                        </label>
                        <br/>
                        <br/>
                        <label>Description
                            <br/>
                            
                            <input 
                                type="text"
                                value = {this.state.description}
                                onChange = {this.update('description')}
                                placeholder = "e.g. Fantasy night sky riddled with stars as a comet passes by"
                            />
                        </label>
                        <br/>
                        <br/>
                        <br/>
                        <button className = "upload-button" onClick={this.handleSubmit}>Upload</button>
                        <br/>
                        <br/>
                        <br/>

                    </form>
                </div>
            )

            
        


    }
}
export default Upload;