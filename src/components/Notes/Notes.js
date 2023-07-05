import Note from '../Note';
import CreateNote from '../CreateNote';
import Pagination from '../Pagination';
import { useEffect, useState } from 'react';
import testData from '../../assets/testData/testData';
import './styles.css';

const Notes = () => {
  const [inputText, setInputText] = useState('');
  const [notes, setNotes] = useState(testData);
  const [charLeft, setCharLeft] = useState(200);

  // Pagination
  const [currentNotes, setCurrentNotes] = useState([]);  //sliced notes from all notes array, store notes displayed on current page
  const [currentPage, setCurrentPage] = useState(1);  //current page index - start from 1
  const [pageNumbers, setPageNumbers] = useState([]);  //total page numbers
  const postPerPage = 9;

  // Calculate page numbers array，used for mapping page numbers on Pagination
  useEffect(() => {
    const numbers = [];
    for (let i = 1; i <= Math.ceil(notes.length / postPerPage); i++) {
      numbers.push(i); 
    }
    setPageNumbers(numbers);
  }, [notes]);
  console.log(notes);

  // get sliced notes for current page
  useEffect(()=>{
    const lastIndex = currentPage * postPerPage
    const firstIndex = currentPage * postPerPage - 9
    const filterNotes = notes.slice(firstIndex, lastIndex)
    setCurrentNotes(filterNotes)
  }, [notes, currentPage])

  console.log(currentNotes)
  // Pagination ends

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
        {currentNotes.map((note) => (
          <Note
            text={note.text}
            key={note.id}
            id={note.id}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className='createNote'>
        <div>
          <Pagination pageNumbers={pageNumbers} handleSetPage={setCurrentPage} currentPage={currentPage} />
        </div>
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
