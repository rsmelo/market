import { combineReducers } from 'redux'

import gallery, * as fromGallery from './gallery/reducer'

const rootReducer = combineReducers({ gallery })

export default rootReducer

export const getGalleryProducts = state => fromGallery.getProducts(state.gallery)
export const getGalleryIsFetching = state => fromGallery.getIsFetching(state.gallery)
export const getGalleryProductById = (state, id) => fromGallery.getProductById(state.gallery, id)
