import {applyMiddleware, combineReducers, createStore} from 'redux';
import {counterReducer} from "./counter-reducer";
import thunk from "redux-thunk";
import {loadState, saveState} from "../utils/localStorage-utils";

const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))


store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})


// @ts-ignore
window.store = store
