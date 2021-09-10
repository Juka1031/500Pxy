import { combineReducers } from "redux";
import imagesReducer from "./image_reducer";

import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    images : imagesReducer
})

export default entitiesReducer;