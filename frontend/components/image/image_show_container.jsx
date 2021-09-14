import { connect } from 'react-redux';
import ImageShow from './image_show';
import { fetchImage } from '../../actions/image_actions';
import { fetchUsers } from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
    return {
        image: state.entities.images[ownProps.match.params.imageId],
        uploader: state.entities.users
    }
}

const mDTP = dispatch => {
    return {
        fetchImage: imageId => dispatch(fetchImage(imageId)),
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect (mSTP, mDTP)(ImageShow)