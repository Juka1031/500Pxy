import * as FollowAPIUtil from '../utils/follow_api_util';

export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

export const receiveFollows = follows => ({
    type: RECEIVE_FOLLOWS,
    follows
});

export const receiveFollow = follow => ({
    type: RECEIVE_FOLLOW,
    follow
});

export const removeFollow = followId => ({
    type: REMOVE_FOLLOW,
    followId
});

export const fetchFollows = () => dispatch => (
    FollowAPIUtil.fetchFollows()
    .then(follows => dispatch(receiveFollows(follows)))
);

export const createFollow = follow => dispatch => (
    FollowAPIUtil.createFollow(follow)
    
    .then(follow => 
        {
             dispatch(receiveFollow(follow))})
);

export const deleteFollow = follow => dispatch => (
    FollowAPIUtil.deleteFollow(follow)
    .then(() => dispatch(removeFollow(follow)))
);