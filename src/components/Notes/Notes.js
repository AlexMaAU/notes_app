import Note from '../Note';
import CreateNote from '../CreateNote';
import { useEffect, useState } from 'react';
import testData from '../../assets/testData/testData';
import './styles.css'

const Notes = () => {
  const [inputText, setInputText] = useState('');
  const [notes, setNotes] = useState(testData);
  const [charLeft, setCharLeft] = useState(200);

  const handleDelete = (id) => {
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
  };

  useEffect(() => {
    const left = 200 - inputText.length;
    setCharLeft(left);
  }, [inputText]);

  return (
    <div>
      <div className='notes'>
        {notes.map((note) => (
          <Note
            text={note.text}
            key={note.id}
            id={note.id}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className='pagination'>
        Pagination Here
      </div>
      <div className='createNote'>
        <CreateNote
          handleInputText={setInputText}
          handleNotes={setNotes}
          notes={notes}
          inputText={inputText}
          charLeft={charLeft}
        />
      </div>
    </div>
  );
};

export default Notes;
