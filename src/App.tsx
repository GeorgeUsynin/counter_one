import React, {useState} from 'react';
import './App.css';
import Counter from "./Components/Counter/Counter";
import Setting from "./Components/Setting/Setting";

function App() {

    const [number, setNumber] = useState<number | string>(0)
    const [startNumber, setStartNumber] = useState<number>(0)
    const [maxNumber, setMaxNumber] = useState<number>(5)
    const [disabled, setDisabled] = useState<boolean>(false)

    function changeStartMaxNumber(startNumber: number, maxNumber: number) {
        setNumber(startNumber)
        setStartNumber(startNumber)
        setMaxNumber(maxNumber)
    }

    function changeNumber() {
        let newNumber = +number + 1;
        if (newNumber <= maxNumber) {
            setNumber(newNumber)
        }
    }

    function resetNumber() {
        setNumber(startNumber);
    }

    function giveTopic() {
        setNumber('enter values and press "set"')
    }

    function giveError() {
        setNumber('enter correct values and press "set"')
    }

    function giveDisabled() {
        setDisabled(true)
    }

    function unDisabled() {
        setDisabled(false)
    }


    return (
        <div className="App">
            <Counter
                disabled={disabled}
                number={number}
                startNumber={startNumber}
                maxNumber={maxNumber}
                changeNumber={changeNumber}
                resetNumber={resetNumber}/>
            <Setting
                giveDisabled={giveDisabled}
                unDisabled={unDisabled}
                changeStartMaxNumber={changeStartMaxNumber}
                giveTopic={giveTopic}
                giveError={giveError}/>
        </div>
    );
}

export default App;
