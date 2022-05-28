import './App.css';
import About from './components/About';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {Routes} from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() { 
  
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000)
  }

  const toggleMode = ()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#080c29';
      document.body.style.color='white';
      showAlert(" Dark mode has been enabled ","success")

    }
    else  {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert(" Light mode has been enabled ","success")
    }
  }
  return ( 
    <>
    <Router>
      <Navbar title = "TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className='container my-3'>
        <Routes>
              <Route exact path="/about" element={<About toggleMode={toggleMode}/>} >
              </Route>
              <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} toggleMode={toggleMode}/>}>
              </Route>
        </Routes>
      </div>  
    </Router>
  </>
  );
}

export default App;
