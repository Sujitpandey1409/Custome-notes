import React, { useRef, useState } from "react";
import './input.css'
import addNote from './button'
 
let Input = (props) => {
    let [inputValue, updateInputValue] = useState('')
    let [validText, setvalidText] = useState(true)
    let textArea = useRef(null)
    let message = useRef(null)

    let inputValueUpdate = (e) => {
        const text_value = e.target.value
        if ((text_value.includes(' ') && text_value.length <= 100) || text_value.length <= 13) {
            updateInputValue(e.target.value)
            props.inputChange(e.target.value)
            textArea.current.classList.remove('textWarning')
            message.current.classList.remove('textMessage')
            message.current.textContent=`${100 - inputValue.length+1}/100`
            setvalidText(true)
        }
        else { setvalidText(false) 
            textArea.current.classList.add('textWarning')
            message.current.textContent = 'maximum word length'
            message.current.classList.add('textMessage')
            if(text_value.includes(' ')){
                message.current.textContent = 'Text size limit exceed'
            }     
        }
        console.log(validText)
    }

    return (
        <div>
            <form onSubmit={addNote}>
            <textarea ref = {textArea} className="input" type="text" placeholder="Your notes here" onChange={inputValueUpdate} title="Create a note" />
            {/* {validText ? (<div>{100 - inputValue.length}/100</div>) :
                (<div style={{color:'red'}}>maximum word length</div>)
            } */}
            <div ref={message}>{100 - inputValue.length}/100</div>
            </form>
        </div>)
}
export default Input