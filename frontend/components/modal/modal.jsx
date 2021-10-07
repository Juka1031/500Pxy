import React from "react";


import FollowModalContainer from "../follow/follow_modal_container";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.hideModal = this.hideModal.bind(this);
  }

  hideModal(e) {
    e.preventDefault();
    e.stopPropagation();
    let changed = false;
    if (!e.target.classList.contains("ignore")) {
        for (let i = 0; i < this.props.follows.length; i++) {
            let follow = this.props.follows[i]
            if(follow.removed === true){
                this.props.deleteFollow({follower_id:this.props.currentUserId, followed_id:follow.id})
                changed = true;
            }
            
        }
    this.props.closeModal()
    if(changed){
        window.location.reload(true);
    }
    }
  }

  render() {
    const { modal } = this.props;
    let component;
    if (!modal) return null;

    switch (modal) {
      case "follows":
        component = <FollowModalContainer follows={this.props.follows}/>;
        break;
      default:
        return null;
    }
    return (
      <div className="modal-background" onClick={this.hideModal}>
        {component}
      </div>
    );
  }
}

export default Modal;
