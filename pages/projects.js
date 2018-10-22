import anime from "animejs";
import React, { Component } from "react";

const projects = [
  {
    name: "molondry",
    links: [
      {
        href: "https://molondry.com",
        text: "Live site"
      },
      {
        href: "https://itunes.apple.com/us/app/molondry/id1413776306?ls=1&mt=8",
        text: "AppStore"
      },
      {
        href: "https://play.google.com/store/apps/details?id=com.molondry",
        text: "PlayStore"
      }
    ],
    tags: ["express", "mongodb", "react", "react-native", "expo", "ui design"],
    description:
      "Molondry is web / mobile (integrated) app for ordering laundry service."
  },
  {
    name: "duajarimanis",
    links: [
      {
        href: "https://duajarimanis.com",
        text: "Live site"
      }
    ],
    tags: ["express", "mongodb", "react", "next.js", "ui design"],
    description:
      "Duajarimanis is a static wedding site generator with a built-in WYSIWYG editor."
  },
  {
    name: "igfluencer",
    links: [
      {
        href: "https://igfluencer.id",
        text: "Live site"
      }
    ],
    tags: ["express", "mongodb", "react", "next.js", "ui design"],
    description:
      "Igfluencer is an online platform to find top instagram influencers in Indonesia."
  }
];

const KEYS_CODE = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

class ProjectsPage extends Component {
  state = {
    activeProjectIndex: 0
  };

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.animateProjectText();
      this.animateProjectThumbnail();
      this.animateArrowsContainer();
    }, 800);
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    anime.remove("#projects .text .wrap");
    anime.remove("#projects .thumbnail img");
    anime.remove("#projects .arrows");
    clearTimeout(this.timeout);
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = e => {
    switch (e.which) {
      case KEYS_CODE.UP:
      case KEYS_CODE.LEFT:
        this.prevProject();
        break;
      case KEYS_CODE.DOWN:
      case KEYS_CODE.RIGHT:
        this.nextProject();
        break;
      default:
        break;
    }
  };

  prevProject = () => {
    this.prevButton.blur();
    this.setState(
      prevState => ({
        activeProjectIndex:
          prevState.activeProjectIndex !== 0
            ? prevState.activeProjectIndex - 1
            : projects.length - 1
      }),
      () => {
        anime.remove("#projects .text .wrap");
        anime.remove("#projects .thumbnail img");
        this.animateProjectText();
        this.animateProjectThumbnail();
      }
    );
  };

  nextProject = () => {
    this.nextButton.blur();
    this.setState(
      prevState => ({
        activeProjectIndex:
          prevState.activeProjectIndex !== projects.length - 1
            ? prevState.activeProjectIndex + 1
            : 0
      }),
      () => {
        anime.remove("#projects .text .wrap");
        anime.remove("#projects .thumbnail img");
        this.animateProjectText();
        this.animateProjectThumbnail();
      }
    );
  };

  animateProjectText = () => {
    anime({
      targets: "#projects .text .wrap",
      translateX: ["100%", 0],
      opacity: [0, 1],
      easing: "easeOutCubic",
      delay: 200,
      duration: 1200
    });
  };

  animateProjectThumbnail = () => {
    anime({
      targets: "#projects .thumbnail img",
      translateX: ["-100%", 0],
      easing: "easeOutCubic",
      duration: 1400
    });
  };

  animateArrowsContainer = () => {
    anime({
      targets: "#projects .arrows",
      opacity: [0, 1],
      easing: "easeOutCubic",
      delay: 400,
      duration: 1000
    });
  };

  render() {
    const { activeProjectIndex } = this.state;
    return (
      <div id="projects">
        <section>
          <div className="text">
            <div className="wrap">
              <h1>{projects[activeProjectIndex].name}</h1>
              <p>{projects[activeProjectIndex].description}</p>
              <div className="links">
                {projects[activeProjectIndex].links.map(link => (
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.text}
                  </a>
                ))}
              </div>
              <div className="tags">
                {projects[activeProjectIndex].tags.map(tag => (
                  <span>{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="thumbnail">
            <div>
              <img
                src={`/static/images/${projects[activeProjectIndex].name}.png`}
                alt={projects[activeProjectIndex].name}
              />
            </div>
          </div>
          <div className="arrows">
            <button
              ref={el => (this.prevButton = el)}
              type="button"
              onClick={this.prevProject}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 256 512"
                height="1em"
                width="1em"
              >
                <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
              </svg>
            </button>
            <button
              ref={el => (this.nextButton = el)}
              type="button"
              onClick={this.nextProject}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 256 512"
                height="1em"
                width="1em"
              >
                <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
              </svg>
            </button>
          </div>
        </section>
        <style jsx>{`
          #projects {
            width: 100%;
            align-self: center;
            display: flex;
            align-items: stretch;
          }

          section {
            position: relative;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: stretch;
          }

          .text {
            width: calc(50% - 50px);
            display: flex;
            align-items: center;
            margin: 0 50px 0 0;
            overflow: hidden;
          }

          .wrap {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            width: 100%;
            margin: 0 0 50px 0;
            text-align: right;
            opacity: 0;
          }

          h1 {
            margin: 0;
            font-size: 8rem;
            font-family: Raleway, sans-serif;
            text-transform: capitalize;
            line-height: 1;
          }

          p {
            margin: 20px 0 0 0;
          }

          .links {
            display: flex;
            flex-wrap: wrap;
            margin: 10px 0;
          }

          .links a {
            margin: 0 0 10px 20px;
            color: #fff;
            text-decoration: none;
            border-bottom: 1px dashed #f5359e;
          }

          .tags {
            display: flex;
            font-size: 1.6rem;
          }

          .tags span {
            margin: 0 0 10px 10px;
            font-style: italic;
          }

          .thumbnail {
            width: 50%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            overflow: hidden;
          }

          .thumbnail > div {
            position: relative;
            width: 80%;
            overflow: hidden;
          }

          .thumbnail > div::before {
            content: "";
            display: block;
            padding-bottom: 100%;
          }

          .thumbnail img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            transform: translateX(-100%);
          }

          .arrows {
            position: absolute;
            right: calc(50% + 50px);
            bottom: 0;
            display: flex;
            opacity: 0;
          }

          .arrows button {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px 20px;
            border: none;
            border-radius: 2px;
            background-color: rgba(255, 255, 255, 0.15);
            cursor: pointer;
            color: #fff;
            font-size: 1.8rem;
            outline: none;
            transition: 0.3s;
          }

          .arrows button:hover {
            background-color: rgba(255, 255, 255, 0.3);
          }

          .arrows button:hover path {
            fill: rgba(255, 255, 255, 1);
          }

          .arrows button path {
            fill: rgba(255, 255, 255, 0.7);
            transition: 0.3s;
          }

          .arrows button:last-child {
            margin-left: 10px;
          }
        `}</style>
      </div>
    );
  }
}

export default ProjectsPage;