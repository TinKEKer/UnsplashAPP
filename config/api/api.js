import {axiosConfig as axios} from "../axios";
import Constants from 'expo-constants';

const {privateKey, publicKey} = Constants.manifest.extra.keys


export const api = {
    getPhotos: (page = 1) => new Promise((resolve, reject) => {
        axios.get(`/photos?client_id=${publicKey}&page=${page}`).then(({data}) => resolve(data)).catch(e => reject(e))
    }),
    getPopularPhotos: () => new Promise((resolve, reject) => {
        axios.get(`/photos?order_by=popular&client_id=${publicKey}`).then(({data}) => resolve(data)).catch(e => reject(e))
    }),
}