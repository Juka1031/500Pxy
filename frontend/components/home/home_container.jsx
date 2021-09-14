import { connect } from 'react-redux';
import { fetchImages } from '../../actions/image_actions';
import { fetchUsers, logout } from '../../actions/session_actions';
import Home from './home';

const mSTP = ({ session, entities: { users, images } }) => {
    return {
        users,
      currentUser: users[session.id],
      images: Object.values(images),
    };
  };

  const mDTP = dispatch => ({
    logout: () => dispatch(logout()),

    fetchImages: () => dispatch(fetchImages())
  });
  
  export default connect(mSTP,mDTP)(Home);
  