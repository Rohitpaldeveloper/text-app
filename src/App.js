import './App.css';
// import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import React, { useState } from 'react';
import Alert from './Component/Alert';
// import { Route } from "react-router";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = 'grey';
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
    }
};
  return (
    <>  
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar /> */}
      {/* <Navbar title="TextUtils" /> */}
      {/* <Router> */}

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert="This is alert"/>
      <div className="container">
      {/* <Switch> */}
      {/* <Route exact path="/ about"> */}
      {/* <About /> */}
      {/* </Route> */}
      {/* <Route exact path="/"> */}
      <TextForm heading="Enter The Text To Analyize" mode={mode}/>
      {/* </Route> */}
      {/* </Switch> */}
      {/* <About /> */}
      </div>
      {/* </Router> */}

    </>
  );
}
export default App;