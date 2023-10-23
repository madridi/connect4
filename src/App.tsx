import React from 'react';

import { Connect4 } from "./features/connect4/Connect4";
import { Connect4ContextProvider } from "./contexts/Connect4/Connect4Context";

import './App.css';

function App() {
  return (
    <Connect4ContextProvider>
      <Connect4 />
    </Connect4ContextProvider>
  );
}

export default App;
