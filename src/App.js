import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About'
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      document.title = 'Textutils - Dark Mode';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.title = 'Textutils - Light Mode';
      showAlert("Dark mode has been disabled", "success");
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout (() => {
      setAlert(null);
    },1500)
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route path='/about' element={<About mode={mode}/>} />
          <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} />
        </Routes>
      </div>
    </Router>
    </>
  );

}

export default App;