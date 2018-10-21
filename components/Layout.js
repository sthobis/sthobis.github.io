import React from "react";
import Header from "./Header";

const shapes = {
  "/":
    "M 312.5,232.5 c 247,-110 597,-72 744,0 s 201,158 7,295 s -603,-113 -804,0 S 65.5,342.5 312.5,232.5 z",
  "/about":
    "M 312.5,232.5 c -128,-170 411,-315 744,0 s -338,54 7,295 s -696,173 -804,0 S 440.5,402.5 312.5,232.5 z",
  "/projects":
    "M 254.3,208.7 c 315.9,-239.3 324.1,-78.5 493.9,-85 s 586.1,-279.9 388.9,209.7 s -273,492.4 -415.4,272.5 S -61.6,448 254.3,208.7 z",
  "/_error":
    "M 312.5,232.5 c 247,-110 597,-72 744,0 s 201,158 7,295 s -603,-113 -804,0 S 65.5,342.5 312.5,232.5 z"
};

const backgrounds = {
  "/": "#363dc2",
  "/about": "#8a2856",
  "/projects": "rebeccapurple",
  "/_error": "#363dc2"
};

const Layout = ({ pathname, children }) => (
  <>
    <div className="background">
      <svg width="1366" height="768" viewBox="0 0 1366 768">
        <path d={shapes[pathname]} />
      </svg>
    </div>
    <main className="content">
      <Header pathname={pathname} />
      <div className="source">
        <a href="https://github.com/sthobis/sthobis.github.io/tree/dev">
          view source
        </a>
      </div>
      <div className="sns">
        <a href="https://twitter.com/iBoht">twitter</a>
        <a href="https://instagram.com/thobiisnaga">instagram</a>
      </div>
      {children}
    </main>
    <style jsx>{`
      .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: ${backgrounds[pathname]};
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
        transition: 1s;
      }

      main {
        position: relative;
        z-index: 2;
        padding: 50px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }

      .source {
        position: fixed;
        left: 60px;
        bottom: 40px;
      }

      .source a {
        color: #fff;
        text-decoration: none;
      }

      .sns {
        position: fixed;
        right: 50px;
        bottom: 50px;
        text-align: right;
        writing-mode: vertical-lr;
      }

      .sns a {
        color: #fff;
        text-decoration: none;
        margin-top: 20px;
      }

      @media (orientation: portrait) {
        svg {
          transform: scale(2.6) rotate(114deg);
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
      }
    `}</style>
  </>
);

export default Layout;
