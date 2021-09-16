import React from "react";

class ImageShow extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            fullscreen: false
        }
    }




    openFullscreen(){
        const ele = document.getElementById('fullscreen');


        if(this.state.fullscreen ===false){ 
            if(ele.requestFullscreen){
                ele.requestFullscreen();
                this.setState({fullscreen:true})
            }else if(ele.webkitRequestFullscreen){
                ele.webkitRequestFullscreen();
                this.setState({fullscreen:true})
            }
            
        }else if (this.state.fullscreen===true){
            if(document.exitFullscreen){
                document.exitFullscreen()
                this.setState({fullscreen:false})
            }else if(document.webkitExitFullscreen){
                document.webkitExitFullscreen();
                this.setState({fullscreen:false})
            } 
            
        }
        
    }
    routeChange(){
        window.location.replace(`#/images/${this.props.match.params.imageId}/edit`)
    }
    
 

    render(){
        const control = this.state.fullscreen ? min : max
       
        const deleteButton = this.props.uploader[this.props.image.uploader_id].id === this.props.currentUserId ?
        <button className="edit-button" onClick={this.routeChange.bind(this)}>...</button> : <div></div>
            return(
            <div>
                <div className='empty-space'></div>
                <div className="image-show-container" id='fullscreen'>
                   
                    <img className="image-show-image" src={this.props.image.imageUrl}/>
                     <img className="expand-button"onClick={this.openFullscreen.bind(this)} src={control}/>
                    
                </div>
                
                <div className="image-show-details">
                {deleteButton}
                    <div className="image-show-top">
                        <img src={avatar}/>
                        <div>
                            <h1 className="image-show-title">{this.props.image.image_title}</h1>
                            <h1 className="uploaded-by">by <span className="show-username">{this.props.uploader[this.props.image.uploader_id].username}</span></h1>
                        </div>
                       
                    
                    </div>
                    
                    
                    
                    <h1 className="uploaded-at">Uploaded: <span className="date-uploaded">{(this.props.image.created_at).slice(0,10)}</span></h1>
                    
                    <h1 className="detail-text">{this.props.image.image_description}</h1>
                </div>
            </div>
            )

    }
}

export default ImageShow