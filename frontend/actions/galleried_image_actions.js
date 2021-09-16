import * as GalleriedImageApiUtils from '../utils/gallery_api_utl'

export const RECEIVE_GALLERIED_IMAGES = 'RECEIVE_GALLERIED_IMAGES'
export const RECEIVE_GALLERIED_IMAGE = 'RECEIVE_GALLERIED_IMAGE'
export const REMOVE_GALLERIED_IMAGE = 'REMOVE_GALLERIED_IMAGE'


const receiveGalleriedImage = galleriedImage =>({
    type: RECEIVE_GALLERIED_IMAGE,
    galleriedImage
})

const removeGalleriedImage = galleriedImageId => ({
    type: REMOVE_GALLERIED_IMAGE,
    galleriedImageId
})

const receiveGalleriedImages = galleriedImages => ({
    type: RECEIVE_GALLERIED_IMAGES,
    galleriedImages
})


export const fetchGalleriedImages = () => dispatch => {
    return GalleriedImageApiUtils.fetchGalleriedImages()
        .then(galleriedImages => {dispatch(receiveGalleriedImages(galleriedImages)) })
}



export const createGalleriedImage = galleriedImage => dispatch => {
    return GalleriedImageApiUtils.createGalleriedImage(galleriedImage)
        .then(galleriedImage => (dispatch(receiveGalleriedImage(galleriedImage)))
        // ,errors => (dispatch(receiveErrors(errors.responseJSON)))
        )
}

export const deleteGalleriedImage = galleriedImageId => dispatch => {
    return GalleriedImageApiUtils.deleteGalleriedImage(galleriedImageId)
        .then(() => dispatch(removeGalleriedImage(galleriedImageId)))
}
