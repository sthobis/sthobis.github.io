import React from "react";
import Nav from "../components/Nav";
import "../styles/projects.less";

const Projects = () => (
  <div className="projects">
    <h1>PROJECTS</h1>
    <ul>
      <li>
        <div className="item">
          <div className="description">
            <h2>Molondry</h2>
            <a
              href="https://molondry.com"
              target="_blank"
              rel="noopener"
            >https://molondry.com</a>
            <a
              href="https://itunes.apple.com/us/app/molondry/id1413776306?ls=1&mt=8"
              target="_blank"
              rel="noopener"
            >https://itunes.apple.com/us/app/molondry/id1413776306?ls=1&mt=8</a>
            <a
              href="https://play.google.com/store/apps/details?id=com.molondry"
              target="_blank"
              rel="noopener"
            >https://play.google.com/store/apps/details?id=com.molondry</a>
            <span className="tags">Express</span>
            <span className="tags">MongoDB</span>
            <span className="tags">React</span>
            <span className="tags">React-Native</span>
            <span className="tags">Expo</span>
            <p>
              Molondry is web/mobile (integrated) app for ordering laundry service.<br/>
              I worked as Developer & Designer.
            </p>
          </div>
        </div>
      </li>
      <li>
        <div className="item">
          <div className="description">
            <h2>Duajarimanis</h2>
            <a
              href="https://duajarimanis.com"
              target="_blank"
              rel="noopener"
            >https://duajarimanis.com</a>
            <span className="tags">Express</span>
            <span className="tags">MongoDB</span>
            <span className="tags">React</span>
            <span className="tags">Next.js</span>
            <p>
              Duajarimanis is a static wedding site generator with a built-in WYSIWYG editor.<br/>
              I worked as Developer & Designer.
            </p>
          </div>
        </div>
      </li>
    </ul>
    <Nav />
  </div>
)

export default Projects
