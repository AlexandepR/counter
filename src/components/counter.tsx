import React from 'react'
import style from "./counter.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../bll/store";
import {incCounterAC, initialStateType, setCounterAC} from "../bll/counter-reducer";



function Counter () {
    const dispatch = useDispatch()
    const state = useSelector<AppStateType,initialStateType> ( state => state.counter )

    const incCounter= () => {
            if (state.maxValue > state.value) {
                dispatch(incCounterAC(state.value))
            }
      // state.value <= state.maxValue ?  dispatch(incCounterAC(state.value)) : state.maxValue
    }
    const resetCounter = () => {

        dispatch((setCounterAC(state.value = state.startValue)))
    }


    return (
        <div className={style.blockCounter}>
    <div className={style.value}>{state.value}</div>
    <div className={style.blockButton}>
        <button className={style.button} onClick={incCounter}>inc</button>
        <button className={style.button} onClick={resetCounter}>reset</button>
    </div>
        </div>
)
}

export default Counter