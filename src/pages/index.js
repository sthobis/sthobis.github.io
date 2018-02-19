import React from 'react'
import projectThumbnail_1 from '../assets/projects-1.png'

const IndexPage = () => (
  <div>
    <section className="cover">
      <div className="cover-text">
        <h1>Hi, my name is <span className="red-pill">Thobi</span></h1>
        <p>I'm a <span className="red-pill">{`<Web/>`}</span> Developer</p>
      </div>
    </section>
    <section className="projects">
      <h2>Works</h2>
      <ul>
        <li>
          <div className="projects-item">
            <div className="thumbnail">
              <img src={projectThumbnail_1} alt='Duajarimanis' />
            </div>
            <div className="projects-desc">
              <h3>Duajarimanis</h3>
              <a
                href="https://duajarimanis.com"
                target="_blank"
                rel="noopener"
              >https://duajarimanis.com</a>
              <span className="tags">Express</span>
              <span className="tags">React</span>
              <span className="tags">Next.js</span>
              <span className="tags">Fullstack Dev</span>
              <p>Duajarimanis is a static wedding site generator.</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section className="contact">
      <h2>Got question? Contact me :</h2>
      <div>
        <a href="mailto:s.thobi.sinaga@gmail.com?Subject=Hello%20Thobi">
          Email
        </a>
        <a href="https://twitter.com/iboht">Twitter</a>
      </div>
    </section>
  </div>
)

export default IndexPage
