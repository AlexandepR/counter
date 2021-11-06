import React, {ChangeEvent, useState} from "react";
import style from './counterOption.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../bll/store";
import {
    setCounterAC,
    initialStateType,
    maxValueAC,
    onChangeValueAC,
    incCounterAC,
    incButtonAC, onChangeStartValueAC
} from "../bll/counter-reducer";


function CounterOption() {
    const [maxValue, setMaxValue] = useState(+'')
    const [startValue, setStartValue] = useState(+'')
    const state = useSelector<AppStateType, initialStateType>(state => state.counter)
    const dispatch = useDispatch()

    const onClickSet = () => {
        state.maxValue > state.startValue ? dispatch(incButtonAC(state.incButton = false)) : dispatch(incButtonAC(state.incButton = true))
        dispatch(setCounterAC(state.value = startValue))
        dispatch(maxValueAC(state.maxValue = maxValue))

    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        // dispatch(maxValueAC(+e.currentTarget.value))
       return setMaxValue(+e.currentTarget.value)
    }
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeStartValueAC(+e.currentTarget.value))
        return setStartValue(+e.currentTarget.value)

    }

    return (
        <div className={style.blockCounter}>
            <div className={style.settings}>
                max value:
                <input
                    className={style.input}
                    value={maxValue}
                    onChange={onChangeMaxValue}
                >
                </input>
                start value:
                <input
                    className={style.input}
                    value={startValue}
                    onChange={onChangeValue}
                >
                </input>
            </div>
            <div className={style.setBlock}>
                <button onClick={onClickSet} className={style.button}>set</button>

            </div>
        </div>
    )
}

export default CounterOption