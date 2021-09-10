import * as ImageAPIUtils from '../utils/image_api_util';

export const RECEIVE_ALL_IMAGES = 'RECEIVE_ALL_IMAGES';
export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';
export const RECEIVE_IMAGE_ERRORS = 'RECEIVE_IMAGE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveImages = images => ({
    type: RECEIVE_ALL_IMAGES,
    images
})
  
const receiveImage = image => ({
    type: RECEIVE_IMAGE,
    image
})
  
const removeImage = imageId => ({
    type: REMOVE_IMAGE,
    imageId
})
  
export const receiveErrors = errors => {
    return {
        type: RECEIVE_IMAGE_ERRORS,
        errors,
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
};

  
export const fetchImages = () => dispatch => {
    return ImageAPIUtils.fetchImages()
        .then(images => {dispatch(receiveImages(images)) })
}
  
export const fetchImage = imageId => dispatch => {
    return ImageAPIUtils.fetchImage(imageId)
        .then(image => dispatch(receiveImage(image)))
}

export const createImage = image => dispatch => {
    return ImageAPIUtils.createImage(image)
        .then(image => (dispatch(receiveImage(image)))
        // ,errors => (dispatch(receiveErrors(errors.responseJSON)))
        )
}

export const updateImage = image => dispatch => {
    return ImageAPIUtils.updateImage(image)
        .then(image => (dispatch(receiveImage(image))),
        errors => (dispatch(receiveErrors(errors.responseJSON))))
 }

export const deleteImage = imageId => dispatch => {
    return ImageAPIUtils.deleteImage(imageId)
        .then(() => dispatch(removeImage(imageId)))
}