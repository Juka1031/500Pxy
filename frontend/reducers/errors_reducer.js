import { combineReducers } from "redux";
import imageErrorReducer from "./image_error_reducer";

import sessionErrorsReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    // imageErrors: imageErrorReducer
})

export default errorsReducer;