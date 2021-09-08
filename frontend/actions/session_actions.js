
import * as SessionAPIUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_USER = 'RECEIVE_USER'



export const signup = user => dispatch => (
    SessionAPIUtil.signup(user)
    .then(user => (dispatch({type: RECEIVE_CURRENT_USER, user})),
    errors => (dispatch({type: RECEIVE_SESSION_ERRORS, errors:errors.responseJSON})))
);
  
export const login = user => dispatch => (
    SessionAPIUtil.login(user)
    .then(user => (dispatch({type: RECEIVE_CURRENT_USER, user})),
    errors => (dispatch({type: RECEIVE_SESSION_ERRORS, errors:errors.responseJSON}) ))
);
  
export const logout = () => dispatch => (
    SessionAPIUtil.logout()
    .then(() => (dispatch({type: LOGOUT_CURRENT_USER,})))
);

export const updateUser = user => dispatch => (
    SessionAPIUtil.updateUser(user)
    .then(user => dispatch({type: RECEIVE_CURRENT_USER, user}))

    
)

export const getUser = (userId) => dispatch=>(
    SessionAPIUtil.getUser(userId)
    .then((user)=>dispatch(({type:RECIEVE_USER, user})))
)


export const clearErrors = () => ({
    type: CLEAR_ERRORS
})



// export const receiveCurrentUser = user => ({
//     type: RECEIVE_CURRENT_USER,
//     user
//   });
  
//   export const logoutCurrentUser = () => ({
//     type: LOGOUT_CURRENT_USER,
//   });
  
//   export const receiveErrors = errors => ({
//     type: RECEIVE_SESSION_ERRORS,
//     errors
//   });




// export const signup = user => dispatch => (
//   SessionAPIUtil.signup(user)
//   .then(user => (dispatch(receiveCurrentUser(user))
//   ),
//   error => (dispatch(receiveErrors(error.responseJSON))
//   ))
// );

// export const login = user => dispatch => (
//   SessionAPIUtil.login(user)
//   .then(user => (dispatch(receiveCurrentUser(user))
//   ),
//   error => (dispatch(receiveErrors(error.responseJSON))
//   ))
// );

// export const logout = () => dispatch => (
//   SessionAPIUtil.logout()
//   .then(() => (dispatch(logoutCurrentUser())
//   ))
// );
