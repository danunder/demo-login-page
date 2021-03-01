import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'

export default function Home(props) {

  const { logIn, signUp } = props;
  
  return (
    
      
        <Paper>
        <Button onClick={() => logIn()}>Log In</Button>
        <Button onClick={() => signUp()}>Sign Up</Button>
        </Paper>
      
      
    
  );
}