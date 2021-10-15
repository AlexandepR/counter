import React, {ChangeEvent, useState} from "react";

type SetMaxMinValue = {
    setInputMax: (value: number) => void
    setInputMin: (value:number) => void
    inputMax: number
    // inputMax: number | string
    inputMin: number
    setValueCounter: (value:number) => void
}

export function SetMaxMinValue(props:SetMaxMinValue) {


    const inputMaxValue = (e:ChangeEvent<HTMLInputElement>) => {
      props.setInputMax(+e.currentTarget.value)

    }
    const inputMinValue = (e:ChangeEvent<HTMLInputElement>) => {
        props.setInputMin(+e.currentTarget.value)
    }
    const setValue = () => {
        props.setValueCounter(props.inputMin)
    }
    return (
        <div>
            <div>
                {props.inputMax}
                <div>max value:</div>
                <input
                    value={props.inputMax}
                    onChange={inputMaxValue}
                    type='number'
                />
            </div>
            <div>
                <div>start value:</div>
                <input
                    value={props.inputMin}
                    onChange={inputMinValue}
                    type='number'
                />
            </div>
            <button
            onClick={setValue}
            >set</button>
        </div>
    )

}


