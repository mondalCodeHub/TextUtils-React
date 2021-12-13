import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import About from './Components/About';
// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled", "success");

      // setInterval(() => {
      //   document.title = "TextAnalyzer -Dark Mode"
      // }, 1000);
      // setInterval(() => {
      //   document.title = "Non Profit Platform"
      // }, 1500);
      // document.title = "TextAnalyzer -Dark Mode"


    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
      // document.title = "TextAnalyzer -Light Mode"
      // document.title = "TextAnalyzer -Light Mode"

    }
  }
  return (
    <>
      <Router>
        <NavBar title="MCH21" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm headingOne="Enter any text to use below features" mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
          
        </div>
      </Router>
    </>
  );
}

export default App;

{/* <Home /> */}
{/* <About /> */}
// https://reactrouter.com/native/guides/quick-start
// ARUP MONDAL (@mondalCodeHub)