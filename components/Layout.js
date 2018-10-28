import anime from "animejs";
import Head from "next/head";
import React, { Component } from "react";
import Header from "./Header";

const getShapes = pathname => {
  switch (pathname) {
    case "/":
      return [
        "M 312.5,232.5 c 247,-110 597,-72 744,0 s 201,158 7,295 s -603,-113 -804,0 S 65.5,342.5 312.5,232.5 z",
        "M 312.5,232.5 c 273.5,-60.5 602.5,20.5 744,0 s 166.5,94.5 7,295 s -609.5,-29.5 -804,0 S 39,293 312.5,232.5 z"
      ];
    case "/projects":
      return [
        "M 312.5,232.5 c -128,-170 411,-315 744,0 s -338,54 7,295 s -696,173 -804,0 S 440.5,402.5 312.5,232.5 z",
        "M 312.5,232.5 c -166.5,-232.5 581.5,-252.5 744,0 s -199.5,81.5 7,295 s -808.5,170.5 -804,0 S 479,465 312.5,232.5 z"
      ];
    default:
      return [
        "M 312.5,232.5 c 247,-110 597,-72 744,0 s 201,158 7,295 s -603,-113 -804,0 S 65.5,342.5 312.5,232.5 z",
        "M 312.5,232.5 c 273.5,-60.5 602.5,20.5 744,0 s 166.5,94.5 7,295 s -609.5,-29.5 -804,0 S 39,293 312.5,232.5 z"
      ];
  }
};

const getBackgroundColor = pathname => {
  switch (pathname) {
    case "/":
      return "#363dc2";
    case "/projects":
      return "rebeccapurple";
    case "/about":
      return "#8a2856";
    default:
      return "#363dc2";
  }
};

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialShape: getShapes(this.props.pathname)[0]
    };
  }
  componentDidMount() {
    this.animateBackground(this.props.pathname);
  }

  componentDidUpdate(prevProps) {
    if (this.props.pathname !== prevProps.pathname) {
      this.timeout && clearTimeout(this.timeout);
      anime.remove(this.background);
      this.morphBackground(this.props.pathname);
    }
  }

  morphBackground = pathname => {
    anime({
      targets: this.background,
      d: getShapes(pathname)[0],
      duration: 1000,
      easing: "easeInOutQuad"
    }).finished.then(() => {
      this.animateBackground(pathname);
    });
  };

  animateBackground = pathname => {
    anime({
      targets: this.background,
      d: getShapes(pathname),
      easing: "linear",
      duration: 5000,
      direction: "alternate",
      loop: true
    });
  };

  render() {
    const { pathname, children } = this.props;
    const { initialShape } = this.state;
    return (
      <div className="layout">
        <Head>
          <title>
            {pathname === "/projects"
              ? "Projects - Stefanus Thobi Sinaga"
              : "Stefanus Thobi Sinaga"}
          </title>
        </Head>
        <div className="background">
          <svg width="1366" height="768" viewBox="0 0 1366 768">
            <path
              ref={el => {
                this.background = el;
              }}
              d={initialShape}
            />
          </svg>
        </div>
        <div className="content">
          <Header pathname={pathname} />
          <main>{children}</main>
          <footer>
            <a
              className="source"
              href="https://github.com/sthobis/sthobis.github.io/tree/dev"
            >
              {`< view source >`}
            </a>
            <div className="socmed">
              <a href="https://twitter.com/iBoht">twitter</a>
              <a href="https://instagram.com/thobiisnaga">instagram</a>
            </div>
          </footer>
        </div>
        <style jsx>{`
          .layout {
            position: relative;
          }

          .background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background-color: ${getBackgroundColor(pathname)};
            transition: 1s;
          }

          svg {
            width: 100%;
            height: 100%;
            transform-origin: 50% 50%;
            transform: scale(1.3);
            transition: 1s;
          }

          svg path {
            fill: rgba(0, 0, 0, 0.15);
          }

          .content {
            position: relative;
            z-index: 2;
            padding: 50px;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }

          main {
            flex: auto;
            display: flex;
            margin: 0 10px;
          }

          footer {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
          }

          .source {
            color: #fff;
            text-decoration: none;
            margin: 0 0 0 10px;
          }

          .socmed {
            display: flex;
            margin: 0 0 0 10px;
          }

          .socmed a {
            color: #fff;
            text-decoration: none;
            margin: 0 10px;
          }

          @media (orientation: portrait) {
            svg {
              transform: scale(2.6) rotate(114deg);
            }
          }

          @media (max-width: 767px) {
            .content {
              padding: 30px;
            }
          }

          @media (max-width: 767px) and (orientation: landscape) {
          }

          @media (max-width: 767px) and (orientation: portrait) {
            .content {
              align-items: center;
              min-height: 100vh;
            }

            header {
              flex: none;
            }

            main {
              flex: auto;
              min-height: 100%;
            }

            footer {
              flex: none;
              flex-direction: column;
              align-items: center;
            }

            .source {
              margin: 0 0 10px 0;
            }

            .socmed {
              position: relative;
              right: auto;
              bottom: auto;
              writing-mode: lr;
              text-align: center;
              display: flex;
              justify-content: center;
              margin: 0;
            }

            .socmed a {
              display: block;
              height: 30px;
            }
          }
        `}</style>
        <style global jsx>{`
          * {
            box-sizing: border-box;
          }

          html {
            font-size: 10px;
          }

          body {
            color: #fff;
            margin: 0;
            font-family: "Ropa Sans", sans-serif;
            font-size: 2rem;
            line-height: 1.5;
            background: #363dc2;
            overflow-x: hidden;
          }

          input,
          textarea,
          button {
            font-family: "Ropa Sans", sans-serif;
          }
        `}</style>
      </div>
    );
  }
}

export default Layout;
