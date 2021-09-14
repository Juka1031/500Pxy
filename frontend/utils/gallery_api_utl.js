export const fetchGalleries = () => (
    $.ajax({
      url: `/api/galleries`,
      method: 'GET',
    })
  );


export const fetchOwnerGalleries = (gallerOwnerId) => {
    return $.ajax({
        url:`api/users/${gallerOwnerId}/galleries`,
        method: 'GET'
    })
}
  
  export const fetchGallery = galleryId => (
    $.ajax({
      url: `/api/galleries/${galleryId}`,
      method: 'GET',
    })
  );

export const createGallery = gallery => { // post gallery
    return $.ajax({
        url:'/api/galleries',
        method: 'POST',
        data: gallery,
        contentType: false,
        processData: false,
    })
}



export const updateGallery = (gallery) => (// patch gallery
    $.ajax({
        url: `/api/galleries/${gallery.id}`,
        method: 'PATCH',
        data: { gallery }
    })
)


export const deleteGallery = (galleryId) => ( //delete gallery
    $.ajax({
        url: `/api/galleries/${galleryId}`,
        method : 'DELETE'
    })
)

export const fetchUploaderGalleries = (userId) => {
    return $.ajax({
        url:`api/users/${userId}/galleries`,
        method: 'GET'
    })
}


export const createGalleriedImage = galleriedImage => { // 
    return $.ajax({
        url:'/api/galleried_images',
        method: 'POST',
        data: galleriedImage,
        contentType: false,
        processData: false,
    })
}

export const deleteGalleriedImage = (galleriedImageId) => ( //delete gallery
    $.ajax({
        url: `/api/galleried_images/${galleriedImageId}`,
        method : 'DELETE'
    })
)