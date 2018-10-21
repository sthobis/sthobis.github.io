export default () => (
  <div className="root">
    <div>
      <h1>
        STEFANUS
        <span>THOBI</span>
        SINAGA
      </h1>
      <h2>
        javascript <span>web / mobile</span> developer
        <br />
        available for{" "}
        <a href="mailto:s.thobi.sinaga@gmail.com?Subject=Hi%20Thobi">hire</a>
      </h2>
    </div>
    <style jsx>{`
      .root {
        margin: 100px 0 100px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      p {
        margin: 0;
      }

      h1 {
        font-size: 12rem;
        margin: 0;
        line-height: 0.9;
        padding: 0 0 0 50px;
        position: relative;
        font-weight: 400;
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
        color: #f5359e;
        font-weight: 600;
      }

      h2 {
        margin: 10px 0 0 0;
        font-weight: 400;
        text-align: right;
        line-height: 1.1;
      }

      h2 span {
        color: #f5359e;
      }

      h2 a {
        color: #fff;
        text-decoration: none;
        border-bottom: 1px dashed #f5359e;
      }
    `}</style>
  </div>
);
