import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {FETCH_ERROR, FETCH_PHOTOS, FETCH_POPULAR_PHOTOS, FETCH_STARTED} from './types'


const initialState = {
    loading: true,
    photos: [],
    error: false,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PHOTOS: {
            return {
                ...state, loading: false, photos: [...state.photos, ...action.payload]
            }
        };
        case FETCH_POPULAR_PHOTOS: {
            return {
                ...state, loading: false, photos: action.payload
            }
        }
            ;
        case FETCH_STARTED: {
            return {
                ...state, loading: true,
            }
        }
            ;
        case FETCH_ERROR: {
            return {
                ...state, loading: false, error: true, photos: []
            }
        }

        default:
            return state
    }
}

export const store = createStore(reducer, applyMiddleware(thunk))