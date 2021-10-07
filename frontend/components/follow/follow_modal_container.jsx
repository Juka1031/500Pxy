import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/session_actions';
import FollowModal from './follow_modal';
import { deleteFollow, createFollow } from '../../actions/follow_actions';
const mSTP = (state) => {
    return {
        users: state.entities.users,
        currentUserId: state.session.id
    };
}

const mDTP = dispatch => ({
    fetchUsers: ()=> dispatch(fetchUsers()),
    deleteFollow: follow => dispatch(deleteFollow(follow)),
    createFollow: follow => dispatch(createFollow(follow))
})

export default connect(mSTP, mDTP)(FollowModal);