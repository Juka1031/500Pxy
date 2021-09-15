import { connect } from 'react-redux';
import { createGallery } from '../../actions/gallery_action';
import GalleryForm from './gallery_form';


const mSTP = ( { entities: {users}, session}) => {
    return {
        // errors,
        session,
        currentUser: users[session.id],
    };
  };

  const mDTP = dispatch => ({
      
    createGallery: (gallery) => dispatch(createGallery(gallery)),
    

  });
  
  export default connect(mSTP,mDTP)(GalleryForm);
  