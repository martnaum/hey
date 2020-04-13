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
        <SocialIcon className="social-icon" fgColor="grey" bgColor="transparent" url="https://linkedin.com/in/martnaum"/>
        <SocialIcon className="social-icon" fgColor="grey" bgColor="transparent" url="https://github.com/martnaum"/>
        <SocialIcon className="social-icon" fgColor="grey" bgColor="transparent" url="https://twitter.com/martnaum"/>
      </section>
    </div>
  );
}

export default App;
