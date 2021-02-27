import React, { useState, useEffect } from 'react'
import './App.css';
import Button from '@material-ui/core/Button'
import Home from './components/Home'

function App() {

  // visualMode hook controls which components are rendered on the screen
  const HOME = "HOME"
  const SIGN_UP = "SIGN_UP"
  const LOG_IN = "LOG_IN"
  const [visualMode, setVisualMode ] = useState(HOME) 


  return (
    <div className="App">
      {visualMode === "HOME" &&
        <Home
         logIn={() => setVisualMode(LOG_IN)}
         signUp={() => setVisualMode(SIGN_UP)}
        />     
          
        
      }
      {visualMode === "SIGN_UP" &&
        <div>
        <h1>Sign Up Form</h1>
        <Button onClick={() => setVisualMode(HOME)}>Cancel</Button>
        </div>
      }
      {visualMode === "LOG_IN" && 
        <div>
        <h1>Log In Form</h1>
        <Button onClick={() => setVisualMode(HOME)}>Cancel</Button>
        </div>
      }
    </div>
  );
}

export default App;
