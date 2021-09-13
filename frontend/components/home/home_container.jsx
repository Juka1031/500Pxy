import { connect } from 'react-redux';
import { fetchUsers, logout } from '../../actions/session_actions';
import Home from './home';

const mSTP = ({ session, entities: { users } }) => {
    return {
        users,
      currentUser: users[session.id]
    };
  };

  const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchUsers: () => dispatch(fetchUsers())
  });
  
  export default connect(mSTP,mDTP)(Home);
  