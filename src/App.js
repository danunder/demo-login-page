import React, { useState, useEffect } from 'react'
import './App.css';
import Button from '@material-ui/core/Button'

function App() {

  // Deines visual mode variables
  const HOME = "HOME"
  const SIGN_UP = "SIGN_UP"
  const LOG_IN = "LOG_IN"
  const [visualMode, setVisualMode ] = useState(HOME) 


  return (
    <div className="App">
      {visualMode === "HOME" &&
        <div>
        <Button onClick={setVisualMode(SIGN_UP)}>Sign Up</Button>
        <Button onClick={setVisualMode(LOG_IN)}>Log In</Button>
        </div>
      }
      {visualMode === "SIGN_UP" &&
        <div>
        <h1>Sign Up Form</h1>
        <Button onClick={setVisualMode(HOME)}>Cancel</Button>
        </div>
      }
      {visualMode === "LOG_IN" &&
        <div>
        <h1>Log In Form</h1>
        <Button onClick={setVisualMode(HOME)}>Cancel</Button>
        </div>
      }
    </div>
  );
}

export default App;
