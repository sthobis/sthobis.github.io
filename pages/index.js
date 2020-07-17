import anime from "animejs";
import React, { useEffect, useRef } from "react";

const IndexPage = () => {
  const titleRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const descriptionRef = useRef();

  useEffect(() => {
    const timeout = setTimeout(animateText, 800);

    return () => {
      anime.remove([
        titleRef.current,
        firstNameRef.current,
        lastNameRef.current,
        descriptionRef.current,
      ]);
      clearTimeout(timeout);
    };
  }, []);

  const animateText = () => {
    titleRef.current &&
      anime({
        targets: titleRef.current,
        translateX: ["70%", 0],
        opacity: 1,
        duration: 800,
        easing: "easeOutCirc",
      });
    firstNameRef.current &&
      lastNameRef.current &&
      anime({
        targets: [firstNameRef.current, lastNameRef.current],
        translateY: (el, i) => (i === 0 ? ["100%", 0] : ["-100%", 0]),
        opacity: 1,
        delay: 800,
        duration: 600,
      });
    descriptionRef.current &&
      anime({
        targets: descriptionRef.current,
        rotateX: [110, 0],
        opacity: 1,
        delay: 1500,
        duration: 600,
      });
  };

  return (
    <div id="home">
      <div>
        <h1 ref={titleRef}>
          <span ref={firstNameRef}>stefanus</span>
          <span>thobi</span>
          <span ref={lastNameRef}>sinaga</span>
        </h1>
        <h2 ref={descriptionRef}>
          javascript <span>web / mobile</span> developer
        </h2>
      </div>
      <style jsx>{`
        #home {
          align-self: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 50px auto;
        }

        p {
          margin: 0;
        }

        h1 {
          font-family: Raleway, sans-serif;
          font-size: 12rem;
          font-weight: 800;
          text-transform: capitalize;
          margin: 0;
          line-height: 0.9;
          padding: 0 0 0 50px;
          position: relative;
          opacity: 0;
        }

        h1::before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 8px;
          height: 50%;
          background-color: #fff;
        }

        h1::after {
          content: "";
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 8px;
          height: 50%;
          background-color: #f5359e;
        }

        h1 span {
          display: block;
          position: relative;
        }

        h1 span:nth-child(1),
        h1 span:nth-child(3) {
          opacity: 0;
          z-index: 1;
        }

        h1 span:nth-child(2) {
          color: #f5359e;
          z-index: 2;
        }

        h2 {
          margin: 50px 0 0 0;
          font-size: 3rem;
          font-weight: 400;
          text-align: right;
          line-height: 1.1;
          opacity: 0;
          transform-origin: 50% 0;
        }

        h2 span {
          color: #f5359e;
        }

        h2 a {
          color: #fff;
          text-decoration: none;
          border-bottom: 1px dashed #f5359e;
        }

        @media (max-width: 1400px) {
          h1 {
            font-size: 8.4rem;
          }
        }

        @media (max-width: 1400px) and (orientation: portrait) {
          h1 {
            font-size: 12rem;
          }
        }

        @media (max-width: 1024px) and (orientation: portrait) {
          h1 {
            font-size: 10rem;
          }
        }

        @media (max-width: 767px) {
          h1 {
            font-size: 4rem;
            padding-left: 35px;
          }

          h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default IndexPage;
