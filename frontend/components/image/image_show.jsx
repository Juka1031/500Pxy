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
        let featured = this.props.images.sort(() => 0.5 - Math.random()).slice(0,3)
        featured = featured.map( (image, idx) => {
            return (
            <li className = "featured-image-cont" key={idx}>
                <a href={`#/images/${image.id}`}><img className= "user-images-featured" src={image.imageUrl} loading="lazy"/></a>
                <a className="image-title"href={`#/images/${image.id}`}>{image.image_title}</a>
                <div><h3>{image.image_title} </h3></div>
            </li>
            )
        })
        const deleteButton = this.props.uploader[this.props.image.uploader_id].id === this.props.currentUserId ?
        <button className="edit-button" onClick={this.routeChange.bind(this)}>...</button> : <div></div>
            return(
            <div>
                <div className='empty-space'></div>
                <div className="image-show-container" id='fullscreen'>
                   
                    <img className="image-show-image" src={this.props.image.imageUrl}/>
                     <img className="expand-button"onClick={this.openFullscreen.bind(this)} src={control}/>
                    
                </div>
                <div className="image-show-bottom">
                    <div className="image-show-details">
                        <div className="button-container"><img className="follow-heart"src={heart2}/>{deleteButton}</div>
                    
                        <div className="image-show-top">
                            <img src={avatar}/>
                            <div>
                                <h1 className="image-show-title">{this.props.image.image_title}</h1>
                                <h1 className="uploaded-by">by <span className="show-username">{this.props.uploader[this.props.image.uploader_id].username}</span></h1>
                            </div>
                        
                        
                        </div>
                        
                        
                        <div>
                            <h1 className="uploaded-at">Uploaded: <span className="date-uploaded">{(this.props.image.created_at).slice(0,10)}</span></h1>
                            
                            <h1 className="detail-text">{this.props.image.image_description}</h1>
                        </div>

                        <div>
                            <h1 className="show-featured-image-text"> Featured Images</h1>
                            <div className="featured-cont">
                                <ul className="featured-image-container">
                                    {featured}
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="comment-box">
                        <div>
                            <h1 className="coming-soon">Comments coming soon</h1>
                            <input className="comment-input"type="text" placeholder="Add a comment" />
                        </div>
                    </div>

                    <div>

                    </div>
                </div>
               
            </div>
            )

    }
}

export default ImageShow