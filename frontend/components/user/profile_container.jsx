import { connect } from 'react-redux';
import { fetchUploaderImages } from '../../actions/image_actions';
import { fetchOwnerGalleries } from '../../actions/gallery_action';
import Profile from './profile';
import { fetchUsers } from '../../actions/session_actions';


const mSTP = (state, ownProps) => {
    return {
        images: Object.values(state.entities.images),
        galleries: Object.values(state.entities.galleries),
        user: state.entities.users[ownProps.match.params.userId-1],
        currentUserId: state.session.id, //not current user but userid of params
        currentPageUserId: ownProps.match.params.userId
    }
};

const mDTP = dispatch =>{
    return {
        fetchUploaderImages: (uploaderId)=>dispatch(fetchUploaderImages(uploaderId)),
        fetchOwnerGalleries : (galleryOwnerId) => dispatch(fetchOwnerGalleries(galleryOwnerId)),
        fetchUsers: ()=> dispatch(fetchUsers())
    }
}


export default connect(mSTP, mDTP)(Profile);