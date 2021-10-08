import React from 'react';


class FollowModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden : true
        }
        this.renderFollows.bind(this)
        
    }

    componentDidMount(){
        this.props.fetchUsers()
    }



    handleFollow(follow,idx){
        if (event.target.id === ("unfollow"+idx)){
            const fol = this.props.follows[idx]
            fol.removed = true;
            const button = document.getElementById("unfollow"+idx)
            button.setAttribute('id', ('follow'+idx))
            button.innerHTML = "Follow"
        }else{
            // this.props.createFollow({follower_id:this.props.currentUserId, followed_id:follow.id})
            const fol = this.props.follows[idx]
            fol.removed = false;
            const button = document.getElementById("follow"+idx)
            button.setAttribute('id', ('unfollow'+idx))
            button.innerHTML = "Unfollow"
        }
        
    }




    
    renderFollows(){
        let defaultAva = avatar2
        return this.props.follows.map((follow, idx) => {
            const followButton = () => {
                if(true){
                    const avatar = (this.props.users[follow.id].avatar) ?
                    <img className="follow-list-ava ignore" src={this.props.users[follow.id].avatar}/> :
                    <img className="follow-list-ava ignore" src={defaultAva}/>
                    return(
                        <div className="follow-list-item ignore">
                            <div className="left-side-follow ignore">{avatar}<span className="follow-list-name ignore">{follow.username}</span></div><button id={"unfollow"+idx} className="index-follow-button ignore" onClick={this.handleFollow.bind(this, follow,idx)}>Unfollow</button>
                        </div>
                    )
                }
            }
            return(
                    <li key={idx}>
                        <div className="each-follow ignore">{followButton()}</div>
                    </li>
            )
        }, this)
    }

    

    render() {
    
        return (
            <div>
                <div className="follow-modal ignore">
                <h2 className="follow-header ignore">Following {this.props.follows.length}</h2>
                    <ul className="follow-list ignore"> 
                        {this.renderFollows()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default FollowModal