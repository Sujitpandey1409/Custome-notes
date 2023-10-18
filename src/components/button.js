import React, { useState } from "react";
import './button.css'

let Button = (prop)=>{
    let addNote =()=>{
        if(prop.inputVal){
        prop.addNote([...prop.note,prop.inputVal])}
        // localStorage.setItem(prop.note,[...prop.note,prop.inputVal])}
        /* eslint-disable no-restricted-globals */
        // let confirmation = confirm("Do you want to add this to the note?? "+prop.inputVal)
        // confirmation?alert('ok'):alert('canceled')
        /* eslint-enable no-restricted-globals */
    }
    
    return(
        <form onSubmit={addNote}>
        <a href="#" className="button" onClick={addNote} title="Add the created note below">
            Add Note  
        </a>
        </form>
    )
}
export default Button