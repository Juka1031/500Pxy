

export const signup = user => ( //post user
    $.ajax({
        url: '/api/users',
        method: 'POST',
        data: {user }
    })
);



export const login = user => ( //post session
    $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user }
    })
);
   
export const logout = () => ( //delete session
    $.ajax({
        url: '/api/session',
        method: 'DELETE'
    })
);
  