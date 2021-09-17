

export const fetchUsers = () =>{
    return(
        $.ajax({
            url: `/api/users`,
            method: 'GET',
          })
    )
}


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
  
export const updateUser2 = user => {
   return(
    $.ajax({
        url: `/api/users/${user.get('user[id]')}`,
        method: 'PATCH',
        data: user,
        contentType: false,
        processData: false
    })
   )
}

export const updateUser = user => {
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
