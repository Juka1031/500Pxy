import React from "react";

class ImageShow extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            fullscreen: false
        }
    }

    componentDidMount(){
        this.props.fetchImage(this.props.match.params.imageId)
        this.props.fetchUsers()
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
    
    render(){
        const control = this.state.fullscreen ? min : max
        if(this.props.image && this.props.uploader && this.props.image.created_at && this.props.uploader[this.props.image.uploader_id-1])
        
         {
            return(
            <div>
                <div className='empty-space'></div>
                <div className="image-show-container" id='fullscreen'>
                   
                    <img className="image-show-image" src={this.props.image.imageUrl}/>
                     <img className="expand-button"onClick={this.openFullscreen.bind(this)} src={control}/>
                    
                </div>
                
                <div className="image-show-details">
                    
                    <h1>{this.props.uploader[this.props.image.uploader_id-1].username}</h1>
                    <h1>Uploaded: {(this.props.image.created_at).slice(0,10)}</h1>
                    <h1>{this.props.image.image_description}</h1>
                </div>
            </div>
            )
        }
        else {
            return(
            null
            )
        }
    }
}

export default ImageShow