// const INC_COUNTER = 'INC-COUNTER'
// const RESET_COUNTER = 'RESET-COUNTER'
// const SET_MAX_VALUE = 'SET-MAX-VALUE'


const initialState = {
    value: 0,
    maxValue: 5,
    startValue: 0
}
export type initialStateType = {
    value: number
    maxValue: number
    startValue: number
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

export type ActionTypes = incCounterACType |
    setCounterACType | maxValueACType | onChangeValueACType

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

        default:
            return state;
    }
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
