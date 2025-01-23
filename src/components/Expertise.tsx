import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faStudiovinari,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "React Native",

  "TypeScript",
  "JavaScript",
  "Vue",
  "Laravel",
  "HTML5",
  "CSS3",
  "SASS",
  "Golang",
  "Python",
  "SQL",
  "PostgreSQL",
  "Postman",
];

const labelsSecond = [
  "Git",
  "GitHub Actions",
  "Docker",
  "Google Cloud",
  "Azure",
  "Linux",
];

const labelsThird = [
  "Standup Comedy",
  "Content Writing",
  "Public Speaking",
  "Acting",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
              I have built a diverse array of web applications from scratch
              using modern technologies such as React, Node js and Golang. I
              have a strong proficiency in the SDLC process and frontend +
              backend development.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps & Automation</h3>
            <p>
              Once the application is built, I help clients set up DevOps
              testing, CI/CD pipelines, and deployment automation to support the
              successful Go-Live.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faStudiovinari} size="3x" />
            <h3>Standup COmedian</h3>
            <p>I do have career on standup comedy and content creator.</p>
            <div className="flex-chips">
              <span className="chip-title">Skill stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
