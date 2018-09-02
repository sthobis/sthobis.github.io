import React from 'react';
import "../styles/index.less";

let today = new Date()

const IndexPage = () => (
  <div className="page-index">
    <p>{today.getDate()}/{today.getMonth() + 1}/{today.getFullYear()}</p>
    <h1>STEFANUS THOBI SINAGA</h1>
    <h2>javascript web / mobile developer</h2>
  </div>
)

export default IndexPage
