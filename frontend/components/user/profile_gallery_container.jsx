import { connect } from 'react-redux';
import { fetchOwnerGalleries } from '../../actions/gallery_action';
import { fetchUploaderImages } from '../../actions/image_actions';
import ProfileGallery from './profile_gallery';


const mSTP = (state, ownProps) => {
    return {
        images: Object.values(state.entities.images),
        galleries: Object.values(state.entities.galleries),
        user: state.entities.users[ownProps.match.params.userId],
        currentUserId: state.session.id, //redundant cause we have user
    }
};

const mDTP = dispatch =>{
    return {
        fetchUploaderImages: (uploaderId)=>dispatch(fetchUploaderImages(uploaderId)),
        fetchOwnerGalleries : (galleryOwnerId) => dispatch(fetchOwnerGalleries(galleryOwnerId))

    }
}



export default connect(mSTP, mDTP)(ProfileGallery);