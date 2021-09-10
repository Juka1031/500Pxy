import { CLEAR_ERRORS, RECEIVE_IMAGE_ERRORS  } from "../actions/image_actions";

const imageErrorReducer =  (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_IMAGE_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};

export default imageErrorReducer