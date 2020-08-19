import React from 'react';
import { GlobalStyle, Button } from '@careteen/lan';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="Lib" href="https://github.com/careteenL/lan" target="_blank" rel="noopener noreferrer">@careteen/lan</a>
        <GlobalStyle />
        <Button>你来点我啊</Button>
      </header>
    </div>
  );
}

export default App;
