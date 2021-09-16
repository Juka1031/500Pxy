import { connect } from 'react-redux';
import GalleryShow from './gallery_show';
import { fetchGallery } from '../../actions/gallery_action';
import { fetchUploaderImages } from '../../actions/image_actions';
import { createGalleriedImage, deleteGalleriedImage, fetchGalleriedImages } from '../../actions/galleried_image_actions';
import { fetchUsers } from '../../actions/session_actions';



const mSTP = (state, ownProps) => {
    return {
        images: Object.values(state.entities.images),
        galleriedImages: Object.values(state.entities.galleriedImage),
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
        deleteGalleriedImage: (galleriedImageId)=>dispatch(deleteGalleriedImage(galleriedImageId)),
        fetchUsers: () => dispatch(fetchUsers()),
        fetchGalleriedImages: ()=>dispatch(fetchGalleriedImages())
    }
}

export default connect (mSTP, mDTP)(GalleryShow)