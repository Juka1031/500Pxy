import { RECEIVE_ALL_USERS, RECEIVE_CURRENT_USER, RECEIVE_USER,  } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case RECEIVE_ALL_USERS:
            return Object.assign({}, state, action.users)
        case RECEIVE_USER:
            return Object.assign({}, state, {[action.user.id] : action.user})
        default:
            return state;
    }
}

export default usersReducer