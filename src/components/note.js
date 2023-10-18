import './notes.css'
import React, { useRef, useEffect } from 'react'
// import ReactTooltip from 'react-tooltip';

let Notes = (props)=>{
  // deleteNotes on clicking delete button
  const noteDiv = useRef(null)
  function deleteNote(id){
    props.deleteNoteParent(props.note.filter((el,i)=>{return(i!==id)}))
  }

  function increaseSize(){
      noteDiv.current.classList.add('increased-size')
  }

  function normalSize(e){
    if(!noteDiv.current.contains(e.target)){
    noteDiv.current.classList.remove('increased-size')}
}
useEffect(() => {
  // Add a click event listener when the component mounts
  document.addEventListener('click', normalSize);

  // Remove the click event listener when the component unmounts
  return () => {
    document.removeEventListener('click', normalSize);
  };
}, []);

  return(<div className="notes" onClick={increaseSize}  ref={noteDiv}>
      <h3 onClick={normalSize}>your note {props.id+1}:</h3>
      <p>{props.p}</p>
      <button onClick={()=>deleteNote(props.id)} title="Delete"> X </button>
      {/* <ReactTooltip place="top" type="dark" effect="solid" />  */}
    </div>)
}
export default Notes