import { connect } from 'react-redux';
import { createFollow } from '../../actions/follow_actions';
import FollowClick from './follow';

const mSTP = (state, ownProps) => {
    return ({
        follow: {
            follower_id: "",
            followed_id: ""
        }
    })
}

const mDTP = dispatch => ({
    createFollow: (follow) => dispatch(createFollow(follow))
})

export default connect(mSTP, mDTP)(FollowClick);