import { connect } from 'react-redux';
import ImageShow from './image_show';
import { fetchImage } from '../../actions/image_actions';

const mSTP = (state, ownProps) => {
    // debugger
    return {
        image: state.entities.images[ownProps.match.params.imageId],
        uploader: state.entities.users
    }
}

const mDTP = dispatch => {
    return {
        fetchImage: imageId => dispatch(fetchImage(imageId))
    }
}

export default connect (mSTP, mDTP)(ImageShow)