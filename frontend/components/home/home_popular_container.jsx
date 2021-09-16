import { connect } from 'react-redux';
import { fetchImages } from '../../actions/image_actions';
import HomePopular from './home_popular';
import { fetchUsers } from '../../actions/session_actions';

const mSTP = ({ session, entities: { users, images } }) => {
    return {
        images,
        currentUser: users[session.id],
        images: Object.values(images),
        users,
    };

    
};

const mDTP = dispatch => ({

    fetchImages: () => dispatch(fetchImages()),
    fetchUsers: () => dispatch(fetchUsers())
});
  
export default connect(mSTP,mDTP)(HomePopular);