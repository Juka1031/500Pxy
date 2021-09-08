import { connect } from 'react-redux';
import { updateUser, clearErrors } from '../../actions/session_actions';
import Onboarding from './onboarding';

const mSTP = ({ session, entities: { users } }) => {
    // debugger
    return {
        users,
      currentUser: users[session.id]
      
    };
  };
  const mDTP = dispatch => ({
    updateUser: (user) => dispatch(updateUser(user)),
    clearErrors: () =>dispatch(clearErrors())
  });
  
  export default connect(mSTP,mDTP)(Onboarding);
  