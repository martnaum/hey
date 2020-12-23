import React from 'react';
import './App.css';
import { SocialIcon } from 'react-social-icons';
import me from './assets/me.png';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';

function App() {
  return (
    <div className="App">
      <section className="base">
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
      </section>
      <section>
        <Timeline align="left" className="timeline">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Eat</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Code</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Sleep</TimelineContent>
          </TimelineItem>
        </Timeline>
      </section>
    </div>
  );
}

export default App;
