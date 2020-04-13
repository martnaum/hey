import React from 'react';
import './App.css';
import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>martnaum</h1>
      </header>
      <section className="social">
        <SocialIcon className="social-icon" url="https://linkedin.com/in/martin-naumann"/>
        <SocialIcon className="social-icon" url="https://github.com/martnaum"/>
      </section>
    </div>
  );
}

export default App;
