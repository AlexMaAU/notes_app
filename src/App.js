import Header from './components/Header';
import Notes from './components/Notes'
import './css/App.css';

function App() {
  return (
    <div className='main'>
      <div>
        <Header />
        <Notes />
      </div>
    </div>
  );
}

export default App;
