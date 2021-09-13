import { connect } from 'react-redux';
import GalleryShow from './gallery_show';
import { fetchGallery } from '../../actions/gallery_action';


const mSTP = (state, ownProps) => {
    return {
        gallery: state.entities.galleries[ownProps.match.params.galleryId],
        galleryOwner: state.entities.users
    }
}

const mDTP = dispatch => {
    return {
        fetchGallery: galleryId => dispatch(fetchGallery(galleryId))
    }
}

export default connect (mSTP, mDTP)(GalleryShow)