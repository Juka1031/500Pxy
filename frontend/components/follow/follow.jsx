import React from 'react';

class Follow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            following : this.props.following,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
            formData.append("follow[follower_id]", this.props.currentUserId)
            formData.append("follow[followed_id]", this.props.imageUploaderId)
        this.props.createFollow(formData)
        this.setState({following:true})
    }

    render() {
        return (
            <button className="follow-button" onClick={this.handleSubmit}>Follow</button>
        )
    }
}

export default Follow