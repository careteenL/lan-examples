import React from 'react';
import { GlobalStyle, Button, color, Icon } from '@careteen/lan';
import './App.css';

color.primary = '#e43';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="Lib" href="https://github.com/careteenL/lan" target="_blank" rel="noopener noreferrer">@careteen/lan</a>
        <GlobalStyle />
        <Button appearance="primary">你来点我啊</Button>
        <Icon icon="admin" color="#fff" />
      </header>
    </div>
  );
}

export default App;
