import React from 'react';
import './App.css';
import { SocialIcon } from 'react-social-icons';
import me from './assets/me.png';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Hey, I am Martin!</h1>
        <section>
          <img className="image" src={me} alt="me"/>
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
        <SocialIcon className="social-icon" fgColor="grey" bgColor="transparent"
          url="https://linkedin.com/in/martnaum" target="_blank" rel="noopener noreferrer"
        />
        <SocialIcon className="social-icon" fgColor="grey" bgColor="transparent"
          url="https://github.com/martnaum" target="_blank" rel="noopener noreferrer"
        />
        <SocialIcon className="social-icon" fgColor="grey" bgColor="transparent"
          url="https://twitter.com/martnaum" target="_blank" rel="noopener noreferrer"
        />
        <SocialIcon className="social-icon" fgColor="grey" bgColor="transparent"
          url="mailto:martin@naumann.world"
        />
      </footer>
    </div>
  );
}

export default App;
