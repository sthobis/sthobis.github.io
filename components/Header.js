import Link from "next/link";
import React from "react";

const Header = ({ pathname }) => (
  <nav>
    <Link prefetch href="/">
      <a className={pathname === "/" ? "active" : undefined}>home</a>
    </Link>
    <Link prefetch href="/projects">
      <a className={pathname === "/projects" ? "active" : undefined}>
        projects
      </a>
    </Link>
    <a href="https://github.com/sthobis">github</a>
    <a href="mailto:s.thobi.sinaga@gmail.com?Subject=Hi%20Thobi">email</a>
    <span className="blob" />
    <style jsx>{`
      nav {
        display: flex;
      }

      a {
        color: #fff;
        text-decoration: none;
        padding: 10px;
        position: relative;
        z-index: 2;
      }

      a:hover ~ .blob {
        opacity: 1;
      }

      a:nth-child(1):hover ~ .blob {
        top: 52px;
        left: 40px;
        border-radius: 75% 50% 63% 40%;
        width: 80px;
        height: 42px;
      }

      a:nth-child(2):hover ~ .blob {
        top: 56px;
        left: 111px;
        border-radius: 55% 74% 63% 70%;
        width: 84px;
        height: 44px;
      }

      a:nth-child(3):hover ~ .blob {
        top: 52px;
        left: 188px;
        border-radius: 75% 55% 83% 60%;
        width: 80px;
        height: 46px;
      }

      a:nth-child(4):hover ~ .blob {
        top: 56px;
        left: 258px;
        border-radius: 55% 74% 63% 70%;
        width: 76px;
        height: 40px;
      }

      .active {
        position: relative;
      }

      .active::before {
        content: "";
        display: block;
        position: absolute;
        bottom: 10px;
        left: 10px;
        right: 10px;
        height: 0;
        border-bottom: 1px dashed #f5359e;
      }

      .blob {
        position: absolute;
        z-index: 1;
        top: 50px;
        left: -100px;
        width: 80px;
        height: 44px;
        border-radius: 50%;
        display: block;
        background-color: rgba(255, 255, 255, 0.2);
        transition: 0.5s;
      }
    `}</style>
  </nav>
);

export default Header;
