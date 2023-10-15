import './notes.css'
import React from 'react'
// import ReactTooltip from 'react-tooltip';

let Notes = (props)=>{
  // deleteNotes on clicking delete button
  function deleteNote(id){
    props.deleteNoteParent(props.note.filter((el,i)=>{return(i!==id)}))
  }

  return(<div className="notes">
      <h3>your note {props.id+1}:</h3>
      <p>{props.p}</p>
      <button onClick={()=>deleteNote(props.id)} title="Delete"> X </button>
      {/* <ReactTooltip place="top" type="dark" effect="solid" />  */}
    </div>)
}
export default Notes