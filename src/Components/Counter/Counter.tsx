import React from 'react';
import style from "./Counter.module.css";
import Button from "../Button/Button";

type CounterPropsType = {
    disabled: boolean
    number: number | string
    startNumber: number
    maxNumber: number
    changeNumber: () => void
    resetNumber: () => void
}


function Counter(props: CounterPropsType) {


    const {number, startNumber, maxNumber, changeNumber, resetNumber} = props;

    function chooseClass() {
        if (number >= maxNumber || number === 'enter correct values and press "set"') {
            return style.Max
        } else {
            return ""
        }
    }

    return (
        <div className={style.Counter}>
            <div className={style.Screen}>
                <span className={chooseClass()}>
                    {number}
                </span>
            </div>
            <div className={style.Buttons}>
                <Button disabled={number >= maxNumber || props.disabled} onClick={() => changeNumber()} title={"Add"}/>
                <Button disabled={number === startNumber || props.disabled} onClick={() => resetNumber()} title={"Reset"}/>
            </div>
        </div>
    );
}

export default Counter;
