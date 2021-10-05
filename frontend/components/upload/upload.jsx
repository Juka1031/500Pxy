import React from "react";

class Upload extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            title : "",
            description :"",
            uploaderId : props.currentUser.id,
            imageFile: null,
            stage : 1,
            imageUrl : null
        }
        this.handleUpload = this.handleUpload.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleUpload(e){
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({imageFile: file, stage:2, imageUrl: fileReader.result})
        }
        if (file){
            fileReader.readAsDataURL(file)
        }
        
    }

    handleCancel(e){
        e.preventDefault();
        this.setState({stage:1})
        window.location.reload(false)
    }

    handleSubmit(e) {
        
        e.preventDefault();
            const formData = new FormData();
            formData.append("image[image_title]", this.state.title)
            formData.append("image[image_description]", this.state.description)
            formData.append("image[uploader_id]", this.state.uploaderId)
            if (this.state.imageFile) {
                formData.append("image[uploaded_image]", this.state.imageFile)
            }
            this.props.upload(formData)
            // window.location.replace(`#/users/${this.state.uploaderId}/images`)

    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    // renderErrors(){
    //     return(
    //         <ul>
    //             {this.props.errors.imageErrors.map((error,idxKey) =>(
    //                 <li className ="errors" key={`${idxKey}`}>{error}</li>
    //             ))}
    //         </ul>
    //     )
    // }

    render(){
        
            const preview = this.state.imageUrl ? <img src = {this.state.imageUrl} /> :null
            return (
                this.state.stage === 1 ?
                <div className="upload-stage1">
                    <h1 className="upload-text">Upload</h1>
                    <div className="upload-top-container">
                        
                        <img className = "upload-arrow" src={uparrow}/>
                        <h2 className="upload-images-text">Upload Images</h2>
                        <input id="upload-image" type="file" style={{ display: "none" }} onChange={this.handleUpload} className="input-file-button" accept="image/jpeg, image/png"/>
                        <label className="upload-label-button" htmlFor="upload-image"><p>Select Image</p></label>
                    </div>

                    <div className= "upload-requirement-container">
                        <p className = "upload-requirement-text"style={{fontWeight: 'bold'} }  >Image Requirements</p>
                        <p>.jpg/.png only</p>
                        <p>Max. image dimensions are 200MP/megapixels</p>
                        <p>No NSFW content</p>
                        <p>No watermarks, logos, or borders</p>
                    </div>
                </div>
                :
                <div className="stage2-container">
                    <h1>Upload</h1>
                    <form className="stage2-form">
                        <div className="preview-container">
                            <div className = "image-preview">{preview}</div>
                        </div>
                        <br/>
                        
                        <div className="stage2-right-side">
                            <div className="upload-right-container"> 
                                <label className= "upload-title-label">Title
                                    <br/>
                                    <input 
                                        type="text"
                                        value = {this.state.title}
                                        onChange = {this.update('title')}
                                        className = "upload-text-area"
                                    />
                                </label>
                                <br/>
                                <br/>
                                <label className="upload-description-label">Description
                                    <br/>

                                    <textarea 
                                    type="text"
                                    value = {this.state.description}
                                    onChange = {this.update('description')}
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
                        <button className= "upload-cancel-button" onClick={this.handleCancel}>Cancel</button>
                        <button className = "upload-button" onClick={this.handleSubmit}>Upload</button>
                        <br/>
                        <br/>
                        <br/>
                        </div>

                    </form>
                </div>
            )

            
        


    }
}
export default Upload;