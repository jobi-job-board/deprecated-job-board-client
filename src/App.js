import logo from './assets/logo.png';
// Assets
import './App.scss';
import { PencilSimple, Notepad,User} from 'phosphor-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>TESTING</code> and save to reload.
        </p>
        <h1>TESTING PART2</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
