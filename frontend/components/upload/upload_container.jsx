import { connect } from 'react-redux';
import { createImage, clearErrors } from '../../actions/image_actions';
import Upload from './upload';

const mSTP = ( { entities: {users}, session}) => {
    return {
        // errors,
        session,
        currentUser: users[session.id]
    };
  };

  const mDTP = dispatch => ({
    upload: (image) => dispatch(createImage(image)),
    clearErrors: () =>dispatch(clearErrors())
  });
  
  export default connect(mSTP,mDTP)(Upload);
  