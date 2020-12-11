import './App.css';
import ColorMode from './Components/ColorMode';
import Home from './Pages/Home';


const App = () => {
  return (
    <div className='App'>
      <div>
        <ColorMode />
      </div>
        <Home />
    </div>
  );
}

export default App;
