import React from "react";
import Layout from "../components/Layout";
import "../styles/projects.less";

const Projects = () => (
  <Layout title="Projects - Thobi Sinaga">
    <div className="page-projects">
      <h1>projects?</h1>
      <ul>
        <li>
          <div className="item">
            <div className="description">
              <h2>Molondry</h2>
              <div className="links">
                <a
                  href="https://molondry.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >https://molondry.com</a>
                <a
                  href="https://itunes.apple.com/us/app/molondry/id1413776306?ls=1&mt=8"
                  target="_blank"
                  rel="noopener noreferrer"
                >https://itunes.apple.com/us/app/molondry/id1413776306?ls=1&mt=8</a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.molondry"
                  target="_blank"
                  rel="noopener noreferrer"
                >https://play.google.com/store/apps/details?id=com.molondry</a>
              </div>
              <div className="tags">
                <span>Express</span>
                <span>MongoDB</span>
                <span>React</span>
                <span>React-Native</span>
                <span>Expo</span>
              </div>
              <p>
                Molondry is web / mobile (integrated) app for ordering laundry service.<br/>
                I worked as Developer & Designer.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="item">
            <div className="description">
              <h2>Duajarimanis</h2>
              <div className="links">
                <a
                  href="https://duajarimanis.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >https://duajarimanis.com</a>
              </div>
              <div className="tags">
                <span>Express</span>
                <span>MongoDB</span>
                <span>React</span>
                <span>Next.js</span>
              </div>
              <p>
                Duajarimanis is a static wedding site generator with a built-in WYSIWYG editor.<br/>
                I worked as Developer & Designer.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </Layout>
)

export default Projects
