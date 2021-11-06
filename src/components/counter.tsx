import React from 'react'
import style from "./counter.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../bll/store";
import {incButtonAC, incCounterAC, initialStateType, setCounterAC} from "../bll/counter-reducer";



function Counter () {
    const dispatch = useDispatch()
    const state = useSelector<AppStateType,initialStateType> ( state => state.counter )

    const incCounter= () => {

            state.maxValue > state.value ? dispatch(incCounterAC(state.value)) : dispatch(incButtonAC(state.incButton))

      // state.value <= state.maxValue ?  dispatch(incCounterAC(state.value)) : state.maxValue
    }
    const resetCounter = () => {

        dispatch((setCounterAC(state.value = state.onChangeStartValue)))
    }


    return (
        <div className={style.blockCounter}>
    <div className={state.maxValue === state.value ? style.valueError : style.value}>{state.value}</div>
    <div className={style.blockButton}>
        <button
            className={state.maxValue > state.value ? style.button : style.buttonOf}
            onClick={incCounter}
            disabled={state.incButton}

        >inc</button>
        <button
            className={state.onChangeStartValue === state.value ? style.buttonOf :style.button}
            onClick={resetCounter}
        >reset</button>
    </div>
        </div>
)
}

export default Counter