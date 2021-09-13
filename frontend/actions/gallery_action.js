import * as GalleryAPIUtils from '../utils/gallery_api_utl'

export const RECIEVE_GALLERIES = 'RECIEVE_GALLERIES'; //uploader galleries
export const RECEIVE_GALLERY = 'RECEIVE_GALLERY';
export const REMOVE_GALLERY = 'REMOVE_GALLERY';


const receiveGalleries = (galleries) => ({
    type: RECIEVE_GALLERIES,
    galleries,
});

  
const recieveGallery = gallery => ({
    type: RECEIVE_GALLERY,
    gallery
})
  
const removeGallery = galleryId => ({
    type: REMOVE_GALLERY,
    galleryId
})


export const fetchGalleries = () => dispatch => {
    return GalleryAPIUtils.fetchGalleries()
        .then(galleries => {dispatch(receiveGalleries(galleries)) })
}


export const fetchOwnerGalleries = (gallerOwnerId) => dispatch => {
    return GalleryAPIUtils.fetchOwnerGalleries(gallerOwnerId)
        .then(galleries => (dispatch(receiveGalleries(galleries))))
}

export const fetchUploaderGalleries = (uploaderId) => dispatch => {
    return GalleryAPIUtils.fetchUploaderGalleries(uploaderId)
        .then(galleries => (dispatch(receiveGalleries(galleries))))
}
  
export const fetchGallery = galleryId => dispatch => {
    return GalleryAPIUtils.fetchGallery(galleryId)
        .then(gallery => dispatch(recieveGallery(gallery)))
}

export const createGallery = gallery => dispatch => {
    return GalleryAPIUtils.createGallery(gallery)
        .then(gallery => (dispatch(recieveGallery(gallery)))
        // ,errors => (dispatch(receiveErrors(errors.responseJSON)))
        )
}

export const updateGallery = gallery => dispatch => {
    return GalleryAPIUtils.updateGallery(gallery)
        .then(gallery => (dispatch(recieveGallery(gallery))),
        errors => (dispatch(receiveErrors(errors.responseJSON))))
 }

export const deleteGallery = galleryId => dispatch => {
    return GalleryAPIUtils.deleteGallery(galleryId)
        .then(() => dispatch(removeGallery(galleryId)))
}