import { connect } from 'react-redux';
import { fetchGalleries } from '../../actions/gallery_action';
import HomeGallery from './home_gallery';

const mSTP = ({ session, entities: { users, galleries } }) => {
    return {
        galleries,
      currentUser: users[session.id],
      galleries: Object.values(galleries),
    };

    
};

const mDTP = dispatch => ({

    fetchGalleries: () => dispatch(fetchGalleries())
});
  
export default connect(mSTP,mDTP)(HomeGallery);