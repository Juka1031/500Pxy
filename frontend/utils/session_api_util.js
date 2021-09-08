

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
  
export const updateUser = user => {
    debugger
   return(
    $.ajax({
        url: `/api/users/${user.id}`,
        method: 'PATCH',
        data: { user }
    })
   )
}


export const getUser = (userId) => (
    $.ajax({
        url:`api/users/${userId}`,
        method : "GET"
    })
)
