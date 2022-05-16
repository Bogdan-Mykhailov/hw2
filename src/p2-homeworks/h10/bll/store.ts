import { combineReducers, createStore, } from 'redux'
import {loadingReducer} from './loadingReducer'
import {themeReducer} from "../../h12/bll/themeReducer";

const rootReducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
})

export const store = createStore(rootReducers)



export type AppStoreType = ReturnType<typeof rootReducers>
export default store

// @ts-ignore
window.store = store // for dev
