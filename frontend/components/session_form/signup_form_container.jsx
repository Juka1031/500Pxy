import { connect } from "react-redux";
import React from 'react';
import { signup, clearErrors } from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        
    }
}

const mDTP = dispatch => {
    return {
        signupForm: (user) => dispatch(signup(user)),
        clearErrors: () =>dispatch(clearErrors())
    }
}

export default connect(mSTP, mDTP)(SignupForm)

