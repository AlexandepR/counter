const INC_COUNTER = 'INC-COUNTER'
const RESET_COUNTER = 'RESET-COUNTER'


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
    type: 'INC_COUNTER'
    inc: number
}
type resetCounterType = {
    type: 'RESET_COUNTER'
    value: number
}

export type ActionTypes = incCounterACType | resetCounterType

export const counterReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case 'INC_COUNTER': {
            return {
                ...state,
                value: action.inc + 1
            }
        }
        case "RESET_COUNTER" :{
            return {
                ...state,
                value: action.value
            }
        }

        default:
            return state;
    }
}

export const incCounterAC = (inc: number): incCounterACType => {
    return {type: 'INC_COUNTER', inc}
}
export const resetCounterAC = (value: number): resetCounterType => {
    return {type: 'RESET_COUNTER', value}
}