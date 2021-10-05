import React from 'react';

class Follow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            following : false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.createFollow({ follower_id: this.props.follower_id, followed_id: this.props.followed_id});
        this.setState({following:true})
    }

    render() {
        return (
            <button className="follow-button" onClick={this.handleSubmit}>Follow</button>
        )
    }
}

export default Follow