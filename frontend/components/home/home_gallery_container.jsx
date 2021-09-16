import { connect } from 'react-redux';
import { fetchGalleries } from '../../actions/gallery_action';
import HomeGallery from './home_gallery';
import { fetchUsers } from '../../actions/session_actions';

const mSTP = ({ session, entities: { users, galleries } }) => {
    return {
        galleries,
        currentUser: users[session.id],
        galleries: Object.values(galleries),
        users,
    };

    
};

const mDTP = dispatch => ({

    fetchGalleries: () => dispatch(fetchGalleries()),
    fetchUsers: () => dispatch(fetchUsers())
});
  
export default connect(mSTP,mDTP)(HomeGallery);