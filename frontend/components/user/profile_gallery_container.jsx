import { connect } from 'react-redux';
import { fetchOwnerGalleries } from '../../actions/gallery_action';
import ProfileGallery from './profile_gallery';


const mSTP = (state, ownProps) => {
    return {
        galleries: Object.values(state.entities.galleries),
        user: state.entities.users[ownProps.match.params.userId],
        currentUserId: state.session.id, //redundant cause we have user
    }
};

const mDTP = dispatch =>{
    return {
        fetchOwnerGalleries : (galleryOwnerId) => dispatch(fetchOwnerGalleries(galleryOwnerId))

    }
}



export default connect(mSTP, mDTP)(ProfileGallery);