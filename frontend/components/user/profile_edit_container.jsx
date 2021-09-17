import React from "react";
import { connect } from "react-redux";
import { updateUser2 } from "../../actions/session_actions";
import ProfileEdit from "./profile_edit";

class ProfileEditForm extends React.Component {

    constructor(props) {
        super(props);
    }


  
    render() {
      const { currentUserId } = this.props;
      if (!currentUserId) return null;
      return (
        <ProfileEdit
            {...this.props}
          />
      );
    }
  }

const mSTP = (state, ownProps) => {
    return {

        currentUserId: state.session.id,
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = (dispatch, ownProps) => {
    return{
        updateUser: (user)=>dispatch(updateUser2(user))
    }
}

export default connect(mSTP,mDTP)(ProfileEditForm)