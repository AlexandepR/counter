import React from "react";
import style from './counter.module.css'


function CounterOption() {

    return(
        <div className={style.blockCounter}>
            <div className={style.settings}>
                <> max value:</> <input className={style.input}></input>
                start value: <input className={style.input}></input>
            </div>
            <div className={style.setBlock}>
                <button className={style.button}>set</button>

            </div>
        </div>
    )
}

export default CounterOption