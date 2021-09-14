import { connect } from 'react-redux';
import GalleryShow from './gallery_show';
import { fetchGallery } from '../../actions/gallery_action';
import { fetchUploaderImages } from '../../actions/image_actions';
import { createGalleriedImage } from '../../actions/galleried_image_actions';
import { fetchUsers } from '../../actions/session_actions';



const mSTP = (state, ownProps) => {
    return {
        images: Object.values(state.entities.images),

        currentUserId: state.session.id, 
        gallery: state.entities.galleries[ownProps.match.params.galleryId],
        galleryOwner: state.entities.users, //all users
    }
}

const mDTP = dispatch => {
    return {
        fetchGallery: galleryId => dispatch(fetchGallery(galleryId)),
        fetchUploaderImages: (uploaderId)=>dispatch(fetchUploaderImages(uploaderId)),
        createGalleriedImage: (galleriedImage)=>dispatch(createGalleriedImage(galleriedImage)),
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect (mSTP, mDTP)(GalleryShow)