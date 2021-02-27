import React, { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button'

export default function App(props) {

  const { logIn, signUp } = props;
  
  return (
    
      
        <div>
        <Button onClick={() => logIn()}>Log In</Button>
        <Button onClick={() => signUp()}>Sign Up</Button>
        </div>
      
      
    
  );
}