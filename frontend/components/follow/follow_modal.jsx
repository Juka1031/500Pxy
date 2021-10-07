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

    // handleFollow(follow,idx){
    //     if (event.target.id === ("unfollow"+idx)){
    //         debugger
    //         this.props.deleteFollow({follower_id:this.props.currentUserId, followed_id:follow.id})
    //         const button = document.getElementById("unfollow"+idx)
    //         button.setAttribute('id', ('follow'+idx))
    //     }else{
    //         debugger
    //         this.props.createFollow({follower_id:this.props.currentUserId, followed_id:follow.id})
    //         const button = document.getElementById("follow"+idx)
    //         button.setAttribute('id', ('unfollow'+idx))
    //     }
        
    // }

    handleFollow(follow,idx){
        if (event.target.id === ("unfollow"+idx)){
            const fol = this.props.follows[idx]
            fol.removed = true;
            const button = document.getElementById("unfollow"+idx)
            button.setAttribute('id', ('follow'+idx))
            button.innerHTML = "follow"
        }else{
            // this.props.createFollow({follower_id:this.props.currentUserId, followed_id:follow.id})
            const fol = this.props.follows[idx]
            fol.removed = false;
            const button = document.getElementById("follow"+idx)
            button.setAttribute('id', ('unfollow'+idx))
            button.innerHTML = "unfollow"
        }
        
    }




    
    renderFollows(){
        


        return this.props.follows.map ((follow, idx) => {
            const followButton = () => {
                if(true){
                    return <button id={"unfollow"+idx} className="ignore" onClick={this.handleFollow.bind(this, follow,idx)}>Unfollow</button>
                }
            }
            return(
                <li>
                    <h3 className="ignore">{follow.username} {followButton()}</h3>
                </li>
            )
        })
    }

    

    render() {
        return (
            <div>
                <div className="follow-modal ignore">
                    <ul className="ignore"> 
                        {this.renderFollows()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default FollowModal