import React, { useState } from "react";
import './input.css'
import addNote from './button'
 
let Input = (props) => {
    let [inputValue, updateInputValue] = useState('')
    let [validText, setvalidText] = useState(true)

    let inputValueUpdate = (e) => {
        const text_value = e.target.value
        if ((text_value.includes(' ') && text_value.length <= 100) || text_value.length <= 13) {
            updateInputValue(e.target.value)
            props.inputChange(e.target.value)
            setvalidText(true)
        }
        else { setvalidText(false) }
        console.log(validText)
    }

    return (
        <div>
            <form onSubmit={addNote}>
            <textarea className="input" type="text" placeholder="Your notes here" onChange={inputValueUpdate} title="Create a note" />
            {validText ? (<div className="textWarning">{100 - inputValue.length}/100</div>) :
                (<div className="textWarning">maximum word length</div>)
            }
            </form>
        </div>)
}
export default Input