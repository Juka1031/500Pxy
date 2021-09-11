import { connect } from 'react-redux';
import { fetchUploaderImages } from '../../actions/image_actions';
import Profile from './profile';


const mSTP = (state, ownProps) => {
    return {
        images: Object.values(state.entities.images),
        user: state.entities.users[ownProps.match.params.userId],
        currentUserId: state.session.id, //redundant cause we have user
    }
};

const mDTP = dispatch =>{
    return {
        fetchUploaderImages: (uploaderId)=>dispatch(fetchUploaderImages(uploaderId))
    }
}


export default connect(mSTP, mDTP)(Profile);