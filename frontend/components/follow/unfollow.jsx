import React from 'react';

class Unfollow extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.unfollow;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.deleteFollow({ follower_id: this.props.follower_id, followed_id: this.props.followed_id});
    }

    render() {
        return (
            <button className="un-follow-button" onClick={this.handleSubmit}>Following</button>
        )
    }
}

export default Unfollow