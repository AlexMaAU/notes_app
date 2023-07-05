import Note from '../Note';
import CreateNote from '../CreateNote';
import { useEffect, useState } from 'react';

const Notes = () => {
  const [inputText, setInputText] = useState('');
  const [notes, setNotes] = useState([]);
  const [charLeft, setCharLeft] = useState(100);

  const handleDelete = (id) => {
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
  };

  useEffect(()=>{
    const left = 100 - inputText.length
    setCharLeft(left)
  }, [inputText])

  return (
    <div className='notes'>
      {notes.map((note) => (
        <Note
          text={note.text}
          key={note.id}
          id={note.id}
          handleDelete={handleDelete}
        />
      ))}
      <CreateNote
        handleInputText={setInputText}
        handleNotes={setNotes}
        notes={notes}
        inputText={inputText}
        charLeft={charLeft}
      />
    </div>
  );
};

export default Notes;
