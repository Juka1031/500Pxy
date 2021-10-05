import { combineReducers } from "redux";
import galleriesReducer from "./gallery_reducer";
import imagesReducer from "./image_reducer";
import galleriedImageReducer from "./galleried_image_reducer";
import followsReducer from "./follows_reducer"

import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    follows: followsReducer,
    images : imagesReducer,
    galleries : galleriesReducer,
    galleriedImage :galleriedImageReducer
})

export default entitiesReducer;