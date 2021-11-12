import {applyMiddleware, combineReducers, createStore} from 'redux';
import {counterReducer} from "./counter-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    counter: counterReducer
})

let preloadedState;
const persistedStateString = localStorage.getItem('value')
if (persistedStateString) {
    preloadedState = JSON.parse(persistedStateString)
}

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store

export const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk))


store.subscribe( () => {
    // localStorage.setItem('app-state', JSON.stringify(store.getState()))
    localStorage.setItem('value', JSON.stringify(store.getState().counter.value))
})






// @ts-ignore
window.store = store
