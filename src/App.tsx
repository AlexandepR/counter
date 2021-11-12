import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from "./bll/store";
import style from './app.module.css'
import Counter from "./components/counter";
import CounterOption from "./components/counterOption";
import {
    // incValuesTC,
    // initialStateType,
    // setValueFromLocalStorageTC
} from "./bll/counter-reducer";


function App() {
    // const state = useSelector<AppStateType, initialStateType> (state => state.counter)
    const dispatch = useDispatch()

    useEffect( () => {
        // dispatch(setValueFromLocalStorageTC())
    }, [])

    // const incHandler = () => {
    //     dispatch(incValuesTC(state.value))
    // }


    return (
        <div className={style.block}>
        <div className={style.blockCounters}>
            <CounterOption/>
            <Counter/>
        </div>
        </div>
    );
}

export default App;


// import React, {useEffect, useState} from 'react';
// import './App.css';
// import {Counter} from "./counter";
// import {SetMaxMinValue} from "./SetMaxMinValue";
//
// function App() {
//   const [valueCounter, setValueCounter] = useState(0)
//     const [valueStart, setValueStart] = useState()
//     const [inputMax, setInputMax] = useState <number>(1)
//     const [inputMin, setInputMin] = useState <number>(0)
//
//   return (
//     <div className="App">
//
//         <SetMaxMinValue
//             setInputMax={setInputMax}
//             setInputMin={setInputMin}
//             inputMax={inputMax}
//             inputMin={inputMin}
//             setValueCounter={setValueCounter}
//         />
//
//         <Counter
//             valueCounter={valueCounter}
//             setValueCounter={setValueCounter}
//             inputMax={inputMax}
//             inputMin={inputMin}
//         />
//
//     </div>
//   );
// }
//
// export default App;


/////////////////////////////////////////////////////// LocalStorage
// import React, {useEffect, useState} from 'react';
// import './App.css';
//
// function App() {
//     const [value, setValue] = useState(0)
//
//     useEffect( () => {
//         let valueAsString = localStorage.getItem('counterValue')
//         if (valueAsString) {
//             let newValue = JSON.parse(valueAsString)
//             setValue(newValue)
//         }}, [])
//
//     useEffect( () => {
//         localStorage.setItem('counterValue', JSON.stringify(value))
//     }, [value])
//
//     const incHandeler = () => {
//         setValue(value + 1)
//     }
//     const setToLocalStorage =() => {
//         localStorage.setItem('counterValue', JSON.stringify(value))
//         // localStorage.setItem('counterValue + 1', JSON.stringify(value + 1))
//     }
//     const setToSessionStorage =() => {
//         sessionStorage.setItem('counterValue', JSON.stringify(value))
//
//     }
//     const getFromToLocalStorage = () => {
//         let valueAsString = localStorage.getItem('counterValue')
//         if (valueAsString) {
//             let newValue = JSON.parse(valueAsString)
//             setValue(newValue)
//         }
//     }
//     const clearLocalStorageHandler = () => {
//         localStorage.clear()
//         setValue(0)
//     }
//     const removeItemLocalStorage = () => {
//         localStorage.removeItem('counterValue + 1')
//     }
//
//
//
//
//
//     return (
//         <div className="App">
//             <h1>{value}</h1>
//             <button onClick={incHandeler}>inc</button>
//             {/*<button onClick={setToLocalStorage}>setToLocalStorage</button>*/}
//             {/*<button onClick={setToSessionStorage}>setToSessionStorage</button>*/}
//             {/*<button onClick={getFromToLocalStorage}>getFromToLocalStorage</button>*/}
//             {/*<button onClick={clearLocalStorageHandler}>clearLocalStorage</button>*/}
//             {/*<button onClick={removeItemLocalStorage}>removeItemLocalStorage</button>*/}
//         </div>
//     );
// }
//
// export default App;