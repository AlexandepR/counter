import React from 'react'
import style from "./counter.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../bll/store";
import {incCounterAC, initialStateType, resetCounterAC} from "../bll/counter-reducer";



function Counter () {

    const dispatch = useDispatch()
    const state = useSelector<AppStateType,initialStateType> ( state => state.counter )

    const incCounter= () => {
        dispatch(incCounterAC(state.value))
    }
    const resetCounter = () => {

        dispatch((resetCounterAC(0)))
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