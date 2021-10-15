import React from "react";
import s from  './counter.module.css'
import {ButtonUniverssal} from "./ButtonUniverssal";

type CounterType = {
    valueCounter: number
    setValueCounter: (value:number) => void
    inputMax: number
    inputMin: number
}

export function Counter (props:CounterType) {
    const result = props.valueCounter
    const incOnclick = () => {
         {props.setValueCounter(props.valueCounter + 1) }
    }
    const resetOnclick = () => {
        {props.setValueCounter(props.inputMin) }
    }
    return (
        <div>
            <div
                className={
                    props.inputMin < 0 || props.inputMax < 0 ||
                    props.valueCounter === props.inputMax ? s.errorRed : ''
                        || props.inputMax < props.inputMin ? s.errorRed : ''
                }
            >
                --{ result === 0 ? 'enter values and press set' : result
                || props.inputMax < props.inputMin ? result : 'Incorrect value'
                }--
            </div>
            <div>

                {/*<ButtonUniverssal*/}
                {/*    setValueCounter = {props.setValueCounter}*/}
                {/*    valueCounter = {props.valueCounter}*/}
                {/*/>*/}

            <button
            onClick={ incOnclick }
            disabled={props.valueCounter < props.inputMax ? false : true}
            >inc</button>

            <button
            onClick={resetOnclick}
            >reset</button>

            </div>
        </div>
    )
}









// function ButtonIncOnclick () {
//     props.SetValueCounter
// }