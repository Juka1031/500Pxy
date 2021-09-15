import {
    RECEIVE_USERS,
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
    RECEIVE_USER,
} from "../actions/session_actions";

const _nullSession = Object.freeze({
    id: null
});

const sessionReducer = (state = _nullSession, action) => {

    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_USERS:
            return ({}, state, action.users)
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {id: action.user.id})
        // return { id: action.user.id };
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        case RECEIVE_USER:
            return Object.assign({}, state, { [action.user.id]: action.user })
        default:
            return state;
    }
};
  
  export default sessionReducer;
  