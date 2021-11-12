// const INC_COUNTER = 'INC-COUNTER'
// const RESET_COUNTER = 'RESET-COUNTER'
// const SET_MAX_VALUE = 'SET-MAX-VALUE'


import {Dispatch} from "redux";
import {AppStateType} from "./store";

const initialState = {
    value: 0,
    maxValue: 5,
    startValue: 0,
    incButton: false,
    setButton: false,
    onChangeStartValue: 0
}
export type initialStateType = {
    value: number
    maxValue: number
    startValue: number
    incButton: boolean
    setButton: boolean
    onChangeStartValue: number
}
export type incCounterACType = {
    type: 'INC-COUNTER'
    inc: number
}
type setCounterACType = {
    type: 'SET-COUNTER'
    value: number
}
type maxValueACType = {
    type: 'ONCHANGE-SET-MAX-VALUE'
    maxValue: number
}
type onChangeValueACType = {
    type: 'ONCHANGE-START-VALUE'
    startValue: number
}
type incButtonType = {
    type: 'INC-BUTTON'
    incButton: boolean
}
type onChangeStartValueType = {
    type: 'ON-CHANGE-START-VALUE'
    onChangeStartValue: number
}
type setButtonTypeACType = {
    type: 'TOGGLE-BUTTON-SET'
    setButton: boolean
}
type setValueFromLocalStorageACType = {
    type: 'SET-VALUE-FROM-LOCAL-STORAGE'
    value: number
}
// type setButtonTypeACType = ReturnType<typeof setButtonAC>

export type ActionTypes = incCounterACType | incButtonType |
    setCounterACType | maxValueACType | onChangeValueACType |
    onChangeStartValueType | setButtonTypeACType | setValueFromLocalStorageACType

export const counterReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case 'INC-COUNTER': {
            return {
                ...state,
                value: action.inc + 1
            }
        }
        case 'SET-COUNTER' : {
            return {
                ...state,
                value: action.value
            }
        }
        case 'ONCHANGE-SET-MAX-VALUE': {
            return {
                ...state,
                maxValue : action.maxValue
            }
        }
        case 'ONCHANGE-START-VALUE': {
            return {
                ...state,
                startValue: action.startValue
            }
        }
        case 'INC-BUTTON': {
            return {
                ...state,
                incButton: action.incButton
            }
        }
        case 'ON-CHANGE-START-VALUE' : {
            return{
                ...state,
                onChangeStartValue: action.onChangeStartValue
            }
        }
        case 'TOGGLE-BUTTON-SET': {
            return {
                ...state,
                setButton: action.setButton
            }
        }
        case 'SET-VALUE-FROM-LOCAL-STORAGE': {
            return {
                ...state,
                value: action.value
            }
        }
        default:
            return state;
    }
}
// export const incResetTC = (value: number) => (dispatch: Dispatch, getState: () => AppStateType) => {
//     let currentValue = getState().counter.value
//     localStorage.setItem('MyCounterValue', JSON.stringify(currentValue = value))
//     dispatch(setCounterAC(value))
// }


// export const incValuesTC = (value:number) => (dispatch: Dispatch, getState: () => AppStateType) => {
//     let currentValue = getState().counter.value  // получаем пусть к значению в стейте
//     localStorage.setItem('MyCounterValue', JSON.stringify(currentValue + 1)) // записываем данные в localstorage
//     dispatch(setCounterAC(value))
// }
// export const setValueFromLocalStorageTC = () => (dispatch: Dispatch) => {
//     let valueAsString = localStorage.getItem('MyCounterValue')
//     if (valueAsString) {
//         let newValue = JSON.parse(valueAsString)
//         dispatch(setValueFromLocalStorageAC(newValue))
//     }
// }


export const setValueFromLocalStorageAC = (value: number): setValueFromLocalStorageACType => {
    return {type:'SET-VALUE-FROM-LOCAL-STORAGE', value}
}

export const onChangeValueAC = (startValue:number): onChangeValueACType => {
    return( { type: 'ONCHANGE-START-VALUE', startValue})
}
export const incCounterAC = (inc: number): incCounterACType => {
    return {type: 'INC-COUNTER', inc}
}
export const setCounterAC = (value: number): setCounterACType => {
    return {type: 'SET-COUNTER', value}
}
export const maxValueAC = (maxValue:number): maxValueACType => {
    return {type: 'ONCHANGE-SET-MAX-VALUE', maxValue}
}
export const incButtonAC = (incButton: boolean): incButtonType => {
    return {type: 'INC-BUTTON', incButton}
}
export const onChangeStartValueAC = (onChangeStartValue:number): onChangeStartValueType => {
    return {type: 'ON-CHANGE-START-VALUE', onChangeStartValue}
}
export const setButtonAC = (setButton:boolean): setButtonTypeACType => {
    return {type: 'TOGGLE-BUTTON-SET', setButton}
}