import { combineReducers, createStore, } from 'redux'
import {loadingReducer} from './loadingReducer'

const rootReducers = combineReducers({
    loading: loadingReducer,
})

export const store = createStore(rootReducers)



export type AppStoreType = ReturnType<typeof rootReducers>
export default store

// @ts-ignore
window.store = store // for dev
