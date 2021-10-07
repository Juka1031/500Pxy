import {
    RECEIVE_ALL_IMAGES,
    RECEIVE_ALL_USER_IMAGES,
    RECEIVE_IMAGE,
    REMOVE_IMAGE
} from "../actions/image_actions"

const imagesReducer = (state = {}, action) => {
    Object.freeze(state);
  
    switch (action.type) {
        case RECEIVE_ALL_IMAGES:
            return Object.assign({}, state, action.images)
        case RECEIVE_ALL_USER_IMAGES:
            return Object.assign({}, action.images)
        case RECEIVE_IMAGE:
            return Object.assign({}, state, { [action.image.id]: action.image })
        case REMOVE_IMAGE:
            let nextState = Object.assign({}, state);
            delete nextState[action.imageId]
            return nextState;
        default:
            return state;
    }
};
  
export default imagesReducer;
  