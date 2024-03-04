import './notes.css'
import Input from './input'
import React, { useRef, useEffect, useState } from 'react'
// import ReactTooltip from 'react-tooltip';

let Notes = (props) => {
  const noteDiv = useRef(null)
  const deleButton = useRef(null)
  const editButton = useRef(null)
  const saveButton = useRef(null)
  const inputUpdate = useRef(null)
  const [isClickedEdit, setEdit] = useState(false)
  const [updatedInputVal, setUpdatedInputVal] = useState('')
  function increaseSize(e) {
   !(editButton.current?editButton.current.contains(e.target):inputUpdate.current.contains(e.target))&&noteDiv.current.classList.add('increased-size')
  }

  function normalSize(e) {
    if (!(noteDiv.current.contains(e.target) || deleButton.current.contains(e.target)|| (inputUpdate.current?(inputUpdate.current.contains(e.target)||saveButton.current.contains(e.target)):(editButton.current.contains(e.target))) )) {
      noteDiv.current.classList.remove('increased-size')
    }
  }
  // deleteNotes on clicking delete button
  function deleteNote(id) {
    props.deleteNoteParent(props.note.filter((el, i) => { return (i !== id) }))
  }

  useEffect(() => {
    // Add a click event listener when the component mounts
    document.addEventListener('click', normalSize);

    // Remove the click event listener when the component unmounts
    return () => {
      document.removeEventListener('click', normalSize);
    };
  }, []);

  // Update the inputVal for updating notes which is further transfered to parent
  const toUpdateTheInput = (valFromInput) =>{setUpdatedInputVal(valFromInput)}
  const toUpdateTheNotes = () =>{
    if(updatedInputVal){
      const localDta = JSON.parse(localStorage.getItem('notes'))
      localDta[props.id]=updatedInputVal;
      props.updateNote(localDta);setEdit(false)}
  }

  return (<div className="notes" onClick={increaseSize} ref={noteDiv}>
    <h3>your note {props.id + 1}:</h3>
    {isClickedEdit?<div ref={inputUpdate} ><Input getUpdatedVal={toUpdateTheInput} value={props.p}/><button ref={saveButton} onClick={toUpdateTheNotes} title="Save" className='editButton'>✔</button></div>:<><p>{props.p}</p>
    <button ref={editButton} onClick={() => {setEdit(true)}} title="Edit" className='editButton'> 📝 </button></>}
    <button ref={deleButton} onClick={() => deleteNote(props.id)} title="Delete"> X </button>
    {/* <ReactTooltip place="top" type="dark" effect="solid" />  */}
  </div>)
}
export default Notes