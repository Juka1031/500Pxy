import { connect } from 'react-redux';
import { deleteFollow } from '../../actions/follow_actions';
import Unfollow from './unfollow';

const mSTP = (state, ownProps) => {
    return ({
        follow: {
            follower_id: "",
            followed_id: ""
        }
    })
}

const mDTP = dispatch => ({
    deleteFollow: (follow) => dispatch(deleteFollow(follow))
})

export default connect(mSTP, mDTP)(Unfollow);