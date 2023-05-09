import logo from './assets/logo.png';
import firebase from './firebase';
// Assets
import './App.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Routes, Route } from 'react-router-dom';
// Pages
import Home from './components/Home';
import Register from './components/Register';

function App() {
  return (
    // <div className="App" style={{ marginBottom: "500px" }}>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
    // </div>
  );
}

export default App;
