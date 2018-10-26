import anime from "animejs";
import React, { Component } from "react";
import { ARROW_TYPE, KEYS_CODE, projects } from "../config";

class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevProjectIndex: 0,
      currentProjectIndex: 0
    };
  }

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.animateProjectDescription();
      this.animateProjectThumbnail();
      this.animateNavigation();
    }, 800);
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    anime.remove([
      this.projectDescription,
      this.projectThumbnail,
      this.navigation,
      this.navigationButtons
    ]);
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
    this.animateArrowsButton(ARROW_TYPE.PREV);
    this.prevButton.blur();
    this.setState(
      prevState => ({
        prevProjectIndex: prevState.currentProjectIndex,
        currentProjectIndex:
          prevState.currentProjectIndex !== 0
            ? prevState.currentProjectIndex - 1
            : projects.length - 1
      }),
      () => {
        anime.remove(this.projectDescription);
        this.animateProjectDescription();
        this.animateProjectThumbnailImage();
      }
    );
  };

  nextProject = () => {
    this.animateArrowsButton(ARROW_TYPE.NEXT);
    this.nextButton.blur();
    this.setState(
      prevState => ({
        prevProjectIndex: prevState.currentProjectIndex,
        currentProjectIndex:
          prevState.currentProjectIndex !== projects.length - 1
            ? prevState.currentProjectIndex + 1
            : 0
      }),
      () => {
        anime.remove(this.projectDescription);
        this.animateProjectDescription();
        this.animateProjectThumbnailImage();
      }
    );
  };

  animateProjectThumbnail = () => {
    anime({
      targets: this.projectThumbnail,
      translateX: ["-101%", 0],
      easing: "easeOutCubic",
      duration: 1400
    });
  };

  animateProjectThumbnailImage = () => {
    const { prevProjectIndex, currentProjectIndex } = this.state;
    const translateY = [
      `-${(prevProjectIndex / projects.length) * 100}%`,
      `-${(currentProjectIndex / projects.length) * 100}%`
    ];
    anime({
      targets: this.projectThumbnailImage,
      translateY,
      easing: "easeOutCubic",
      duration: 1400
    });
  };

  animateProjectDescription = () => {
    const isLandscape = window.innerWidth > window.innerHeight;
    if (isLandscape) {
      anime({
        targets: this.projectDescription,
        translateX: ["100%", 0],
        opacity: [0, 1],
        easing: "easeOutCubic",
        delay: 200,
        duration: 1200
      });
    } else {
      anime({
        targets: this.projectDescription,
        translateY: ["-100%", 0],
        opacity: [0, 1],
        easing: "easeOutCubic",
        delay: 200,
        duration: 800
      });
    }
  };

  animateNavigation = () => {
    anime({
      targets: this.navigation,
      opacity: [0, 1],
      easing: "easeOutCubic",
      delay: 400,
      duration: 1000
    });
  };

  animateArrowsButton = type => {
    const [targets, translateX] =
      type === ARROW_TYPE.PREV
        ? [this.prevButtonSvg, [0, -6]]
        : [this.nextButtonSvg, [0, 6]];
    anime.remove(targets);
    let translate = anime({
      targets,
      translateX,
      easing: "easeOutSine",
      duration: 800
    });
    translate.reverse();
    translate.play();
  };

  render() {
    const { currentProjectIndex } = this.state;
    return (
      <div id="projects">
        <section>
          <div className="text">
            <div
              ref={el => {
                this.projectDescription = el;
              }}
              className="wrap"
            >
              <h1>{projects[currentProjectIndex].name}</h1>
              <p>{projects[currentProjectIndex].description}</p>
              <div className="links">
                {projects[currentProjectIndex].links.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
              <div className="tags">
                {projects[currentProjectIndex].tags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="thumbnail">
            <div
              ref={el => {
                this.projectThumbnail = el;
              }}
              className="clip"
            >
              <div
                ref={el => {
                  this.projectThumbnailImage = el;
                }}
                className="container"
              >
                {projects.map((project, i) => (
                  <img
                    key={project.name}
                    src={`/static/images/${project.name}.png`}
                    alt={project.name}
                  />
                ))}
              </div>
            </div>
          </div>
          <div
            ref={el => {
              this.navigation = el;
            }}
            className="arrows"
          >
            <button
              ref={el => {
                this.prevButton = el;
              }}
              type="button"
              onClick={this.prevProject}
              aria-label="previous project"
            >
              <svg
                ref={el => {
                  this.prevButtonSvg = el;
                }}
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
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
              aria-label="next project"
            >
              <svg
                ref={el => {
                  this.nextButtonSvg = el;
                }}
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
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
            justify-content: center;
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

          .links a:first-child {
            margin-left: 0;
          }

          .tags {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-end;
            align-items: center;
            font-size: 1.6rem;
          }

          .tags span {
            line-height: 1;
            margin: 0 0 5px 10px;
            font-style: italic;
          }

          .tags span:first-child {
            margin-left: 0;
          }

          .thumbnail {
            width: 50%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            overflow: hidden;
          }

          .clip {
            position: relative;
            width: 80%;
            overflow: hidden;
            transform: translateX(-101%);
          }

          .clip::before {
            content: "";
            display: block;
            padding-bottom: 100%;
          }

          .container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            display: flex;
            flex-direction: column;
          }

          img {
            width: 100%;
            height: auto;
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

          .arrows button:hover,
          .arrows button:focus {
            background-color: rgba(255, 255, 255, 0.3);
          }

          .arrows button:hover path,
          .arrows button:focus path {
            fill: rgba(255, 255, 255, 1);
          }

          .arrows button path {
            fill: rgba(255, 255, 255, 0.7);
            transition: 0.3s;
          }

          .arrows button:last-child {
            margin-left: 10px;
          }

          @media (max-width: 1400px) {
            .clip {
              width: 75%;
            }
          }

          @media (max-width: 1400px) and (orientation: landscape) {
            h1 {
              font-size: 5rem;
            }
          }

          @media (max-width: 1400px) and (orientation: portrait) {
            #projects {
              margin: 30px 0;
            }

            h1 {
              font-size: 5rem;
            }
          }

          @media (max-width: 1024px) {
            #projects {
              margin: 30px 0;
            }

            .clip {
              width: 100%;
            }
          }

          @media (max-width: 1024px) and (orientation: landscape) {
            .clip {
              width: 100%;
            }
          }

          @media (max-width: 1024px) and (orientation: portrait) {
            section {
              flex-direction: column;
              align-items: center;
            }

            .text {
              width: 100%;
              margin: 30px 0 0 0;
              order: 2;
            }

            .wrap {
              align-items: center;
              text-align: center;
              margin-bottom: 30px;
            }

            .links,
            .tags {
              justify-content: center;
            }

            .links a {
              margin-left: 10px;
              margin-right: 10px;
            }

            .tags span {
              margin-left: 5px;
              margin-right: 5px;
            }

            .thumbnail {
              width: 100%;
              justify-content: center;
              order: 1;
            }

            .arrows {
              position: static;
              order: 3;
            }
          }

          @media (max-width: 767px) {
            section {
              flex-direction: column;
              align-items: center;
            }

            .text {
              width: 100%;
              margin: 30px 0 0 0;
              order: 2;
            }

            .wrap {
              align-items: center;
              text-align: center;
              margin-bottom: 30px;
            }

            .thumbnail {
              width: 100%;
              justify-content: center;
              order: 1;
            }

            .arrows {
              position: static;
              order: 3;
            }
          }

          @media (max-width: 767px) and (orientation: portrait) {
            h1 {
              font-size: 4rem;
            }

            .clip {
              width: 100%;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default ProjectsPage;
