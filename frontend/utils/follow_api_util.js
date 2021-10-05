export const fetchFollows = (userId) => (
    $.ajax({
        url: `/api/${userId}follows`,
        method: 'GET'
    })
);

// export const createFollow = follow => {
//     return $.ajax({
//         url: '/api/follows',
//         method: 'POST',
//         data: follow,

//     })
// };

export const deleteFollow = followId => {
    return $.ajax({
        url: `/api/follows/${{followId}}`,
        data: followId,
        method: 'DELETE'
    })
};


export const createFollow = follow => {
    return $.ajax({
        url: '/api/follows',
        method: 'POST',
        data: follow,
        contentType: false,
        processData: false,

    })
};