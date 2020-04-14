import React from 'react';
import './App.css';
import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Hey, I am Martin!</h1>
        <section>
          <p>Beat ordinary thinking.</p>
        </section>
      </header>
      <section className="description">
        <section className="descriptionBlock">
          <p>Agile Project Management</p>
          <p>Software Development</p>
        </section>
        <section className="descriptionBlock">
          <p>Open Source Enthusiast</p>
          <p>Platform Technologies</p>
        </section>
      </section>
      <footer>
        <SocialIcon className="social-icon" fgColor="grey" bgColor="transparent" url="https://linkedin.com/in/martnaum"/>
        <SocialIcon className="social-icon" fgColor="grey" bgColor="transparent" url="https://github.com/martnaum"/>
        <SocialIcon className="social-icon" fgColor="grey" bgColor="transparent" url="https://twitter.com/martnaum"/>
      </footer>
    </div>
  );
}

export default App;
