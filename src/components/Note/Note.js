import './styles.css';
import DeleteForeverOutlined from '@mui/icons-material/DeleteForeverOutlined';

const Note = ({ text, id, handleDelete }) => {
  return (
    <div className='note'>
      <div className='note__body'>{text}</div>
      <div className='note__footer'>
        <DeleteForeverOutlined
          onClick={() => {handleDelete(id)}}
          className='note__delete'
          aria-hidden='true'
        />
      </div>
    </div>
  );
};

export default Note;
