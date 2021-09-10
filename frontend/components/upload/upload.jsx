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

                    <h1>Upload</h1>
                    <br />
                    <br />
                    <br />
                    <br />
                    <img className = "upload-arrow" src={uparrow}/>
                    <h1 className="upload-images-text">Upload Images</h1>
                    <input id="upload-image" type="file" style={{ display: "none" }} onChange={this.handleUpload} className="input-file-button" accept="image/jpeg, image/png"/>
                    <label className="upload-label-button" htmlFor="upload-image">Select Image</label>
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
                    {/* <span className="error-messages">{this.renderErrors()}</span> */}
                        {preview}
                        <br/>
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