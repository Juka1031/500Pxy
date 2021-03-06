import { connect } from 'react-redux';
import { fetchUploaderImages } from '../../actions/image_actions';
import { fetchOwnerGalleries } from '../../actions/gallery_action';
import { openModal } from '../../actions/modal_actions';
import Profile from './profile';
import { fetchUsers } from '../../actions/session_actions';


const mSTP = (state, ownProps) => {
    return {
        images: Object.values(state.entities.images),
        galleries: Object.values(state.entities.galleries),
        user: state.entities.users[ownProps.match.params.userId],
        currentUserId: state.session.id,
        currentPageUserId: ownProps.match.params.userId,
        currentUser: state.entities.users[state.session.id]
    }
};

const mDTP = dispatch =>{
    return {

        fetchOwnerGalleries : (galleryOwnerId) => dispatch(fetchOwnerGalleries(galleryOwnerId)),
        fetchUploaderImages: (uploaderId)=>dispatch(fetchUploaderImages(uploaderId)),
        fetchUsers: ()=> dispatch(fetchUsers()),
        openModal: (modal)=> dispatch(openModal(modal))
    }
}


export default connect(mSTP, mDTP)(Profile);