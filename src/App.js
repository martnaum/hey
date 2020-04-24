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
          <p>Agile Project Manager</p>
          <p>Software Developer</p>
        </section>
        <section className="descriptionBlock">
          <p>Team Leader and Mentor</p>
          <p>Troubleshooter</p>
        </section>
      </section>
      <footer>
        <SocialIcon className="social-icon" fgColor="grey" bgColor="transparent" url="https://linkedin.com/in/martnaum"/>
        <SocialIcon className="social-icon" fgColor="grey" bgColor="transparent" url="https://github.com/martnaum"/>
        <SocialIcon className="social-icon" fgColor="grey" bgColor="transparent" url="https://twitter.com/martnaum"/>
        <SocialIcon className="social-icon" fgColor="grey" bgColor="transparent" url="mailto:martin@naumann.world"/>
      </footer>
    </div>
  );
}

export default App;
