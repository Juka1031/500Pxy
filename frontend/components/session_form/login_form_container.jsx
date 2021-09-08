import { connect } from "react-redux";
import React from 'react';
import { login, clearErrors} from "../../actions/session_actions.js";
import LoginForm from "./login_form.jsx";

const mSTP = ({errors}) => {
    return {
        errors: errors.session,
    }
}

const mDTP = dispatch =>{
    return {
        loginForm: (user) => dispatch(login(user)),
        clearErrors: () =>dispatch(clearErrors())
    }
}

export default connect(mSTP, mDTP)(LoginForm);
