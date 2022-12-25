import React from 'react';
import './App.css';
import { Button } from './components/Button/Button';

function App() {
  return (
    <>
      <h1>Your Custom Button component</h1>
      <Button
        style={{ margin: '10px' }}
        onClick={() => console.log('Clicked primary button')}
        type='primary'
      >
        Click me!
      </Button>
      <Button
        style={{ margin: '10px' }}
        onClick={() => console.log('Clicked secondary button')}
        type='secondary'
      >
        Click me!
      </Button>
    </>
  );
}

export default App;
