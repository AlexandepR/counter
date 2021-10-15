import React from "react";

type ButtonUniverssalType = {
    valueCounter: number
    setValueCounter: (value:number) => void
    inputMax: number
    inputMin: number
}

export function ButtonUniverssal (props: ButtonUniverssalType) {

    const incOnclick = () => {
        {props.setValueCounter(props.valueCounter + 1) }
    }
    return(
        <button>{ incOnclick }</button>
    )
}