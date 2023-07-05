import { useState } from 'react';
import { v4 as UUID } from 'uuid';
import LinearProgress from '@mui/material/LinearProgress'

const CreateNote = ({
  handleInputText,
  handleNotes,
  notes,
  inputText,
  charLeft,
}) => {
  // const [inputText, setInputText] = useState('');
  // const [notes, setNotes] = useState([]);
  // console.log(notes);

  return (
    <div className='note'>
      <textarea
        cols='10'
        rows='5'
        placeholder='Type...'
        maxLength='100'
        value={inputText}
        onChange={(e) => {
          handleInputText(e.target.value);
        }}
      ></textarea>
      <div className='note__footer'>
        <span className='label'>{charLeft} left</span>
        <button
          className='note__save'
          onClick={() => {
            handleNotes([...notes, { id: UUID(), text: inputText }]);
            handleInputText('');
          }}
        >
          Save
        </button>
      </div>
      <LinearProgress
        className='char__progress'
        variant='determinate'
        value={charLeft}
      />
    </div>
  );
};

export default CreateNote;
