import { 
    RECIEVE_GALLERIES,
    RECEIVE_GALLERY,
    REMOVE_GALLERY
} from "../actions/gallery_action";

const galleriesReducer = (state = {}, action) => {
    Object.freeze(state);
  
    switch (action.type) {
        case RECIEVE_GALLERIES:
            // return Object.assign({}, state, action.galleries)
            return action.galleries;
        case RECEIVE_GALLERY:
            return Object.assign({}, state, { [action.gallery.id]: action.gallery })
        case REMOVE_GALLERY:
            let nextState = Object.assign({}, state);
            delete nextState[action.galleryId]
            return nextState;
        default:
            return state;
    }
};
  
export default galleriesReducer;