import React, {ChangeEvent, useEffect, useState} from "react";
import style from './counterOption.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../bll/store";
import {
    setCounterAC,
    initialStateType,
    maxValueAC,
    onChangeValueAC,
    incCounterAC,
    incButtonAC, onChangeStartValueAC, setButtonAC, incValuesTC
} from "../bll/counter-reducer";


function CounterOption() {
    const [maxValue, setMaxValue] = useState(+'')
    const [startValue, setStartValue] = useState(+'')
    // const [valueLocalStorage, setValueLocalStorage] = useState('')
    const state = useSelector<AppStateType, initialStateType>(state => state.counter)
    const dispatch = useDispatch()

    // useEffect( () => {
    //     let valueAsString = localStorage.getItem('start value')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         setValueLocalStorage(newValue)
    //         // state.startValue = newValue
    //     }
    // })
    //
    // useEffect( () => {
    //     localStorage.setItem('start value', JSON.stringify(state.startValue))
    // },[valueLocalStorage])


    const onClickSet = () => {
        dispatch(incValuesTC(state.value))
        // let valueAsString = localStorage.getItem('start value')
        // if (valueAsString) {
        //     let newValue = JSON.parse(valueAsString)
        //     setValueLocalStorage(newValue)
        //     // state.startValue = newValue
        // }

        // localStorage.setItem('start value', JSON.stringify(state.startValue))

        state.setButton = false
        state.maxValue > state.startValue ? dispatch(incButtonAC(state.incButton = false)) : dispatch(incButtonAC(state.incButton = true))
        dispatch(setCounterAC(state.value = startValue))
        dispatch(maxValueAC(state.maxValue = maxValue))
        dispatch(setButtonAC(state.setButton = true))
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setButtonAC(state.setButton = false))
        // dispatch(maxValueAC(+e.currentTarget.value))
        return setMaxValue(+e.currentTarget.value)
    }
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setButtonAC(state.setButton = false))
        dispatch(onChangeStartValueAC(+e.currentTarget.value))
        return setStartValue(+e.currentTarget.value)

    }

    return (
        <div className={style.blockCounter}>
            <div className={style.settings}>
                max value:
                <input
                    className={state.setButton ? style.inputSet : style.input}
                    value={maxValue}
                    onChange={onChangeMaxValue}
                    type='number'
                >
                </input>
                start value:
                <input
                    className={state.onChangeStartValue < 0
                        ? style.inputError
                        : state.setButton
                            ? style.inputSet
                        : style.input}
                    value={startValue}
                    onChange={onChangeValue}
                    type='number'
                >
                </input>
            </div>
            <div className={style.setBlock}>
                <button onClick={onClickSet}
                        className={state.setButton
                            ? style.buttonOf
                            : style.button}
                        disabled={state.setButton}
                >set
                </button>

            </div>
        </div>
    )
}

export default CounterOption