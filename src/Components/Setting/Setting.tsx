import React, {ChangeEvent, useEffect, useState} from 'react';
import style from "./Setting.module.css";
import Button from "../Button/Button";

type SettingPropsType = {
    giveDisabled: () => void
    unDisabled: () => void
    changeStartMaxNumber: (startNumber: number, maxNumber: number) => void
    giveTopic: () => void
    giveError: () => void
}

function Setting(props: SettingPropsType) {

    const [startNumber, setStartNumber] = useState<number>(0)
    const [maxNumber, setMaxNumber] = useState<number>(5)
    const [error, setError] = useState<boolean>(false)
    const [disabled, setDisabled] = useState<boolean>(false)

    useEffect(() => {
        let newStartNumber = localStorage.getItem("startNumber")
        let newMaxNumber = localStorage.getItem("maxNumber")
        if (newStartNumber && newMaxNumber) {
            setStartNumber(JSON.parse(newStartNumber))
            setMaxNumber(JSON.parse(newMaxNumber))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("startNumber", JSON.stringify(startNumber))
    }, [startNumber])
    useEffect(() => {
        localStorage.setItem("maxNumber", JSON.stringify(maxNumber))
    }, [maxNumber])

    const changeStartNumber = (e: ChangeEvent<HTMLInputElement>) => {
        if ((+(e.currentTarget.value)) < 0) {
            setStartNumber(+(e.currentTarget.value))
            setError(true)
        } else {
            setStartNumber(+(e.currentTarget.value))
            setError(false)
        }
        setDisabled(false)
        giveDisabled();
    }
    const changeMaxNumber = (e: ChangeEvent<HTMLInputElement>) => {
        if ((+(e.currentTarget.value)) < 0) {
            setMaxNumber(+(e.currentTarget.value))
            setError(true)
        } else {
            setMaxNumber(+(e.currentTarget.value))
            setError(false)
        }
        setDisabled(false)
        giveDisabled();
    }

    const changeStartMaxNumber = () => props.changeStartMaxNumber(startNumber, maxNumber)
    const giveTopic = () => props.giveTopic()
    const giveError = () => props.giveError()
    const giveDisabled = () => props.giveDisabled()
    const unDisabled = () => props.unDisabled()

    if (startNumber > maxNumber) {
        giveError()
    }

    return (
        <div className={style.Setting}>
            <div className={style.Screen}>
                <div>
                    max value: <input
                    className={(maxNumber < 0) || (maxNumber < startNumber) ? style.Error : ""}
                    type="number"
                    value={maxNumber}
                    onChange={changeMaxNumber}
                    onClick={error ? giveError : giveTopic}
                />
                </div>
                <div>
                    start value: <input
                    className={(startNumber < 0) || (startNumber > maxNumber) ? style.Error : ""}
                    type="number"
                    value={startNumber}
                    onChange={changeStartNumber}
                    onClick={error ? giveError : giveTopic}
                />
                </div>
            </div>
            <div className={style.Buttons}>
                <Button disabled={(startNumber < 0 || maxNumber < 0) || (startNumber > maxNumber) || disabled}
                        onClick={() => {
                            changeStartMaxNumber();
                            unDisabled();
                            setDisabled(true);
                        }}
                        title={"Set"}/>
            </div>
        </div>
    );
}

export default Setting;
