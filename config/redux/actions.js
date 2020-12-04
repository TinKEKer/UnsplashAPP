import {FETCH_PHOTOS, FETCH_POPULAR_PHOTOS, FETCH_STARTED, FETCH_ERROR} from './types'
import {api} from "../api/api";

export const FetchStarted = () => {
    return {
        type: FETCH_STARTED,
    }
}
const FetchError = () => {
    return {
        type: FETCH_ERROR,
    }
}

const FetchPhotos = (data) => {
    return {
        type: FETCH_PHOTOS,
        payload: data
    };
}


const FetchPopularPhotos = (data) => {
    return {
        type: FETCH_POPULAR_PHOTOS,
        payload: data
    };
}

export const API_GET_PHOTOS = (page) => {
    return (dispatch) => {
        dispatch(FetchStarted());
        api.getPhotos(page).then(data => dispatch(FetchPhotos(data))).catch(e => dispatch(FetchError()))
    }
}
export const API_GET_POPULAR_PHOTOS = () => {
    return dispatch => {
        dispatch(FetchStarted);
        api.getPopularPhotos().then(data => dispatch(FetchPopularPhotos(data))).catch(e => dispatch(FetchError))
    }
}