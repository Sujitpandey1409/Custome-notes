import Notes from './components/note'
import Input from './components/input';
import Button from './components/button';
import { useState } from 'react';
import './App.css';

function App() {
  // for getting the current input value
  let [input, setInput] = useState('')
  let inputChange = (valueFromInput) => {
    setInput((input) => input = valueFromInput)
  }
  // for updating the note data
  let [note, updateNotes] = useState(() => {
    const storedNotes = localStorage.getItem('notes');
    return storedNotes ? JSON.parse(storedNotes) : [];
  });

  let addNote = (updatedValueFromButton) => {
    localStorage.setItem('notes', JSON.stringify(updatedValueFromButton));
    updateNotes(updatedValueFromButton)
    setInput((input) => input = '')
  }

  // clear the input field on submit
  let inputValOnSubmit = (clear) => {
    setInput(clear)
  }

  // Updating the note from Notes component
  const updateNote = (updatedValueFromNotes)=>{
    console.log(updatedValueFromNotes);
    localStorage.setItem('notes', JSON.stringify(updatedValueFromNotes));
    updateNotes(updatedValueFromNotes)
  }

  // deleteNotes on clicking delete button
  function deleteNoteParent(newArray) {
    localStorage.setItem('notes', JSON.stringify(newArray));
    updateNotes((note) => note = newArray)
  }


  return (
    <div className="App">
      <Input inputChange={inputChange} />
      <Button addNote={addNote} inputVal={input} note={note} />
      <div className='noteConatiner'>
        {
          note&&note.map((el, i) => {
            return (<div><Notes note={note} key={i} id={i} p={el} deleteNoteParent={deleteNoteParent}  updateNote={updateNote} />
            </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
