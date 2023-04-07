import logo from './assets/logo.png';
// Assets
import './App.scss';
import { PencilSimple, Notepad, User } from 'phosphor-react';
import { Routes, Route } from 'react-router-dom';
// Pages
import Home from './components/Home';

function App() {
  return (
    // <div className="App" style={{ marginBottom: "500px" }}>
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
    // </div>
  );
}

export default App;
