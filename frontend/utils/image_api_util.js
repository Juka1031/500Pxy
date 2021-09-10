

export const fetchImages = () => (
    $.ajax({
      url: `/api/images`,
      method: 'GET',
    })
  );
  
  export const fetchImage = imageId => (
    $.ajax({
      url: `/api/images/${imageId}`,
      method: 'GET',
    })
  );

export const createImage = image => { // post image
    return $.ajax({
        url:'/api/images',
        method: 'POST',
        data: image,
        contentType: false,
        processData: false,
    })
}



export const updateImage = (image) => (// patch image
    $.ajax({
        url: `/api/images/${image.id}`,
        method: 'PATCH',
        data: { image }
    })
)


export const deleteImage = (imageId) => ( //delete image
    $.ajax({
        url: `/api/images/${imageId}`,
        method : 'DELETE'
    })
)

