import anime from "animejs";
import React, { useReducer, useEffect, useRef } from "react";
import Image from "next/image";
import { ARROW_TYPE, KEYS_CODE, projects } from "../config";

const initialState = {
  prevProjectIndex: 0,
  currentProjectIndex: 0,
};

const ACTION = {
  NEXT: "next",
  PREV: "prev",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.NEXT:
      return {
        prevProjectIndex: state.currentProjectIndex,
        currentProjectIndex:
          state.currentProjectIndex !== projects.length - 1
            ? state.currentProjectIndex + 1
            : 0,
      };
    case ACTION.PREV:
      return {
        prevProjectIndex: state.currentProjectIndex,
        currentProjectIndex:
          state.currentProjectIndex !== 0
            ? state.currentProjectIndex - 1
            : projects.length - 1,
      };
    default:
      throw new Error(`Undefined action: '${action.type}'`);
  }
};

const ProjectsPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const projectDescriptionRef = useRef();
  const projectThumbnailRef = useRef();
  const projectThumbnailImageRef = useRef();
  const navigationRef = useRef();
  const prevButtonRef = useRef();
  const prevButtonSvgRef = useRef();
  const nextButtonRef = useRef();
  const nextButtonSvgRef = useRef();

  useEffect(() => {
    const timeout = setTimeout(() => {
      animateProjectDescription();
      animateProjectThumbnail();
      animateNavigation();
    }, 800);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      anime.remove([
        projectDescriptionRef.current,
        projectThumbnailRef.current,
        navigationRef.current,
      ]);
      clearTimeout(timeout);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      reAnimateProject();
    }
  }, [state]);

  const handleKeyDown = (e) => {
    switch (e.which) {
      case KEYS_CODE.UP:
      case KEYS_CODE.LEFT:
        prevProject();
        break;
      case KEYS_CODE.DOWN:
      case KEYS_CODE.RIGHT:
        nextProject();
        break;
      default:
        break;
    }
  };

  const prevProject = () => {
    animateArrowsButton(ARROW_TYPE.PREV);
    prevButtonRef.current.blur();
    dispatch({ type: ACTION.PREV });
  };

  const nextProject = () => {
    animateArrowsButton(ARROW_TYPE.NEXT);
    nextButtonRef.current.blur();
    dispatch({ type: ACTION.NEXT });
  };

  const reAnimateProject = () => {
    anime.remove(projectDescriptionRef.current);
    anime.remove(projectThumbnailImageRef.current);
    animateProjectDescription();
    animateProjectThumbnailImage();
  };

  const animateProjectThumbnail = () => {
    anime({
      targets: projectThumbnailRef.current,
      translateX: ["-101%", 0],
      easing: "easeInOutQuad",
      duration: 1400,
    });
  };

  const animateProjectThumbnailImage = () => {
    const translateY = `${
      (state.currentProjectIndex / projects.length) * -100
    }%`;
    anime({
      targets: projectThumbnailImageRef.current,
      translateY,
      easing: "easeInOutQuad",
      duration: 1400,
    });
  };

  const animateProjectDescription = () => {
    const isLandscape = window.innerWidth > window.innerHeight;
    if (isLandscape) {
      anime({
        targets: projectDescriptionRef.current,
        translateX: ["100%", 0],
        opacity: [0, 1],
        easing: "easeInOutQuad",
        delay: 200,
        duration: 1200,
      });
    } else {
      anime({
        targets: projectDescriptionRef.current,
        translateY: ["-100%", 0],
        opacity: [0, 1],
        easing: "easeInOutQuad",
        delay: 300,
        duration: 900,
      });
    }
  };

  const animateNavigation = () => {
    anime({
      targets: navigationRef.current,
      opacity: [0, 1],
      easing: "easeOutCubic",
      delay: 400,
      duration: 1000,
    });
  };

  const animateArrowsButton = (type) => {
    const [targets, translateX] =
      type === ARROW_TYPE.PREV
        ? [prevButtonSvgRef.current, [0, -6]]
        : [nextButtonSvgRef.current, [0, 6]];
    anime.remove(targets);
    let translate = anime({
      targets,
      translateX,
      easing: "easeOutSine",
      duration: 800,
    });
    translate.reverse();
    translate.play();
  };

  return (
    <div id="projects">
      <section>
        <div className="text">
          <div ref={projectDescriptionRef} className="wrap">
            <h1>{projects[state.currentProjectIndex].name}</h1>
            <p>{projects[state.currentProjectIndex].description}</p>
            <div className="links">
              {projects[state.currentProjectIndex].links.map((link, i) => (
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
              {projects[state.currentProjectIndex].tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="thumbnail">
          <div ref={projectThumbnailRef} className="clip">
            <div ref={projectThumbnailImageRef} className="container">
              {projects.map((project, i) => (
                <div className="image" key={project.name}>
                  <Image
                    src={`/images/${project.name}.png`}
                    alt={project.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div ref={navigationRef} className="arrows">
          <button
            ref={prevButtonRef}
            type="button"
            onClick={prevProject}
            aria-label="previous project"
          >
            <svg
              ref={prevButtonSvgRef}
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
            ref={nextButtonRef}
            type="button"
            onClick={nextProject}
            aria-label="next project"
          >
            <svg
              ref={nextButtonSvgRef}
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
          margin: 30px 0;
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
          justify-content: flex-end;
          align-items: center;
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
          width: 75%;
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

        .image {
          position: relative;
        }

        .image::before {
          content: "";
          display: block;
          padding-bottom: 100%;
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
            font-size: 5vw;
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

          h1 {
            font-size: 4rem;
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
          .clip {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;
