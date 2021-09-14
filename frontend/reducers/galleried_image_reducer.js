import { 
    RECEIVE_GALLERIED_IMAGE,
    REMOVE_GALLERIED_IMAGE 
} from "../actions/galleried_image_actions";


const galleriedImageReducer = (state = {}, action) => {
    Object.freeze(state);
  
    switch (action.type) {
        // case RECIEVE_GALLERIES:
        //     return Object.assign({}, state, action.galleriedImages)
            
        case RECEIVE_GALLERIED_IMAGE:
            return Object.assign({}, state, { [action.galleriedImage.id]: action.galleriedImage })
        case REMOVE_GALLERIED_IMAGE:
            let nextState = Object.assign({}, state);
            delete nextState[action.galleriedImageId]
            return nextState;
        default:
            return state;
    }
};
  
export default galleriedImageReducer;